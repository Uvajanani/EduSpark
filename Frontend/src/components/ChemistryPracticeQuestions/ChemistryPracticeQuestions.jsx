import React from 'react'
import './ChemistryPracticeQuestions.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const ChemistryPracticeQuestions = () => {

    const navigate = useNavigate()

  return (
    <div className='chemistry-practice-qns'>
      <h2>Chemistry Practice Questions</h2>

        <div className='sub-topics'>
        <div onClick={() => navigate('/learn/practice/chemistry/practiceQuestions/separationAdventureGame')} className='separation'>
        <img src={assets.SeparationAdventureGame} alt="" />
        <p>Separation</p>
      </div>

      <div onClick={() => navigate('/learn/practice/chemistry/practiceQuestions/methodsForSeparation')} className='methodsForSeparation'>
        <img src={assets.MethodsForSeparation} alt="" />
        <p>Methods for Separation</p>
      </div>
        </div>
      
    </div>
  )
}

export default ChemistryPracticeQuestions
