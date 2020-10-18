import React from 'react'
import { useHistory } from "react-router-dom";

function Menu(props){
    const history = useHistory()

    function logOut(){
        localStorage.clear()
            history.push("/loading")
            setTimeout(()=>{
                history.push("/");
            },1700)
    }
    return(
        <div style={{display:props.menuState?"block":"none"}}className="menu">
            <ul className="menu-ul">
                <li className="menu-li">Settings</li>
                <li onClick={logOut} className="menu-li">Log out</li>
            </ul>
        </div>
    )
}

export default Menu