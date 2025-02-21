import React from 'react'
import './Subjects.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Subjects = () => {

  const navigate = useNavigate()

  return (
    <div className='subjects'>
      <h2>All Subjects</h2>
      <p>Let's start learning your favourite subjects</p>

      <div className='all-subjects'>
        <div onClick={() => navigate('/learn/subjects/maths')} className='Maths'>
            <img src={assets.Maths} alt="" />
            <p>Mathematics</p>
        </div>

        <div className='Physics'>
            <img src={assets.Physics} alt="" />
            <p>Physics</p>
        </div>

        <div className='Chemistry'>
            <img src={assets.Chemistry} alt="" />
            <p>Chemistry</p>
        </div>

        <div onClick={() => navigate('/learn/subjects/biology')} className='Biology'>
            <img src={assets.Biology} alt="" />
            <p>Biology</p>
        </div>


        <div onClick={() => navigate('/learn/subjects/history')} className='History'>
            <img src={assets.History} alt="" />
            <p>History</p>
        </div>

        <div onClick={() => navigate('/learn/subjects/geography')}  className='Geography'>
            <img src={assets.Geography} alt="" />
            <p>Geography</p>
        </div>


        <div className='Civics'>
            <img src={assets.Civics} alt="" />
            <p>Civics</p>
        </div>
      </div>
    </div>
  )
}

export default Subjects
