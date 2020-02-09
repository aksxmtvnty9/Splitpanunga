import React,{useState} from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import Menu from './Menu'

function Header(props){
    const[menu,setMenu] = useState(false)

    function handleMenuDisplayToggle(){
        setMenu(prevState=>{
            prevState = !prevState
            return prevState
        })
    }
    return(
        <div className="top-nav">
            <div className="margin-top-nav">
                <HeaderLeft />
                <HeaderRight method={handleMenuDisplayToggle} user={props.user}/>
                <Menu menuState={menu}/>
            </div>
        </div>
    )
}

export default Header