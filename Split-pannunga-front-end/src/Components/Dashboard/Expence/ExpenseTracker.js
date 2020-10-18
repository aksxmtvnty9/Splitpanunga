import React, {useEffect}from 'react'
import { useHistory } from "react-router-dom";
import ExpTrackerBlock from './ExpTrackerBlock';
import Summary from "../Summary/Summary";


function DashboardExpenseTracker(props){
    const history = useHistory()
    var diffAmount;
    if(props.method()>props.method2()){
        diffAmount = props.method()-props.method2();
    }
    else{
        diffAmount = props.method2()-props.method();
    }
    useEffect(() => {
        if(props.expenses.length<0){
            history.push("/home/")
        }
    }, [])
    return(
        <div>
            <div className="dashboard-exp-track-header">
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass={diffAmount>=0?"exp-track-p":"exp-track-p-2"} expType="total balance" amount={diffAmount} />
                <ExpTrackerBlock class="dashboard-exp-track-content-center" pClass="exp-track-p-2" expType="you owe" amount={props.method2()} />
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass="exp-track-p" expType="you are owed" amount={props.method()} />
            </div>
            <Summary users={props.userData} userExpenses={props.expenses} method4={props.method4} userMethod={props.userMethod} meth={props.meth}/>
        </div>
    )
}

export default DashboardExpenseTracker