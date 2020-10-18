import React from 'react'

function ExpTrackerBlock(props){
    return (
        <div className={props.class}>
            <p>{props.expType}</p>
            <p className={props.pClass}>${props.amount}</p>
        </div>
    )
}

export default ExpTrackerBlock