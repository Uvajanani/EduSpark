import React, { useState } from 'react';
import './MysteryDetective.css';
import backgroundImg from '../../assets/MysteryDetective.webp';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const questions = [
    { question: "A secret code is found! Convert 1011 (binary) to decimal.", options: ["11", "9"], answer: "11" },
    { question: "A mysterious note contains 45 in Roman numerals. What is it?", options: ["XLV", "LXV"], answer: "XLV" },
    { question: "Detective found an encrypted message! Convert 78 to binary.", options: ["1001110", "1001111"], answer: "1001110" },
    { question: "Crack the number system puzzle! What is the decimal value of 2A in hexadecimal?", options: ["42", "38"], answer: "42" },
    { question: "Final challenge! Convert 256 to octal.", options: ["400", "200"], answer: "400" }
];

const MysteryDetective = () => {
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
            alert("💀 Game Over! The mystery remains unsolved!");
            navigate('/learn/subjects/maths'); 
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`🕵️‍♂️ Congratulations! You solved the mystery! Your final score is ${score + 10}`);
            
        }
    };

    return (
        <div className='gc' style={{ backgroundImage: `url(${backgroundImg})`}}>
        <div className="game-container">
            <h2>Mystery Detective - Number Systems</h2>
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

export default MysteryDetective;


