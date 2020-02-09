import React from 'react'

function CollectionContainer(props){
    
    const description = [];
    if(props.description.length === 0){
        description.push(<li key={1} className="li-collection-desc">You do not have any {props.tag} yet.</li>)
    }
    else{
        var arr= [];
        var arr2 = [];
        props.description.map(item=>{
            if( props.user[1] !== item.owe_name && arr.indexOf(item.owe_name) === -1){
                arr.push(item.owe_name)
                arr2.push({name:item.owe_name,id:item.id})
            }   
            return arr
        }) 
        props.description.map(item=>{
            if( props.user[1] !== item.user_name && arr.indexOf(item.user_name) === -1){
                arr.push(item.user_name)
                arr2.push({name:item.user_name,id:item.id})
            }  
            return arr
        }) 
        arr.map(item=>{
            for(let i in arr2){
                if(item === arr2[i].name){
                    description.push(<li className={props.userName===arr2[i].name?"li-collection-active":"li-collection"} key={arr2[i].name} onClick={()=>{props.method(arr2[i].name);props.method3(arr2[i].name);props.method2()}}><i className="fa fa-user"></i> {item}</li>)
                }
            }
            return arr
        })
    }
    return (
        <div className="collection">
            <div className="collection-top-wrap">
                <p>{props.name}</p>
                <div className="collection-margin"><a className="collection-a" href="">+ add</a></div>
            </div>
            <div className="collection-list">
                <ul className="ul-collection">
                    {description}
                </ul>
            </div>
        </div>
    );
}

export default CollectionContainer