import React from 'react'
import Img from '.././general.png'

function RecentActivityDetails(props){
    return(
        <div>
            <div className="recent-activity">
                <img className="recent-activity-img" src={Img} alt="poster-icon"/>
                <div className="recent-activity-inside">
                    <p className="recent-activity-p-1">You <span>{props.type}</span> "{props.description}".</p>
                    {props.type === "deleted"?<p className={props.moneyState === "You get back"?"recent-activity-p-2-strike":"recent-activity-p-2-active-strike"}>{props.moneyState} ${props.amount/2}</p>:<p className={props.moneyState === "You get back"?"recent-activity-p-2":"recent-activity-p-2-active"}>{props.moneyState} ${props.amount/2}</p>}
                    <p className="recent-activity-p-3">{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default RecentActivityDetails