import React, { useState } from 'react';
import './RCLearn.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Skeleton from '../../Learning/Skeleton/Skeleton';
import BallSocketJoint from '../../Learning/BallSocketJoint/BallSocketJoint';
import BoneOfTheHand from '../../Learning/BoneOfTheHand/BoneOfTheHand';
import HingeJoint from '../../Learning/HingeJoint/HingeJoint';
import RibCage from '../../Learning/RibCage/RibCage';
import BackBone from '../../Learning/BackBone/BackBone';

const RCLearn = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(10);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setProgress((prev) => Math.min(prev + 10, 100)); 
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`biology-learning-container ${darkMode ? 'dark-mode' : ''}`}>
        <div className="left-bio">
        <Routes>
          <Route path="/learn/subjects/biology/ballSocketJoint" element={<BallSocketJoint />} />
          <Route path="/learn/subjects/biology/boneOfTheHand" element={<BoneOfTheHand />} />
          <Route path="/learn/subjects/biology/hingeJoint" element={<HingeJoint />} />
          <Route path="/learn/subjects/biology/ribCage" element={<RibCage />} />
          <Route path="/learn/subjects/biology/backBone" element={<BackBone />} />
          <Route path="*" element={<RibCage />} />
        </Routes>
      </div>

      <div className="right-bio">
        <h4>📖 Course Contents</h4>

        <div className="sub-div">
          <h5 onClick={() => toggleSection(1)}>
            Human Body and its Movements {openSection === 1 ? '▲' : '▼'}
          </h5>
          {openSection === 1 && (
            <div className="content">
              <p onClick={() => navigate('/learn/subjects/biology/ballSocketJoint')}>⚙️ Ball and Socket Joints</p>
              <p onClick={() => navigate('/learn/subjects/biology/boneOfTheHand')}>🔄 Bone of the Hand</p>
              <p onClick={() => navigate('/learn/subjects/biology/hingeJoint')}>🔩 Hinge Joints</p>
              <p onClick={() => navigate('/learn/subjects/biology/ribCage')}>🛠️ Rib Cage</p>
              <p onClick={() => navigate('/learn/subjects/biology/backBone')}>🛠️ Back Bone</p>
            </div>
          )}
        </div>

        {/* <div className="sub-div">
          <h5 onClick={() => toggleSection(2)}>
            Animals and Their Movements {openSection === 2 ? '▲' : '▼'}
          </h5>
        </div> */}

        <div className="progress-bar">
          <p>📊 Course Completion: <strong>{progress}%</strong></p>
          <progress value={progress} max="100"></progress>
        </div>
      </div>

      
    </div>
  );
};

export default RCLearn;
