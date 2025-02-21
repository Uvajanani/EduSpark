import React from 'react'
import './MathsTest.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const MathsTest = () => {
    const navigate = useNavigate()
  return (
    <div className='test-container'>
      <h2>Maths Assessments</h2>
      <div className='ncert-practice'>
        <div onClick={() => navigate('/learn/practice/maths/NCERT')} className='ncert'>
            <img src={assets.NCERT} alt="" />
            <p>NCERT Test Questions</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions')} className='practice'>
            <img src={assets.PracticeQns} alt="" />
            <p>Practice Questions</p>
        </div>
      </div>
    </div>
  )
}

export default MathsTest
