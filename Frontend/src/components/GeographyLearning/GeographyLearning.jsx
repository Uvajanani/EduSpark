import React from 'react'
import './GeographyLearning.css'
import { assets } from '../../assets/assets';

const GeographyLearning = () => {
    return (
        <div className='geo-container'>
            <h2>Motions of Earth</h2>
            <div className='geo-learn'>
            <div className='geo-video'>
                <video width="640" height="360" controls>
                <source src={assets.video3} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            </div>
        </div>
      );
}

export default GeographyLearning
