import React from 'react'
import './HistoryPracticeQuestions.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const HistoryPracticeQuestions = () => {

    const navigate = useNavigate()

  return (
    <div className='history-quiz-container'>
        <h2>Practice Questions</h2>
        <div onClick={() => navigate('/learn/practice/history/practiceQuestions/historyQuiz')} className='social-quiz'>
            <div className='history-quiz'>
                <img src={assets.socialQuiz} alt="" />
                <p>History Quiz</p>
            </div>
        </div>
    </div>
  )
}

export default HistoryPracticeQuestions
