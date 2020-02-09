import React from 'react'
import UserImg from './user.jpeg'


function HeaderRight({method,user=[0,"loading.."]}){
    return(
        <div className="Header-right" onClick={method}>
            <ul className="ul-user-info">
                <li><img className="user-img" src={UserImg} alt="User Image" /></li>
                <li>{user[1]}</li>
                <li><svg viewBox="0 0 32 32" className="icon icon-caret-bottom" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 11.305l-7.997 11.39L8 11.305z"/></svg></li>
            </ul>
        </div>
    )
}

export default HeaderRight