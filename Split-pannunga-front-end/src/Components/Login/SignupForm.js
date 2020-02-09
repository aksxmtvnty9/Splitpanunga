import React,{useState, useRef, useEffect} from 'react'
import axios from 'axios'
import Button from '../Button'
import InputWrap from './InputWrap'
import CountryCode from '../CountryCode'

function SignupForm(props){
    const [users, setUsers] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        code:"",
    
        loginEmail:"",
        loginPassword:"",
    });
    function handleChangeName(event){
        setUsers(prevUsers=>{
          prevUsers.name = event.target.value;
          return prevUsers
        })
      }
      function handleChangeEmail(event){
        setUsers(prevUsers=>{
          prevUsers.email = event.target.value;
          return prevUsers
        })
      }
      function handleChangePassword(event){
        setUsers(prevUsers=>{
          prevUsers.password = event.target.value;
          return prevUsers
        })
      }
      function handleChangePhone(event){
        setUsers(prevUsers=>{
          prevUsers.phone = event.target.value;
          return prevUsers
        })
      }
      function handleChangeCode(event){
        setUsers(prevUsers=>{
          prevUsers.code = event.target.value;
          return prevUsers
        })
      }
      function pushUsersTo(event){
        event.preventDefault();
        const userCredentials = [];
        userCredentials.push(users.name);
        userCredentials.push(users.email)
        userCredentials.push(users.password)
        userCredentials.push(users.code+"-"+users.phone)
         axios.post(`http://localhost:4000/post-call`,userCredentials)
           .then(res => {
            //  console.log(res);
             console.log(res.data);
         })
         setTimeout(()=>props.methodState(),1000)
      }
      const inputRef = useRef(null)
      useEffect(() => {
        inputRef.current.focus();
      }, [])
    return(
        <form>
            <h4 className="login-h4">Welcome to splitpannunga</h4>
            <InputWrap inputRef={inputRef} class="login-input" name="Name" type="text" method={handleChangeName}/>
            <InputWrap class="login-input" name="Email address"  type="text" method={handleChangeEmail}/>
            <InputWrap class="login-input" name="Password" type="password" method={handleChangePassword}/>
            <CountryCode method={handleChangeCode}/><InputWrap class="login-input-spl" name="Phone number" type="number" method={handleChangePhone}/>
            <Button class="log-btn" name="Sign up" onclickmeth={pushUsersTo}/>
        </form>
    )
}

export default SignupForm