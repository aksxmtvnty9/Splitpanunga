import React,{useState} from "react";
import HeaderLeft from "../Header/HeaderLeft";
import Button from '../Button'
import loginLogo from './login-logo.svg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function SignIn(){
    const [login,setLogin] = useState(true)

    function CustomRenderlogin(props){
        if(props.loginSet){
           return <LoginForm />
        }
        return <SignupForm methodState={()=>{setLogin(!login)}}/>
      }
    return(
        <div>
            <div className="top-nav">
                <div className="margin-top-nav">
                    <HeaderLeft />
                    <div className="login-right">
                        <Button class="signup-btn" name={login?"Sign up":"Log in"} onclickmeth={()=>{setLogin(!login)}}/>
                    </div>
                </div>
            </div>
            <div className="center-container">
                <img className="login-logo" src={loginLogo} alt="login-logo" />
                <div className="login-form">
                    <CustomRenderlogin loginSet={login}/>                    
                </div>
            </div>
        </div>
    )
}

export default SignIn