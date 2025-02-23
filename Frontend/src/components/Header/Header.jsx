import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <img src={assets.header_img} alt="" />
        <div className='header-contents'>
           
        </div>
    </div>
  )
}

export default Header