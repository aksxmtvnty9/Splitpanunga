import React from 'react'
import MenuIcon from './menu-icon.svg'
import FlagIcon from './flag-icon.svg'
import SplitIcon from './split-wise-left.png'
import MenuNavList from './MenuNavList'
import CollectionContainer from './CollectionContainer'
import InviteFriends from './InviteFriends'
import SocialButton from './SocialButton'
import FbLogo from './fblogo.png'
import TwLogo from './twitter.png'


function MenuNavActivity(props){
    
    return(
        <div className="left-content">
            <ul className="ul-left-content">
                <MenuNavList url={SplitIcon} name="Dashboard" method={props.method} class={props.view[0].visibility?"li-left-content-active":"li-left-content"} imgClass="dash-icon"/>
                <MenuNavList url={FlagIcon} name="Recent Activity" method={props.method2} class={props.view[1].visibility?"li-left-content-active":"li-left-content"} imgClass="flag-icon"/>
                <MenuNavList url={MenuIcon} name="All Expenses" method={props.method3} class={props.view[2].visibility?"li-left-content-active":"li-left-content"} imgClass="menu-icon"/>
            </ul>
            <CollectionContainer name="GROUPS" description={[]} tag="groups"/>
            <CollectionContainer method={props.userMethod} method2={props.method4} method3={props.meth} userName={props.name} name="FRIENDS" description={props.expenses} user={props.userData} tag="friends"/>
            <InviteFriends />
            <div style={{display:"flex",marginTop:"5px",padding:"0 5px"}}>
                <SocialButton name="Share" url={FbLogo} class="social-btn-facebook"/>
                <SocialButton name="Tweet" url={TwLogo} class="social-btn-twitter"/>
            </div>
        </div>
    )
}

export default MenuNavActivity