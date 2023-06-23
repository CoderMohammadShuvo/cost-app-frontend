import React, { useState } from 'react'
import './Login.css'


const Login = () => {

  const [email, setEmail] =useState();
  const [password, setPassword] = useState();
  const matchEmail = email === "nathan@gmail.com";
  const matchPass = password === "demo123"
  const handleLogin = () =>{
  
    if( email === "nathan@gmail.com" && password === "demo123"){
      window.location.href = '/home'; 
    }else{

    }
  }
  return (
    <div className='logInMain'>
      <div className="logInBox">
        <label htmlFor="email" className='labes'>Email</label><br />
        <input type="text" name='email' className='inputs' required onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email" className='labes' id="passwrod">Password</label><br />
        <input type="password" name='email' className='inputs' required onChange={(e) => setPassword(e.target.value)} />
       
        <button onClick={handleLogin} className='loginButton'>Log In</button>
      </div>
    </div>
  )
}

export default Login
