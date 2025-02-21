import React from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({showMenu, setShowMenu, setshowLogin}) => { 

  const navigate = useNavigate()
  const location = useLocation();

  return (
    <div className='navbar'>
      {location.pathname.startsWith('/learn') && (
        <div onClick={() => setShowMenu(!showMenu)} className='menu-icon'>
          <img src={assets.menu} alt="Menu" />
        </div>
      )}

      <img className='navbar-logo' onClick={() => navigate('/')} src={assets.logo} alt="" />

      <ul className='navbar-menus'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/learn'>Learn</Link></li>
        <li><Link to='/dashBoard'>DashBoard</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>

      <button onClick={() => setshowLogin(true)}>Sign In</button>
    </div>
  );
};

export default NavBar;
