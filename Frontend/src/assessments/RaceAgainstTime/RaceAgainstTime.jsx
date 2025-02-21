import React, { useState } from 'react';
import axios from 'axios';
import './RaceAgainstTime.css';
import backgroundImg from '../../assets/RaceAgainstTime.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "Your race car needs fuel! Convert 2.5 km to meters.", options: ["2500", "25"], answer: "2500" },
    { question: "A speed limit sign is damaged! Convert 60 mph to km/h (approx).", options: ["96.5", "100"], answer: "96.5" },
    { question: "The pit stop crew needs the correct conversion! Convert 5 liters to milliliters.", options: ["5000", "50"], answer: "5000" },
    { question: "Tire pressure must be correct! Convert 30 PSI to kPa (approx).", options: ["206", "250"], answer: "206" },
    { question: "Final lap! Convert 120 minutes to hours.", options: ["2", "3"], answer: "2" }
];

const RaceAgainstTime = () => {
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
            alert("💀 Game Over! You ran out of time!");
            navigate('/learn/subjects/maths'); 
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🏁 Congratulations! You finished the race! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="game-container">
            <h2>Race Against Time - Interconversion of Units</h2>
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

export default RaceAgainstTime;
