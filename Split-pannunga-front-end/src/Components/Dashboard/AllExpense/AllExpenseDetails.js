import React from 'react'
import Img from '.././general.png'

function AllExpenseDetails(props){
    function RenderMoney(){
        if(props.paid === "you paid "){
            return (
                <div className="all-expense-right">
                    <p className="all-expense-p-left">{props.paid}<br/><span>${props.amount}</span></p>
                    <p className="all-expense-p-right"> {props.lent}{props.name}<br/><span>${props.amount/2}</span></p>
                </div>
            )
        }
        else{
            return (
                <div className="all-expense-right">
                    <p className="all-expense-p-left">{props.name}{props.paid}<br/><span> ${props.amount}</span></p>
                    <p className="all-expense-p-right-active">{props.name} {props.lent}<br/><span>  ${props.amount/2}</span></p>
                </div>
            )
        }
    }
    return(
        <div>
            <div className="all-expense">
                <div className="all-expense-left">
                    <p className="all-expense-p">{props.monthOf}<br/><span>{props.dateOf}</span></p>
                    <img className="all-expense-img" src={Img} alt="poster-icon"/>
                    <p className="all-expense-desc">{props.description}</p>
                </div>
                <RenderMoney/>
            </div>
        </div>
    )
}

export default AllExpenseDetails