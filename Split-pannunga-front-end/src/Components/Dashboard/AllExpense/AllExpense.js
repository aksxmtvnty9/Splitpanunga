import React,{useEffect} from 'react'
import AllExpenseDetails from './AllExpenseDetails'

function AllExpense(props){
    var i=0
    useEffect(() => {
        document.title = "All Expenses · Splitpannunga"
    }, [])
    const expensesOwe = props.expenses.map(item=>{
        var month = item.created_at.substr(4,4);
        var date = item.created_at.substr(7,4);
        if(props.userData === item.user_name)
            return <AllExpenseDetails key={i++} description={item.description} lent="you lent " paid="you paid " name={item.owe_name} amount={item.amount} monthOf={month} dateOf={date}/>
        if(props.userData === item.owe_name)
            return <AllExpenseDetails key={i++} description={item.description} lent="lent you " paid=" paid " name={item.user_name} amount={item.amount} monthOf={month} dateOf={date}/>
    })
    // const expensesYouOwe = props.expensesYouOwe.map(item=>{
    //     var month = item.time.substr(4,4);
    //     var date = item.time.substr(7,4);
    // })
    return(
        <div className="recent-activity-overflow">
            {expensesOwe.length>0?expensesOwe.reverse():<p style={{textAlign:"center",marginTop:"50px"}}>No Expenses yet.</p>}
        </div>
    )
}

export default AllExpense