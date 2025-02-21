import React, { useContext, useState } from 'react';
import axios from 'axios';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContextProvider';

const LoginPopUp = ({ setshowLogin }) => {
    const { url, setToken } = useContext(StoreContext);
    const [curState, setCurState] = useState("Login");
    
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let apiUrl = curState === "Login" ? `${url}/api/user/login` : `${url}/api/user/register`;
    
        try {
            const response = await axios.post(apiUrl, data);
    
            if (response.data.success && response.data.token) {
                console.log("✅ API Response Token:", response.data.token); // 🔥 Check if token exists
    
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
    
                console.log("✅ Token saved to localStorage:", response.data.token);
                console.log("✅ Token from localStorage right after saving:", localStorage.getItem("token"));
    
                setshowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    
    

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>

                <div className="login-popup-inputs">
                    {curState !== "Login" && <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>

                <button type='submit'>{curState === "Login" ? "Login" : "Create Account"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>

                {curState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopUp;
//console.log(localStorage.getItem("token"));
