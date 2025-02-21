import React from 'react'
import './Practice.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Practice = () => {

    const navigate = useNavigate()

  return (
    <div className='subjects'>
      <h2>All Assessments</h2>
      <p>Let's start testing your favourite subjects</p>

      <div className='all-subjects'>
        <div onClick={()=>navigate('/learn/practice/english')} className='English'>
            <img src={assets.English} alt="" />
            <p>English</p>
        </div>
        
        
        <div onClick={()=>navigate('/learn/practice/maths')} className='Maths'>
            <img src={assets.Maths} alt="" />
            <p>Mathematics</p>
        </div>

        <div onClick={()=>navigate('/learn/practice/physics')} className='Physics'>
            <img src={assets.Physics} alt="" />
            <p>Physics</p>
        </div>

        <div onClick={()=>navigate('/learn/practice/chemistry')} className='Chemistry'>
            <img src={assets.Chemistry} alt="" />
            <p>Chemistry</p>
        </div>

        <div onClick={()=>navigate('/learn/practice/biology')} className='Biology'>
            <img src={assets.Biology} alt="" />
            <p>Biology</p>
        </div>


        <div onClick={()=>navigate('/learn/practice/history')} className='History'>
            <img src={assets.History} alt="" />
            <p>History</p>
        </div>

        <div onClick={()=>navigate('/learn/practice/geography')} className='Geography'>
            <img src={assets.Geography} alt="" />
            <p>Geography</p>
        </div>


        <div onClick={()=>navigate('/learn/practice/civics')} className='Civics'>
            <img src={assets.Civics} alt="" />
            <p>Civics</p>
        </div>
      </div>
    </div>
  )
}

export default Practice
