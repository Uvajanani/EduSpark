import { useState } from 'react';
import axios from 'axios';
import './MethodsForSeparation.css';

function MethodsForSeparation() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

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
        subject: "science", // ✅ Ensure correct subject
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

  const checkAnswer = (answer) => {
    const correctAnswer = 'A'; // ✅ Correct answer

    if (answer === correctAnswer) {
      const newScore = score + 1;
      setScore(newScore);
      setFeedback('✅ Correct! This is a saturated solution.');
      showAnimation();
      updateScoreInDB(newScore); // ✅ Update score in database
    } else {
      setFeedback('❌ Incorrect. The correct answer is "A".');
    }
  };

  const showAnimation = () => {
    setIsAnimationVisible(true);
    setTimeout(() => {
      setIsAnimationVisible(false);
    }, 4000); // Hide animation after 4 seconds
  };

  return (
    <div className="App">
      <h1>Solutions: Saturated and Unsaturated Solutions</h1>

      <div className="quiz-container">
        <p>Which of the following is a saturated solution?</p>
        <div className="options">
          <button className="option" onClick={() => checkAnswer('A')}>A. A solution where no more salt can dissolve</button>
          <button className="option" onClick={() => checkAnswer('B')}>B. A solution where more salt can dissolve</button>
          <button className="option" onClick={() => checkAnswer('C')}>C. A solution with sugar and water</button>
          <button className="option" onClick={() => checkAnswer('D')}>D. A solution with oil and water</button>
        </div>

        {isAnimationVisible && (
          <div className="animation-container">
            <div className="salt"></div>
            <div className="water"></div>
          </div>
        )}

        <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>{feedback}</p>
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
}

export default MethodsForSeparation;
