import React from 'react'
import './Ncert.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Ncert = () => {

    const navigate = useNavigate()

  return (
    <div  className='ncert-div'>
      <h2>NCERT Questions</h2>
      <div onClick={() => navigate('/learn/practice/maths/NCERT/mathQuiz')} className='ncert-qns'>
        <div className='math-quiz'>
            <img src={assets.Quiz} alt="" />
            <p>Math Quiz</p>
        </div>
      </div>
    </div>
  )
}

export default Ncert
