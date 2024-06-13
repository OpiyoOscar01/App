import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
function LoginPopup({ setShowLogin }) {

    const [currState, setCurState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name.' required />
                    }
                    <input type="email" placeholder='Your email.' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"} </button>
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By Continuing,I agree to the terms and the privacy policy.</p>
                </div>
                {
                    currState === "Login" ?
                        <p>Create a new account? <span onClick={() => setCurState("Sign Up")}>Click here.</span></p>
                        :
                        <p>Already have an account?<span onClick={() => setCurState("Login")}>Login here.</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup