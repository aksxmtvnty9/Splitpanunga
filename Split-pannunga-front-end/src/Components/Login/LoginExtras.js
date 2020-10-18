import React from 'react'
import Button from '../Button'

function LoginExtras(props){
    return(
        <p className={props.class}>{props.text}<Button class={props.btnClass} name={props.btnName}/></p>
    )
}

export default LoginExtras