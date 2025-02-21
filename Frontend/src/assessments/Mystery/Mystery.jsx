import React, { useState } from "react";
import "./Mystery.css"; 
import IndiaMap from "../IndiaMap/IndiaMap";
import { assets } from "../../assets/assets";
const quizData = [
  {
    question: "Where did people live?",
    type: "map",
    correctAnswer: "Riverbanks",
    options: ["Mountains", "Deserts", "Riverbanks", "Forests"],
  },
  {
    question: "What did skilled gatherers know?",
    type: "image",
    correctAnswer: "Gathering edible plants, roots, and fruits",
    options: ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"],
  },
  {
    question: "Where was rice first grown?",
    type: "map",
    correctAnswer: "Vindhyas",
    options: ["Himalayas", "Vindhyas", "Thar Desert", "Deccan Plateau"],
  },
  {
    question: "Where does the word 'India' come from?",
    type: "image",
    correctAnswer: "Indus",
    options: ["img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg"],
  },
  {
    question: "The name 'Bharata' was used for which group?",
    type: "map",
    correctAnswer: "Northwest",
    options: ["South", "East", "Northwest", "Central"],
  }
  // {
  //   question: "Which book was handwritten and dealt with religion?",
  //   type: "image",
  //   correctAnswer: "Manuscript",
  //   options: ["inscriptions.jpg", "manuscript.jpg", "scrolls.jpg", "tablets.jpg"],
  // },
  // {
  //   question: "What are inscriptions?",
  //   type: "image",
  //   correctAnswer: "Writings on stone or metal",
  //   options: ["printed.jpg", "paper.jpg", "stone.jpg", "oral.jpg"],
  // },
  // {
  //   question: "What is the study of the past called?",
  //   type: "image",
  //   correctAnswer: "Archaeology",
  //   options: ["biology.jpg", "geography.jpg", "archaeology.jpg", "astrology.jpg"],
  // }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setFeedback("🎉 Smart Child! That's correct!");
    } else {
      setFeedback(`❌ Don't worry! The correct answer is ${quizData[currentQuestion].correctAnswer}`);
    }
    setOpen(true);
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback(null);
      setOpen(false);
    } else {
      setFeedback("✅ Quiz Completed! Great Job!");
      setOpen(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="card">
        <div className="card-content">
          <h2>{quizData[currentQuestion].question}</h2>
          {quizData[currentQuestion].type === "map" ? (
            <IndiaMap onSelect={handleAnswer} />
          ) : (
            <div className="image-grid">
              {quizData[currentQuestion].options.map((option) => (
                <button key={option} className="answer-button" onClick={() => handleAnswer(option)}>
                  <img src={assets[option.replace(".jpeg", "")]} alt={option} className="option-image" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {open && (
        <div className="dialog">
          <div className="dialog-content">
            <p>{feedback}</p>
            <button className="next-button" onClick={nextQuestion}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}