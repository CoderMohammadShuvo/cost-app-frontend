import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='logInMain'>
      <div className="logInBox">
        <label htmlFor="email" className='labes'>Email</label><br />
        <input type="text" name='email' className='inputs' required />
        <label htmlFor="email" className='labes' id="passwrod">Password</label><br />
        <input type="password" name='email' className='inputs' required />
        <button className='loginButton'>Log In</button>
      </div>
    </div>
  )
}

export default Login
