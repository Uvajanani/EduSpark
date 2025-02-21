import React, { useState } from 'react';
import axios from 'axios';
import './ShapeExplorer.css';
import backgroundImg from '../../assets/ShapeExplorer.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "You are given two line segments. How can you determine which is longer without a measuring tool?", options: ["Estimate by eye", "Compare with a standard object"], answer: "Compare with a standard object" },
    { question: "How should you align a ruler when measuring a line segment for accuracy?", options: ["Start from any random point", "Align with the zero mark on the ruler"], answer: "Align with the zero mark on the ruler" },
    { question: "A divider is used to compare two line segments. What is the correct way to use it?", options: ["Stretch it randomly and place on the paper", "Adjust to the length of one segment, then compare with the other"], answer: "Adjust to the length of one segment, then compare with the other" },
    { question: "Which of the following is NOT an effect of incorrect measurement in geometry?", options: ["Errors in constructing shapes", "No impact on final results"], answer: "No impact on final results" },
    { question: "Which tool is the most appropriate for measuring a curved line segment?", options: ["Ruler", "Measuring tape"], answer: "Measuring tape" }
];

const ShapeExplorer = () => {
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
            alert("💀 Game Over! Try again!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🎉 Congratulations! You completed the Shape Explorer game! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="game-container">
            <h2>Shape Explorer Quest 🧭 - Basic Shapes & Line Segments</h2>
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

export default ShapeExplorer;
