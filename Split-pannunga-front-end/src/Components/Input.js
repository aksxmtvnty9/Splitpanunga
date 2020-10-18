import React from 'react'

function Input(props){
    return (
        <input ref={props.inputRef} className={props.class} type="text" placeholder={props.placeHolder} onChange={props.method}/>
    )
}

export default Input