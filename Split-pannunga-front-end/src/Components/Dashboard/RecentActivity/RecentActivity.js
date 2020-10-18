import React,{useEffect} from 'react'
import RecentActivityDetails from './RecentActivityDetils'

function RecentActivity(props){
    var i=0
    useEffect(() => {
        document.title = "Recent Activity · Splitpannunga"
    }, [])
    const expensesOwe = props.expenses.map(item=>{
        if(props.userData === item.user_name)
            if(item.created_at.length>0)
                return <RecentActivityDetails key={i++} type="added" description={item.description} moneyState="You get back" amount={item.amount} time={item.created_at.substr(3,7)===new Date().toString().substr(3,7)?"Today":item.created_at.substr(3,7)}/>
            // if(item.deleted_at.length>0){
            //     return <RecentActivityDetails description={item.description} moneyState="You get back" amount={item.amount} time={item.deleted_at}/>
            // }
    })
    return(
        <div className="recent-activity-overflow">
            {expensesOwe.length>0?expensesOwe.reverse():<p style={{textAlign:"center",marginTop:"50px"}}>No Recent Activity yet.</p>}
        </div>
    )
}

export default RecentActivity