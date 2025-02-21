import React from 'react'
import './PracticeQuestions.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PracticeQuestions = () => {
    const navigate = useNavigate()
  return (
    <div className='pracqns'>
      <h2>Practice Questions</h2>
      <div className='sub-topics'>
        
        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/escapeRoomGame')} className='compare'>
            <img src={assets.EscapeRoomGame} alt="" />
            <p>Comparing Numbers</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/treasureHuntGame')} className='formation'>
            <img src={assets.TreasureHuntGame} alt="" />
            <p>Formation of Numbers</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/secretCodeBreaker')} className='place'>
            <img src={assets.SecretCodeBreaker} alt="" />
            <p>Place Values</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/spaceAdventure')} className='large'>
            <img src={assets.SpaceAdventure} alt="" />
            <p>Larger Numbers</p>
        </div>


        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/mysteryDetective')} className='numberSystem'>
            <img src={assets.MysteryDetective} alt="" />
            <p>Number Systems</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/raceAgainsttime')} className='interconversion'>
            <img src={assets.RaceAgainstTime} alt="" />
            <p>Interconversion of Units</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/perpendicular')} className='perpendicular'>
            <img src={assets.PerpendicularQuest} alt="" />
            <p>Perpendicular</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/polygon')} className='polygon'>
            <img src={assets.PolygonQuest} alt="" />
            <p>Polygon</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/triangle')} className='triangle'>
            <img src={assets.TriangleQuest} alt="" />
            <p>Triangle</p>
        </div>

        <div onClick={() => navigate('/learn/practice/maths/practiceQuestions/quadrilateral')} className='quadrilateral'>
            <img src={assets.QuadrilateralQuest} alt="" />
            <p>Quadrilateral</p>
        </div>
      </div>
    </div>
  )
}

export default PracticeQuestions
