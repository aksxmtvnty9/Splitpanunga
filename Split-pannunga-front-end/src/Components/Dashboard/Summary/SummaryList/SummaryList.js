import React from 'react'
import SummaryOwn from './SummaryOwn'
import SummaryYouOwn from './SummaryYouOwn'

function SummaryList(props){
    return(
        <div style={{display:props.show.list?"flex":"none"}} className="summary-details">
            <SummaryOwn userdata={props.userData} currentUser={props.currentUser} method3={props.method4} method={props.userMethod} method2={props.meth}/>
            <div className="border"></div>
            <SummaryYouOwn userdata={props.userData} currentUser={props.currentUser} method3={props.method4} method={props.userMethod} method2={props.meth}/>
        </div>
    )
}


export default SummaryList