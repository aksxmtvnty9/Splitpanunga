import React,{useEffect,useState} from 'react';
import AllExpenseDetails from '../AllExpense/AllExpenseDetails'

function Friends(props){
    useEffect(() => {
        document.title = props.name+" · Splitpannunga"
    }, [])
    const expensesOwe = props.expenses.map(item=>{
        var month = item.created_at.substr(4,4);
        var date = item.created_at.substr(7,4);
        if(item.user_name === props.name || item.owe_name === props.name){
            if(props.userData === item.user_name)
                return <AllExpenseDetails key={item.id} description={item.description} lent="you lent " paid="you paid " name={item.owe_name} amount={item.amount} monthOf={month} dateOf={date}/>
            if(props.userData === item.owe_name)
                return <AllExpenseDetails key={item.id} description={item.description} lent="lent you " paid=" paid " name={item.user_name} amount={item.amount} monthOf={month} dateOf={date}/>
        }
    })
    var amoutPaid=0;
    var amoutPaidBy=0;
    var preName = ""
    props.expenses.map(item=>{
        if(item.user_name === props.name || item.owe_name === props.name){
          if(preName !== item.user_name){
            amoutPaid+=parseFloat(item.amountPaid)
            preName = item.user_name
          }
        }
    })
    props.expenses.map(item=>{
        if(item.user_name === props.name || item.owe_name === props.name){
          if(preName !== item.user_name){
            amoutPaidBy+=parseFloat(item.amountPaidBy)
            preName = item.user_name
          }
        }
    })
    return(
        <div>
            <div className="amount-paid">
                <p className="amount-paid-p">Amount Paid by you: <span>${amoutPaid}</span></p>
                <p className="amount-paid-p-1">Amount Paid by {props.name}: <span>${amoutPaidBy}</span></p>
            </div>
            {expensesOwe}
        </div>
    )
}

export default Friends;