import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'

function Home(){

    const history = useHistory();
    const[loginAuth,setLoginAuth] = useState("");
    const[userData,setUserData] = useState("");

    useEffect(()=>{
        const token = localStorage.getItem("login-key");
        let isAvailable = true;

        // console.log(token)
        const loadData = async ()=>{
            await axios.post(`http://localhost:4000/check-login`,{"data":token})
            .then(res => {
                // console.log(res);
                var arr = []
                if(isAvailable){
                    setLoginAuth(res.data[0])
                    arr.push(res.data[1][0].id)
                    arr.push(res.data[1][0].name)
                    setUserData(arr)
                }
            })
            if(loginAuth === "jwt expired") {
                localStorage.clear()
                history.push("/loading")
                setTimeout(()=>{
                    history.push("/");
                },1700)
            }
            if(loginAuth === "jwt must be provided") {
                localStorage.clear()
                history.push("/loading")
                setTimeout(()=>{
                    history.push("/");
                },1700)
            }
        }
        loadData()
        return ()=>{
            isAvailable = false
        }
    },[loginAuth])
    return(
        <div>
            <Header user={userData} />
            <Dashboard user={userData}/>
        </div>
      )
}

export default Home