import React, { useState, useEffect } from "react";
import "./QuizApp.css"; 

const sounds = {
  correct: new Audio("/sounds/correct.mp3"),
  wrong: new Audio("/sounds/wrong.mp3"),
  countdown: new Audio("/sounds/countdown.mp3"),
  celebration: new Audio("/sounds/celebration.mp3"),
  click: new Audio("/sounds/click.mp3"),
};

const playSound = (sound) => {
  if (sounds[sound]) {
    sounds[sound].currentTime = 0;
    sounds[sound].play().catch((e) => console.warn("Audio playback failed: ", e));
  }
};

const questions = [
  { question: "What does a point represent in geometry?", options: ["A line", "A location", "A shape", "A curve"], answer: "A location" },
  { question: "A line segment has:", options: ["No endpoints", "One endpoint", "Two endpoints", "Three endpoints"], answer: "Two endpoints" },
  { question: "Which of the following extends infinitely in both directions?", options: ["Line segment", "Ray", "Line", "Polygon"], answer: "Line" },
  { question: "What is the longest chord in a circle called?", options: ["Radius", "Diameter", "Chord", "Tangent"], answer: "Diameter" },
  { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "An angle measuring 90 degrees is called?", options: ["Acute", "Right", "Obtuse", "Straight"], answer: "Right" },
  { question: "Two lines that never meet are called?", options: ["Parallel", "Perpendicular", "Intersecting", "Diverging"], answer: "Parallel" },
  { question: "A triangle with all sides equal is called?", options: ["Scalene", "Isosceles", "Equilateral", "Right"], answer: "Equilateral" },
  { question: "The sum of interior angles of a triangle is?", options: ["90°", "120°", "180°", "360°"], answer: "180°" },
  { question: "A quadrilateral with opposite sides equal and parallel is called?", options: ["Trapezium", "Rhombus", "Parallelogram", "Kite"], answer: "Parallelogram" }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (timer > 0 && !showScore && selectedAnswer === null) {
      const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      if (timer <= 3) playSound("countdown");
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, showScore, selectedAnswer]);

  const handleAnswerOptionClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    playSound("click");
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
      playSound("correct");
    } else {
      playSound("wrong");
    }
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(10);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
      playSound("celebration");
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <p className="score-display">🎉 Quiz Completed! You scored {score} out of {questions.length}. 🎉</p>
          <p className="score-message">Great job! Review your answers and keep practicing to improve.</p>
        </div>
      ) : (
        <div>
          <h2 className="question">{questions[currentQuestion].question}</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(timer / 10) * 100}%` }}></div>
          </div>
          <p className="timer">⏳ Time left: {timer} seconds</p>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <button 
                key={option} 
                className={`option-button ${selectedAnswer ? (option === questions[currentQuestion].answer ? 'correct' : 'wrong') : ''}`} 
                onClick={() => handleAnswerOptionClick(option)} 
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
