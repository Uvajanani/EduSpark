import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"; // ✅ Import to decode token
import { StoreContext } from "../../context/StoreContextProvider"; // ✅ Import Store Context
import './EscapeRoomGame.css';
import backgroundImg from '../../assets/EscapeRoomGame.png';
import { assets } from '../../assets/assets';

const questions = [
    { question: "You see two doors with numbers. Choose the greater number to escape!", options: ["78,965", "79,856"], answer: "79,856" },
    { question: "A locked gate asks: Which number is smaller?", options: ["45,123", "45,321"], answer: "45,123" },
    { question: "A keypad needs the largest number to unlock. Choose wisely!", options: ["9,876", "9,768"], answer: "9,876" },
    { question: "The door requires the greater number to open!", options: ["567,432", "567,342"], answer: "567,432" },
    { question: "Arrange in descending order to find the exit: 98,765, 97,856, 99,678", options: ["99,678, 98,765, 97,856", "98,765, 99,678, 97,856"], answer: "99,678, 98,765, 97,856" }
];

const EscapeRoomGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate();
    const { url, token } = React.useContext(StoreContext); // ✅ Access API URL & token

    // ✅ Function to update the score in the backend
    const updateScore = async (finalScore) => {
        if (!token) {
            console.error("❌ No token found. User not logged in.");
            return;
        }

        // ✅ Decode userId from token
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        try {
            const response = await axios.post(
                `${url}/api/user/update-score`,
                { userId, subject: "maths", score: finalScore }, // ✅ Send score to backend
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.data.success) {
                console.log("✅ Score updated successfully:", response.data.user);
            } else {
                console.error("❌ Failed to update score:", response.data.message);
            }
        } catch (error) {
            console.error("❌ Error updating score:", error);
        }
    };

    const checkAnswer = (userAnswer) => {
        let newScore = score;

        if (userAnswer === questions[currentQuestionIndex].answer) {
            newScore += 10; // ✅ Increase score for correct answer
            setScore(newScore);
        } else {
            setLives(lives - 1);
        }

        // ✅ If lives are finished, end the game and update score
        if (lives - 1 === 0 && userAnswer !== questions[currentQuestionIndex].answer) {
            alert("💀 Game Over! Redirecting to practice mode...");
            updateScore(newScore); // ✅ Save final score before exiting
            navigate('/learn/subjects/maths'); 
            return;
        }

        // ✅ If all questions are answered, update score and end game
        if (currentQuestionIndex === questions.length - 1) {
            alert(`🎉 Congratulations! You escaped the room! Your final score is ${newScore}`);
            updateScore(newScore); // ✅ Save final score
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="game-container">
                <h2>Escape Room - Comparing Numbers</h2>
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

export default EscapeRoomGame;
