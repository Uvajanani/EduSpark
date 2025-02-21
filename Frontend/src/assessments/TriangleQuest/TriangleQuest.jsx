import React, { useState } from 'react';
import './TriangleQuest.css';
import backgroundImg from '../../assets/TriangleQuest.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "Which triangle has all three sides equal?", options: ["Equilateral", "Scalene"], answer: "Equilateral" },
    { question: "A triangle with two equal sides is called?", options: ["Isosceles", "Right-angled"], answer: "Isosceles" },
    { question: "Which triangle has all sides of different lengths?", options: ["Equilateral", "Scalene"], answer: "Scalene" },
    { question: "Which triangle has one angle greater than 90°?", options: ["Acute", "Obtuse"], answer: "Obtuse" },
    { question: "What is the sum of the interior angles of any triangle?", options: ["180°", "360°"], answer: "180°" }
];

const TriangleQuest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const navigate = useNavigate()

    const checkAnswer = (userAnswer) => {
        if (userAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 10);
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
            alert(`🔺 Congratulations! You mastered Triangles & Their Classification! Your final score is ${score + 10}`);
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})`}}>
        <div className="game-container">
            <h2>Triangle Quest 🔺 - Classification & Properties</h2>
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

export default TriangleQuest;
