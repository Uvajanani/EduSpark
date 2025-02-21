import React, { useState } from 'react';
import axios from 'axios';
import './QuadrilateralQuest.css';
import backgroundImg from '../../assets/QuadrilateralQuest.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "Which quadrilateral has all sides and angles equal?", options: ["Square", "Rhombus"], answer: "Square" },
    { question: "A parallelogram with opposite sides equal and all angles 90° is called?", options: ["Rectangle", "Trapezium"], answer: "Rectangle" },
    { question: "Which quadrilateral has only one pair of parallel sides?", options: ["Trapezium", "Parallelogram"], answer: "Trapezium" },
    { question: "A quadrilateral with opposite sides parallel and equal, but no right angles is?", options: ["Rhombus", "Parallelogram"], answer: "Parallelogram" },
    { question: "What is the sum of the interior angles of any quadrilateral?", options: ["360°", "180°"], answer: "360°" }
];

const QuadrilateralQuest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate();

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
            updateScoreInDB(newScore); // ✅ Update the score in the database
        } else {
            setLives(lives - 1);
        }

        if (lives - 1 === 0 && userAnswer !== questions[currentQuestionIndex].answer) {
            alert("💀 Game Over! Try again!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🏛️ Congratulations! You mastered Quadrilaterals! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="game-container">
                <h2>Quadrilateral Quest 🏛️ - Types & Properties</h2>
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

export default QuadrilateralQuest;
