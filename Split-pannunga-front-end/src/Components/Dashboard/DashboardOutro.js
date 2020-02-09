import React from 'react'
import DashboardPara from './DashboardPara'
import LadyImage from './lady.png'

function DashboardOutro(props){
    return(
        <div className="dashboard-details-empty">
            <img className="dashboard-img" src={LadyImage} alt="women standing image"/>
            <div className="dashboard-content-para">
                <DashboardPara class="dashboard-para-1" text="You’re all settled up. Awesome!"/>
                <DashboardPara class="dashboard-para-2" text="To add a new expense, click the orange “Add an expense” button."/>
            </div>
        </div>
    )
}

export default DashboardOutro