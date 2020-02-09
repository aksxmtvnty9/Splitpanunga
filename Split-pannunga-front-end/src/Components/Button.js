import React from 'react'

function Button(props){
    return (
        <button className={props.class} onClick={props.onclickmeth}>{props.name}</button>
    )
}

export default Button