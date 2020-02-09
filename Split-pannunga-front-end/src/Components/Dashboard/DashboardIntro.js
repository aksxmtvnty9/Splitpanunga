import React from 'react'
import ManImage from './man.png'
import DashboardPara from './DashboardPara'

function DashboardIntro(props){
    return(
        <div className="dashboard-details-empty">
            <img className="dashboard-img" src={ManImage} alt="man standing image"/>
            <div className="dashboard-content-para">
                <DashboardPara class="dashboard-para-1" text="Welcome to Splitpannunga!"/>
                <DashboardPara class="dashboard-para-2" text="Splitkaro helps you split bills with friends."/>
                <DashboardPara class="dashboard-para-2" text="Click “Add an expense” above to get started, or invite some friends first!"/>
            </div>
        </div>
    )
}

export default DashboardIntro