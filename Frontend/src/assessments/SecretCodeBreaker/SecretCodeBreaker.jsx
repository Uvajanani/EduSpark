import React, { useState } from 'react';
import axios from 'axios';
import './SecretCodeBreaker.css';
import backgroundImg from '../../assets/SecretCodeBreaker.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "The vault is locked! What is the place value of 7 in 76,543?", options: ["70,000", "7,000"], answer: "70,000" },
    { question: "Crack the code! What is the expanded form of 45,682?", options: ["40,000 + 5,000 + 600 + 80 + 2", "4,000 + 50,000 + 600 + 80 + 2"], answer: "40,000 + 5,000 + 600 + 80 + 2" },
    { question: "Unlock the door! What is the place value of 3 in 83,215?", options: ["3,000", "30,000"], answer: "3,000" },
    { question: "Enter the secret code! What is 92,345 rounded to the nearest thousand?", options: ["92,000", "93,000"], answer: "92,000" },
    { question: "Break the final lock! Which number is greater: 8,76,543 or 7,89,654?", options: ["8,76,543", "7,89,654"], answer: "8,76,543" }
];

const SecretCodeBreaker = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate();

    // ✅ Function to update score in database
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

    // ✅ Function to handle user answers
    const checkAnswer = (userAnswer) => {
        if (userAnswer === questions[currentQuestionIndex].answer) {
            const newScore = score + 10;
            setScore(newScore);
            updateScoreInDB(newScore); // ✅ Update the score in the database
        } else {
            setLives(lives - 1);
        }

        if (lives - 1 === 0 && userAnswer !== questions[currentQuestionIndex].answer) {
            alert("💀 Game Over! The vault remains locked!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🔐 Congratulations! You cracked the secret code! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="game-container">
            <h2>Secret Code Breaker - Place Values</h2>
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

export default SecretCodeBreaker;
