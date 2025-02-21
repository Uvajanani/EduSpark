import React, { useState, useEffect } from 'react';
import './AngleHunter.css';
import backgroundImg from '../../assets/AngleHunter.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const questions = [
    { question: "An angle less than 90° is called?", options: ["Acute", "Obtuse"], answer: "Acute" },
    { question: "Which angle measures exactly 90°?", options: ["Right", "Reflex"], answer: "Right" },
    { question: "Which angle is greater than 180° but less than 360°?", options: ["Straight", "Reflex"], answer: "Reflex" },
    { question: "How many degrees does a complete angle measure?", options: ["360°", "180°"], answer: "360°" },
    { question: "You need to measure an angle using a protractor. Where should you place the protractor's center point?", options: ["On any random point of the angle", "On the vertex of the angle"], answer: "On the vertex of the angle" }
];

const AngleHunter = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate();

    const updateScoreInDB = async (finalScore) => {
        const userId = localStorage.getItem("userId"); // ✅ Retrieve user ID from local storage
        const token = localStorage.getItem("token"); // ✅ Get authentication token

        if (!userId || !token) {
            console.error("❌ User not authenticated");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4000/api/user/update-score", {
                userId,
                subject: "maths",
                score: finalScore
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
            setScore(prevScore => prevScore + 10);
        } else {
            setLives(prevLives => prevLives - 1);
        }

        if (lives - 1 === 0 && userAnswer !== questions[currentQuestionIndex].answer) {
            alert("💀 Game Over! Try again!");
            navigate('/learn/subjects/maths');
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            const finalScore = score + 10;
            alert(`🎯 Congratulations! You completed the Angle Hunter game! Your final score is ${finalScore}`);
            updateScoreInDB(finalScore); // ✅ Send score update to backend
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="game-container">
                <h2>Angle Hunter 🎯 - Types & Measurement</h2>
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

export default AngleHunter;
