import { useState } from "react";
import axios from "axios";
import "./SeparationGame.css";

const SeparationGame = () => {
  const scenes = [
    { id: 1, question: "To remove impurities from rice, what should be separated?", options: ["Stone", "Rice", "Husk"], correctAnswer: "Stone", description: "Stones must be removed before cooking.", nextScene: 2 },
    { id: 2, question: "What should be removed from wheat to separate the husk?", options: ["Husk", "Wheat", "Stone"], correctAnswer: "Husk", description: "Husk is the outer covering of wheat.", nextScene: 3 },
    { id: 3, question: "Which of the following should be separated from fruit juice?", options: ["Seeds", "Water", "Sugar"], correctAnswer: "Seeds", description: "Seeds need to be removed to ensure purity.", nextScene: 4 },
    { id: 4, question: "To separate cream from milk, which process is used?", options: ["Evaporation", "Winnowing", "Centrifugation"], correctAnswer: "Centrifugation", description: "Centrifugation helps separate cream from milk.", nextScene: 5 },
    { id: 5, question: "To purify water, what should be removed?", options: ["Dirt", "Water", "Oxygen"], correctAnswer: "Dirt", description: "Dirt is filtered out to clean water.", nextScene: null }
  ];

  const [currentScene, setCurrentScene] = useState(scenes[0]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

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
        subject: "science",
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

  const handleOptionClick = (option) => {
    if (option === currentScene.correctAnswer) {
      const newScore = score + 10;
      setScore(newScore);
      setFeedback(`✅ Correct! ${currentScene.description}`);
      updateScoreInDB(newScore); // ✅ Update score in DB
    } else {
      setFeedback(`❌ Oops! Try again. ${currentScene.description}`);
    }

    setTimeout(() => {
      const nextScene = scenes.find(scene => scene.id === currentScene.nextScene);
      if (nextScene) {
        setCurrentScene(nextScene);
        setFeedback("");
      } else {
        alert(`🎉 Game Over! Your Final Score: ${score}`);
      }
    }, 1500);
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Separation Adventure Game</h1>
      <div className="game-box">
        <h2 className="game-question">{currentScene.question}</h2>
        <div className="options">
          {currentScene.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="feedback">{feedback}</div>
      </div>
      <h3 className="score">Score: <span>{score}</span></h3>
    </div>
  );
};

export default SeparationGame;
