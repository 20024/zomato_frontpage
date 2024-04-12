import React from 'react'
import './Login.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GoogleLogin } from '@react-oauth/google';

const Login = ({ handleLogin }) => {
  return (
    <div className='modal-background'>
      <div className="modal-container">
        <button className='close-btn' onClick={handleLogin}><IoMdCloseCircleOutline size={30} /></button>
        <h1>Login</h1>

        <PhoneInput
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true
          }}
          containerStyle={{
            marginTop: '20px',
            marginBottom: '10px',
            width:'100%',
            height:'60px',
            color:'black',
          }}
          inputStyle={{
            /* Add your custom input styles here */
            padding: '10px', // Example custom style
            fontSize: '16px', // Example custom style
            width:'100%',
            height:'60px',
            color:'black',
            paddingLeft:'50px'
          }}
        />
        <h1>or</h1>

        <button className='google'><GoogleLogin
         onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></button>
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
    
    
  )
}
export default Login
