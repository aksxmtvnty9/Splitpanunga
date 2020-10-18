import React from 'react'
import ManImg from '../../man.png'
import SummaryChartYouOwn from './SummaryChartYouOwn'

function SummaryChart(props){
    var arr= [];
    props.userData.map(item=>{
        if(props.currentUser === item.user_name && arr.indexOf(item.owe_name) === -1){
            arr.push(item.owe_name)
        }    
    })
    const summaryChartYouOwn =[];
    for(let i in arr){
        const filter = []
        props.userData.filter(item=>{
            if(item.owe_name === arr[i]){
                filter.push(item)
            }
        })
        if(filter.length >1){
            var amount=0;
            for(let j in filter){
                amount+=parseFloat(filter[j].amount);
            }
            summaryChartYouOwn.push(<SummaryChartYouOwn onclick={()=>{props.method(filter[0].owe_name);props.method3(filter[0].owe_name);props.method2()}} key={filter[0].owe_name} aClass="chart-you-are-owe-inside"  amount={(amount)/2-filter[0].amountPaidBy} name={filter[0].owe_name}/>)
        }
        else{
            if(parseFloat(filter[0].amount)/2-filter[0].amountPaidBy > 0)
                summaryChartYouOwn.push(<SummaryChartYouOwn onclick={()=>{props.method(filter[0].owe_name);props.method3(filter[0].owe_name);props.method2()}} key={filter[0].owe_name} aClass="chart-you-are-owe-inside"  amount={parseFloat(filter[0].amount)/2-filter[0].amountPaidBy} name={filter[0].owe_name}/>)
        }
    }
    var arr2= [];
    props.userData.map(item=>{
        if(props.currentUser === item.owe_name && arr2.indexOf(item.user_name) === -1){
            arr2.push(item.user_name)
        }    
    })
    const summaryChartOwn =[];
    for(let i in arr2){
        const filter2= props.userData.filter(item=>{
            if(item.user_name === arr2[i]){
                return item
            }
        })
        if(filter2.length >1){
            var amount=0;
            for(let j in filter2){
                amount+=parseFloat(filter2[j].amount);
            }
            summaryChartOwn.push(<SummaryChartYouOwn onclick={()=>{props.method(filter2[0].user_name);props.method3(filter2[0].user_name);props.method2()}} key={filter2[0].user_name} aClass="chart-you-owe-inside"  amount={(amount)/2-filter2[0].amountPaid} name={filter2[0].user_name}/>)
        }
        else{
            if(parseFloat(filter2[0].amount)/2-filter2[0].amountPaid > 0)
                summaryChartOwn.push(<SummaryChartYouOwn onclick={()=>{props.method(filter2[0].user_name);props.method3(filter2[0].user_name);props.method2()}} key={filter2[0].user_name} aClass="chart-you-owe-inside"  amount={parseFloat(filter2[0].amount)/2-filter2[0].amountPaid} name={filter2[0].user_name}/>)
        }
    }
    return(
        <div style={{display:props.show.chart?"flex":"none"}} className="summary-chart">
            <div className="chart-you-owe">
                {summaryChartOwn.reverse()}
            </div>
            <div className="image-wrapper">
                <img className="man-img-charts" src={ManImg} alt="man standing alone"/>
            </div>
            <div className="chart-you-owe">
                {summaryChartYouOwn.reverse()}
            </div>
        </div>
    )
}

export default SummaryChart