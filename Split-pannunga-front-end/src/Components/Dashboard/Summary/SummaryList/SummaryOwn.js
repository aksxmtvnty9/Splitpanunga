import React from 'react'
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg1 from '../../../../Components/profile1.jpg'
import ProfileImg2 from '../../../../Components/profile3.jpeg'

function SummaryOwn(props){
    
    var arr= [];
    props.userdata.map(item=>{
        if(props.currentUser === item.owe_name && arr.indexOf(item.user_name) === -1){
            arr.push(item.user_name)
        }    
    })
    const summaryYouOwn =[];
    var bool = true;
    for(let i in arr){
        const filter = props.userdata.filter(item=>{
            if(item.user_name === arr[i]){
                return item
            }
        })
        if(filter.length >1){
            var amount=0;
            for(let j in filter){
                amount+=parseFloat(filter[j].amount);
            }
            summaryYouOwn.push(<SummaryOwnContent onclick={()=>{props.method(filter[0].user_name);props.method3(filter[0].user_name);props.method2()}} key={filter[0].user_name} aClass="sumary-own-inside-p" url={bool?ProfileImg1:ProfileImg2} amount={(amount)/2-filter[0].amountPaid} name={filter[0].user_name} context="you owe "/>)
        }
        else{
            if(parseFloat(filter[0].amount)/2-filter[0].amountPaid > 0)
                summaryYouOwn.push(<SummaryOwnContent onclick={()=>{props.method(filter[0].user_name);props.method3(filter[0].user_name);props.method2()}} key={filter[0].user_name} aClass="sumary-own-inside-p" url={bool?ProfileImg1:ProfileImg2} amount={parseFloat(filter[0].amount)/2-filter[0].amountPaid} name={filter[0].user_name} context="you owe "/>)
        }
        bool=!bool;
    }
    return(
        <div className="you-owe">
            {summaryYouOwn.reverse()}
        </div>
    )
}

export default SummaryOwn
