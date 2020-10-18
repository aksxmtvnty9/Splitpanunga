import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Button from '../Button'
import ProfileImg1 from '../profile1.jpg'
import Arrow from './settle-up-arrow.png'
import ProfileImg2 from '../profile2.jpeg'

function SettleExpense(props){
    const [settle,setSettle] = useState({
        user_name:"",
        owe_name:"",
        amount:""
    })
    
    function setNames(){
        setSettle(preSettle=>{
            preSettle.user_name = props.name
            preSettle.owe_name = props.user
            return preSettle
        })
    }
    function handleSettleVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            item.settle = false
            return item
        })
        props.method(currentViewModal)
    }
    function handleSettleDashVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            if(item.visibility === true){
                item.visibility = !item.visibility
            }
            if(item.dash === "dash-outro"){
                item.visibility = !item.visibility
            }
            item.settle = false
            return item
        })
        props.method(currentViewModal)
    }
    function resizeInput(event) {
        event.target.style.width =  event.target.value.length + "ch";
        setSettle(preSettle=>{
            preSettle.amount = event.target.value
            return preSettle
        })
    }
    function sendPayment(){
        axios.post(`http://localhost:4000/get-payment`,settle)
        .then(res=>{
            notify(res.data)
        })
        .catch(err=>{
            notify(err.message)
        })
        setTimeout(() => {
            window.location.reload(true)
        }, 2800);
    }
    useEffect(() => {
        toast.configure({
            autoClose: 100,
            draggable: false,
          });
          toast.configure()
    }, [])
    const notify = (message) => {
        toast(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className:'theme-background',
            progressClassName: 'theme-progress-bar',
            autoClose: 2000
        });
    }
    return(
        <div style={{display:props.viewModal[4].settle?"block":"none"}} className="modal-overlay">
            <div className="add-expense-modal">
                <div className="add-expense-1">
                    <p>Settle up</p>
                    <Button class="close-btn" name="x" onclickmeth={handleSettleVisibility}/>
                </div>
                <div className="add-expense-2">
                    <div className="add-expense-5">
                        <div style={{display:"flex",marginLeft:"55px"}}>
                            <img className="settle-img" src={ProfileImg1} />
                            <img className="settle-img-arrow" src={Arrow} />
                            <img className="settle-img" src={ProfileImg2} />
                        </div>
                        <br/>
                        <div className="user-names">
                            <p className="option-list-settle">You</p>
                            <p style={{marginRight:"5px",marginLeft:"5px",marginTop:"3px"}}>paid</p>
                            <p className="option-list-settle">{props.name}</p>
                        </div>
                        <br/>
                        <div className="add-expense-5-inside">
                            <input className="input-6" type="number" placeholder="0.00" onChange={resizeInput} onFocus={setNames}/><span className="dollar-sym-2">$</span>
                        </div>
                    </div>
                    <div style={{padding:"10px",textAlign:"right"}}>
                        <Button class="exp-btn" name="Cancel" onclickmeth={handleSettleVisibility}/>
                        <Button class="exp-btn-2" name="Save" onclickmeth={sendPayment}/>
                    </div>
                </div> 
            </div>
            <ToastContainer />
        </div>
    )
}

export default SettleExpense