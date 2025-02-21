import React, { useState } from 'react';
import axios from 'axios';
import './SpaceAdventure.css';
import backgroundImg from '../../assets/SpaceAdventure.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "Your spaceship needs a fuel code! What comes after 999,999?", options: ["1,000,000", "999,998"], answer: "1,000,000" },
    { question: "A meteor is heading your way! Choose the largest number: 8,76,543 or 9,87,654?", options: ["9,87,654", "8,76,543"], answer: "9,87,654" },
    { question: "To navigate through the asteroid field, find the expanded form of 1,23,456!", options: ["1,00,000 + 20,000 + 3,000 + 400 + 50 + 6", "10,000 + 2,00,000 + 30,000 + 400 + 50 + 6"], answer: "1,00,000 + 20,000 + 3,000 + 400 + 50 + 6" },
    { question: "Alien life detected! What is 7,89,654 rounded to the nearest ten thousand?", options: ["7,90,000", "7,80,000"], answer: "7,90,000" },
    { question: "You found an ancient space code! Which number is greater: 4,56,789 or 5,67,891?", options: ["5,67,891", "4,56,789"], answer: "5,67,891" }
];

const SpaceAdventure = () => {
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
            alert("💀 Game Over! Your spaceship is lost in space!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🚀 Congratulations! You completed the space mission! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="game-container">
            <h2>Space Adventure - Larger Numbers</h2>
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

export default SpaceAdventure;
