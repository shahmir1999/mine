import React, { useState } from 'react';
import './loginSignup.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'
const LoginSignup =() => {
    const [action,setAction]= useState("Signup");
    return(
    <div className="Container">
        <div className="Header">
            <div className="text">{action}</div>
            <div className='Underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt=" "/>
                    <input type='text'placeholder='Name'/>

                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt=" "/>
                    <input type='email'placeholder='Email'/>
                    
                </div>
                <div className='input'>
                    <img src={password_icon} alt=" "/>
                    <input type='password'placeholder='Password'/>
                    
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>lost Password?<span>Click here</span></div>}
            
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    );
};
export default LoginSignup;


 