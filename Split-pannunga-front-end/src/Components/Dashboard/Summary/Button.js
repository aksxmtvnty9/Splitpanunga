import React from "react";

function Button(props){
    return(
    <button className={props.class} onClick={props.method}><img className="icon-size" src={props.url} alt="icon"/>{props.name}</button>
    )
}


export default Button