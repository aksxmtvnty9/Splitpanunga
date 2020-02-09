import React from 'react'
import Logo from './split-panunga.png'


function HeaderLeft(){
    return(
        <div className="Header-left">
            <img style={{height: "30px"}} src={Logo} alt="Logo"></img>
        </div>
    )
}

export default HeaderLeft