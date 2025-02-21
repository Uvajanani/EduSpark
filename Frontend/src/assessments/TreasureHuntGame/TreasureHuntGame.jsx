import React, { useState } from 'react';
import axios from 'axios';
import './TreasureHuntGame.css';
import backgroundImg from '../../assets/TreasureHuntGame.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "A treasure chest is locked. Form the largest number using 4, 1, 9, 3!", options: ["9431", "9413"], answer: "9431" },
    { question: "You found a hidden map! Arrange these numbers in ascending order: 56,789, 45,123, 67,891", options: ["45,123, 56,789, 67,891", "56,789, 45,123, 67,891"], answer: "45,123, 56,789, 67,891" },
    { question: "A pirate left a note! What's the smallest 5-digit number?", options: ["10,000", "99,999"], answer: "10,000" },
    { question: "You need to unlock the treasure! What is 78,569 rounded to the nearest thousand?", options: ["78,000", "79,000"], answer: "79,000" },
    { question: "To pass the next challenge, pick the greatest number: 345,678, 765,432, 234,567", options: ["765,432", "345,678"], answer: "765,432" }
];

const TreasureHuntGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate();

    // ✅ Function to update score in the database
    const updateScoreInDB = async (newScore) => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
            console.error("❌ User not authenticated.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4000/api/user/update-score", {
                userId,
                subject: "maths",
                score: newScore
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.success) {
                console.log("✅ Score updated successfully:", response.data);
            } else {
                console.error("❌ Failed to update score:", response.data.message);
            }
        } catch (error) {
            console.error("❌ Error updating score:", error);
        }
    };

    const checkAnswer = (userAnswer) => {
        if (userAnswer === questions[currentQuestionIndex].answer) {
            const newScore = score + 10;
            setScore(newScore);
            updateScoreInDB(newScore); // ✅ Update score in DB
        } else {
            setLives(lives - 1);
        }

        if (lives - 1 === 0 && userAnswer !== questions[currentQuestionIndex].answer) {
            alert("💀 Game Over! The treasure remains locked forever!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🏆 Congratulations! You found the treasure! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="game-container">
            <h2>Treasure Hunt - Formation of Numbers</h2>
            <div className="lives-container">
                {Array.from({ length: lives }).map((_, index) => (
                    <img key={index} src={assets.life} alt="Life" className="life" />
                ))}
            </div>
            <p>Score: {score}</p>
            <div className="question-block">
                <p className="question">{questions[currentQuestionIndex].question}</p>
                <div className="choices">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button key={index} onClick={() => checkAnswer(option)}>{option}</button>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default TreasureHuntGame;
