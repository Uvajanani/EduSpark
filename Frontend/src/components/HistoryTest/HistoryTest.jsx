import React from 'react'
import './HistoryTest.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const HistoryTest = () => {
    const navigate = useNavigate()
    return (
      <div className='test-container'>
        <h2>History Assessments</h2>
        <div className='ncert-practice'>
          <div onClick={() => navigate('/learn/practice/history/NCERT')} className='ncert'>
              <img src={assets.NCERT} alt="" />
              <p>NCERT Test Questions</p>
          </div>
  
          <div onClick={() => navigate('/learn/practice/history/practiceQuestions')} className='practice'>
              <img src={assets.PracticeQns} alt="" />
              <p>Practice Questions</p>
          </div>
        </div>
      </div>
    )
}

export default HistoryTest
