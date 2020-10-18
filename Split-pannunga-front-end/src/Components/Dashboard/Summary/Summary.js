import React,{useState} from 'react'
import SummaryHeader from './SummaryHeader'
import SummaryList from './SummaryList/SummaryList'
import SummaryChart from './SummaryChart/SummaryChart'


function Summary(props){
    const [toggle,setToggle] = useState([{
        list:true,
        chart:false
    }])

    function handeToggle(newToggle){
        setToggle(newToggle)
    }
    return(
        <div className="summary">
            <SummaryHeader viewToggle={toggle} handTog={handeToggle} userData={props.userExpenses} />
            <SummaryList show={toggle[0]} userData={props.userExpenses} currentUser={props.users[1]} method4={props.method4} userMethod={props.userMethod} meth={props.meth} />
            <SummaryChart show={toggle[0]} userData={props.userExpenses} currentUser={props.users[1]} method3={props.method4} method={props.userMethod} method2={props.meth}/>
        </div>
    )
}

export default Summary