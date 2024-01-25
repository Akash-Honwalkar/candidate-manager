import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Card from 'react-bootstrap/Card'
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
    const handleGoogleLogin=(response)=>{
        navigate("/home")
    }
  return (
    <Card className='d-grid w-50 justify-content-center m-5'>
        <h4 className='m-5'>Select Login method</h4>
    <div className='d-grid mb-5'>
    <GoogleOAuthProvider clientId="617343867335-2egvi3tmtklk3esf578jvnn6cbvtaie1.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={handleGoogleLogin}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </GoogleOAuthProvider>
      {/* <GoogleLogin className='m-5 google_btn'
        clientId="617343867335-rgt59cei88q47ls0ooj1di2sftk59m9u.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        /> */}
        
      {/* <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    // callback={responseFacebook} 
    /> */}
    
      {/* Add Facebook and LinkedIn logins similarly */}
    </div>
    </Card>
  )
}

export default Login