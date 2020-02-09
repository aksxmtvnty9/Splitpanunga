import React from 'react'

function PromotionButton(props){
    return (
        <div className="promotion-img-wrapper">
            <img className={props.imgClass} src={props.icon} alt={props.topText +" image."}/>
        </div>
    )
}

export default PromotionButton