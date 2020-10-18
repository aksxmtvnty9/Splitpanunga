import React,{useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Button from '../Button'
import InputWrap from './InputWrap'
import LoginExtras from './LoginExtras'

function LoginForm(){
    const [users, setUsers] = useState({
        name:"",
        email:"",
        password:"",
    
        loginEmail:"",
        loginPassword:"",
      });
    const history = useHistory();

    const notify = (message) => {
      toast(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className:'theme-background-alert',
          progressClassName: 'theme-progress-bar',
          autoClose: 2000
      });
  }
    function handleloginEmail(event){
        setUsers(prevUsers=>{
          prevUsers.loginEmail = event.target.value;
          return prevUsers
        })
      }
      function handleloginPassword(event){
        setUsers(prevUsers=>{
          prevUsers.loginPassword = event.target.value;
          return prevUsers
        })
      }
      function loginAuthentication(event){
        event.preventDefault();
        const userCredentials = [];
        userCredentials.push(users.loginEmail);
        userCredentials.push(users.loginPassword);
        if(users.loginEmail.length === 0 || users.loginPassword.length === 0){
          if(users.loginEmail.length === 0 && users.loginPassword.length === 0)
            notify("Please enter login details")
          else if(users.loginEmail.length === 0)
            notify("Enter an email")
          else if(users.loginPassword.length === 0)
            notify("Enter a password")
        }
        else{
          axios.post(`http://localhost:4000/post-call-login`,userCredentials)
            .then(res => {
              //console.log(res);
              //console.log(res.data);
            // alert(res.data[0])
              if(res.data[0] === "Email & Password does not match or account does not exist."){
              notify(res.data[0])
              }
              if(res.data[0] === "Password incorrect"){
              notify(res.data[0])
              }
              if(res.data[0] === "login success"){
              localStorage.setItem("login-key",res.data[1])
              history.push("/loading")
              setTimeout(()=>{history.push("/home/")},2000)
              }
          })
          .catch(err=>{
            notify(err.message)
          })
        }         
      }
      const inputRef = useRef(null)
      useEffect(() => {
        inputRef.current.focus();

        toast.configure({
          autoClose: 500,
          draggable: false,
          //etc you get the idea
        });
        toast.configure()
      }, [])
    return(
        <form>
            <h4 className="login-h4">Welcome to splitpannunga</h4>
            <InputWrap inputRef={inputRef} class="login-input" name="Email address" method={handleloginEmail} type="text"/>
            <InputWrap class="login-input" name="Password" method={handleloginPassword} type="password"/>
            <Button class="log-btn" name="Log in" onclickmeth={loginAuthentication}/>
            <LoginExtras class="small-p" text="Forgot your password? " btnClass="forgot-btn" btnName="click here"/>
            <hr/>
            <LoginExtras class="small-p" text="Or login with " btnClass="google-btn " btnName="Google"/>
            <ToastContainer />
        </form>
    )
}

export default LoginForm