import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button'
import Input from '../Input'
import ImgIcon from './general.png'
import axios from 'axios'

function ModalExpense(props){
    const history = useHistory();
    const [modalInput,setModalInput] = useState ({
        email:"",
        description:"",
        amount: ""
    })
    function handleModalVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            item.modal = false
            return item
        })
        props.method(currentViewModal)
    }
    const notify = (message) => {
        toast(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className:'theme-background-alert',
            progressClassName: 'theme-progress-bar',
            autoClose: 2000
        });
    }
    function handleEmail(event){
        setModalInput(prevUsers=>{
            prevUsers.email = event.target.value;
            return prevUsers
          })
    }
    function handleDescrption(event){
        setModalInput(prevUsers=>{
            prevUsers.description = event.target.value;
            return prevUsers
          })
    }
    function handleAmount(event){
        setModalInput(prevUsers=>{
            prevUsers.amount = event.target.value;
            return prevUsers
        })
    }
    const [empty,setEmpty] = useState(true)
    function setEmptyInput(){
        if(modalInput.description.length >0 && modalInput.email.length >0 && modalInput.amount.length)
            setEmpty(false)
    }
    function addExpense(){
        // console.log(props.user)
        var arr = []
        if(empty){
            notify("Please fill all inputs.")
        }
        else{
            for(let i in modalInput){
                arr.push(modalInput[i])
            }
            arr.push(props.user[0])
            arr.push(props.user[1])
            // console.log(arr)
            axios.post(`http://localhost:4000/add-expense`,arr)
            .then(res=>{
                notify(res.data)
            })
            .catch(err=>{
                notify(err.message)
            })
            setTimeout(() => {
                history.push("/home/dashboard")
                window.location.reload(true)
            }, 2800);
        }
    }
    useEffect(() => {
        toast.configure({
            autoClose: 100,
            draggable: false,
            //etc you get the idea
          });
          toast.configure()
    }, [])
    return(
        <div style={{display:props.viewModal[3].modal?"block":"none" }} className="modal-overlay">
            <div className="add-expense-modal">
                <div className="add-expense-1">
                    <p>Add an expense</p>
                    <Button class="close-btn" name="x" onclickmeth={handleModalVisibility}/>
                </div>
                <div className="add-expense-2">
                    <div className="add-expense-3">
                        <p className="add-expense-3-p">With you and:</p>
                        <Input class="input-3" placeHolder="Enter names or email addresses" method={handleEmail}/>
                    </div>
                    <div className="add-expense-4">
                        <div style={{display:"flex"}}>
                            <img className="image-icon-exp" src={ImgIcon} />
                            <div className="add-expense-4-inside">
                                <Input class="input-4" placeHolder="Enter a description" method={handleDescrption}/>
                                <input className="input-5" type="number" placeholder="0.00" onChange={handleAmount} onBlur={setEmptyInput}/><span className="dollar-sym">$</span>
                            </div>
                        </div>
                    <p className="exp-info">Paid by <span>you</span> and split <span>equally.<br/></span>($ /person)</p>
                    </div>
                    <div style={{padding:"10px",textAlign:"right"}}>
                        <Button class="exp-btn" name="Cancel" onclickmeth={handleModalVisibility} />
                        <Button class="exp-btn-2" name="Save" onclickmeth={addExpense} />
                    </div>
                </div> 
            </div>
            <ToastContainer />
        </div>
    )
}

export default ModalExpense