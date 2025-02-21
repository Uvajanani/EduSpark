import React from 'react'
import './Front.css'
import { assets } from '../../assets/assets'
import Chatbot from '../ChatBot/ChatBot'
import { useNavigate } from 'react-router-dom'

const Front = ({isOpen, setisOpen}) => {

    const navigate = useNavigate()

  return (
    <div className='front'>
      <h2>Welcome Buddy!😃</h2>
      <p>Get the EduSpark Learning Advantage</p>

      <div className='explore'>
        <h3>Explore</h3>

        <div className='left-right'>
            <div className='left'>
                <img src={assets.Learning} alt="" />
            </div>
            
            <div className='right'>
                <h3>Learn</h3>
                <p>We offers an immersive learning experience where students can discover subjects through interactive <span>3D visualizations</span>. Each subject is designed to enhance conceptual understanding, making learning more engaging and intuitive.</p>
                <p className='hide'>
                    <p>✨ Why Choose Our Learning Platform?</p>
                    <p>✅ 3D Visualizations – Experience subjects in a dynamic and interactive way.</p>
                    <p>✅ Gamified Learning – Solve quizzes, earn rewards, and track progress.</p>
                    <p>✅ AI-Powered Assistance - Smart suggestions based on your learning style.</p>
                </p>
            </div>
        </div>

        <div className='doubt-test'>
            <div onClick={() => setisOpen(!isOpen)} className='doubt'>
                <div className='doubt-img'>
                    <img src={assets.request} alt="" />
                </div>
                
                <div className='doubt-content'>
                    <h4>Ask a Doubt?</h4>
                    <p>Clarify your doubts</p>      
                </div>
            </div>

            <div onClick={() => navigate('/learn/practice')} className='test'>
                <div className='test-img'>
                    <img src={assets.notes} alt="" />
                </div>
                
                <div className='doubt-content'>
                    <h4>Adaptive Test</h4>
                    <p>Take a test</p>      
                </div>
            </div>
      </div>

      {isOpen && <Chatbot isOpen={isOpen} setisOpen={setisOpen}/>}

      </div>
    </div>
  )
}

export default Front
