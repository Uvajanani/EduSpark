import React, { useState } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import Chatbot from '../ChatBot/ChatBot';

const SideBar = ({showMenu, setShowMenu, isOpen, setisOpen}) => {
     
    return (
        <>
            {showMenu && (
                <div className='sidebar'>
                    <div className='menu-bar'>
                        <div onClick={() => setShowMenu(!showMenu)} className='menu-img'>
                            <img src={assets.menu} alt="Menu Icon" />
                        </div>

                        <div className='menu-title'>
                            <h1>EduSpark</h1>
                        </div>
                    </div>

                    <div className='top-sidebar'>
                        <div className='top-img'>
                            <img src={assets.profile_icon} alt="Profile Icon" />
                        </div>
                        
                        <div className='top-contents'>
                            <h2>Uva</h2>
                            <p>6th Grade</p>
                        </div>
                    </div>

                    <div className='Home'>
                        <div className='home-img'>
                            <img src={assets.home} alt="Home Icon" />
                        </div>
                        
                        <div className='home-contents'>
                            <Link to='/learn'>Home</Link>
                        </div>   
                    </div>

                    <div className='all-Subjects'>
                        <div className='all-subjects-img'>
                            <img src={assets.books} alt="Books Icon" />
                        </div>
                        
                        <div className='all-subjects-contents'>
                            <Link to='/learn/subjects'>All Subjects</Link>
                        </div>   
                    </div>

                    <div className='practice-qns'>
                        <div className='practice-qns-img'>
                            <img src={assets.assessment} alt="Assessment Icon" />
                        </div>
                        
                        <div className='practice-qns-contents'>
                            <Link to='/learn/practice'>Practice Questions</Link>
                        </div>   
                    </div>

                    <div  onClick={() => setisOpen(!isOpen)} className='ask-a-doubt'>
                        <div className='ask-a-doubt-img'>
                            <img src={assets.question} alt="Question Icon" />
                        </div>
                        
                        <div className='ask-a-doubt-contents'>
                            <p>Ask a Doubt</p>
                        </div>   
                    </div>
                </div>
            )}

            {isOpen && <Chatbot isOpen={isOpen} setisOpen={setisOpen}/>}
        </>
    );
};

export default SideBar;
