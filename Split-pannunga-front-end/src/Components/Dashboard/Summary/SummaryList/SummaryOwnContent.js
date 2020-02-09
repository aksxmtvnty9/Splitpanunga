import React from 'react'

function SummaryOwnContent(props){
    return(
        <div onClick={props.onclick} className="summary-own">
            <img className="img-size" src={props.url} alt="profile image"/>
            <div className="sumary-own-inside">
                <p>{props.name}</p>
                <p className={props.aClass}>{props.context}<span style={{fontWeight:"800",fontSize:"13px"}}>${props.amount}</span></p>
            </div>
        </div>
    )
}


export default SummaryOwnContent