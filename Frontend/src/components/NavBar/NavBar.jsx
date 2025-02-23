import React, { useContext } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContextProvider';
const NavBar = ({showMenu, setShowMenu, setshowLogin}) => { 

  const navigate = useNavigate()
  const location = useLocation();
  const { token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
}

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

      {!token ? <button onClick={() => setshowLogin(true)}>Sign In</button>
                 : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" /> 
                        <ul className="nav-profile-dropdown">
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                   </div>}
    </div>
  );
};

export default NavBar;
