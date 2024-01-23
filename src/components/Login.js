import React from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from "react-facebook-login"
import Card from 'react-bootstrap/Card'


const Login = () => {
  return (
    <Card className='d-grid w-50 justify-content-center'>

    <div className='d-grid mb-5'>
      <GoogleLogin className='m-5'
        clientId="617343867335-rgt59cei88q47ls0ooj1di2sftk59m9u.apps.googleusercontent.com"
        buttonText="Login with Google"
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        />
      <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    // callback={responseFacebook} 
    />
    
      {/* Add Facebook and LinkedIn logins similarly */}
    </div>
    </Card>
  )
}

export default Login