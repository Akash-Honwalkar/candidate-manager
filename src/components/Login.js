import Card from 'react-bootstrap/Card'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { LoginSocialFacebook, LoginSocialGoogle, LoginSocialLinkedin } from 'reactjs-social-login';
import { FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';


const Login = () => {
  const navigate=useNavigate()
  
    const handleGoogleLogin=(response)=>{
        navigate("/home")
    }

  return (
    <Card className='d-grid w-50 justify-content-center m-5'>
        <h4 className='m-5'>Select Login method</h4>
    <div className='d-grid mb-5'>
    <LoginSocialGoogle
            isOnlyGetToken
            client_id="617343867335-2egvi3tmtklk3esf578jvnn6cbvtaie1.apps.googleusercontent.com"

            onResolve={handleGoogleLogin}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <LoginSocialFacebook
            isOnlyGetToken
            appId="940899840723586"

            onResolve={handleGoogleLogin}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
          <LoginSocialLinkedin
            isOnlyGetToken
            client_id="77ctx3eujqddle"
            client_secret="Fw531vlpmDECgowa"
            redirect_uri='http://localhost:3000/'
            onResolve={handleGoogleLogin}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <LinkedInLoginButton />
          </LoginSocialLinkedin>
    </div>
    </Card>
  )
}

export default Login