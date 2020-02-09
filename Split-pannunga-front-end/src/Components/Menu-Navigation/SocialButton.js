import React from 'react'

function SocialButton(props){
    return(
        <button className={props.class}><img className="social-img" src={props.url} alt="social image"/><p className="social-name">{props.name}</p></button>
    );
}

export default SocialButton