import React from 'react'


function MenuNavList(props){
    return(
        <li className={props.class} onClick={props.method}><img className={props.imgClass} src={props.url} /><a className="text-left-nav">{props.name}</a></li>
    )
}

export default MenuNavList