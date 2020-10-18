import React from "react";
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg1 from '../../../profile1.jpg'
import ProfileImg2 from '../../../profile2.jpeg'

function SummaryYouOwn(props){
    var arr= [];
    props.userdata.map(item=>{
        if(props.currentUser === item.user_name && arr.indexOf(item.owe_name) === -1){
            arr.push(item.owe_name)
        }    
    })
    const summaryYouOwn =[];
    var bool = true;
    for(let i in arr){
        const filter = []
        props.userdata.filter(item=>{
            if(item.owe_name === arr[i]){
                filter.push(item)
            }
        })
        if(filter.length >1){
            var amount=0;
            for(let j in filter){
                amount+=parseFloat(filter[j].amount);
            }
            summaryYouOwn.push(<SummaryOwnContent onclick={()=>{props.method(filter[0].owe_name);props.method3(filter[0].owe_name);props.method2()}} key={filter[0].owe_name} aClass="sumary-you-own-inside-p" url={bool?ProfileImg1:ProfileImg2} amount={(amount)/2-filter[0].amountPaidBy} name={filter[0].owe_name} context="owes you "/>)
        }
        else{
            if(parseFloat(filter[0].amount)/2-filter[0].amountPaidBy > 0)
                summaryYouOwn.push(<SummaryOwnContent onclick={()=>{props.method(filter[0].owe_name);props.method3(filter[0].owe_name);props.method2()}} key={filter[0].owe_name} aClass="sumary-you-own-inside-p" url={bool?ProfileImg1:ProfileImg2} amount={parseFloat(filter[0].amount)/2-filter[0].amountPaidBy} name={filter[0].owe_name} context="owes you "/>)
        }
        bool=!bool;
    }
    return (
        <div className="you-are-owe">
            {summaryYouOwn.reverse()}
        </div>
    )
}

export default SummaryYouOwn