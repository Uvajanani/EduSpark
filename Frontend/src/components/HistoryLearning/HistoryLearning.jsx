import React from 'react'
import './HistoryLearning.css'
import { assets } from '../../assets/assets';

const HistoryLearning = () => {
  return (
      <div className='history-container'>
          <h2>What, Where, How and When</h2>
          <div className='history-learn'>
          <div className='history-video'>
              <video width="640" height="360" controls>
              <source src={assets.video2} type="video/mp4" />
              Your browser does not support the video tag.
              </video>
          </div>
          </div>
      </div>
    );
}

export default HistoryLearning
