import React from 'react'

function InputWarp(props){
    return(
        <div>
            <p>{props.name}</p>
            <input ref={props.inputRef} className={props.class} type={props.type} onChange={props.method}/>
        </div>
    )
}

export default InputWarp