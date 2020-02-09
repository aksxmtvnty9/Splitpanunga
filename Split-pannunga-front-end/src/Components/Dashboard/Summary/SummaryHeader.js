import React from 'react'
import Button from './Button'
import MenuIcon from './menu.png'
import ChartIcon from './stats.png'

function SummaryHeader(props){
    function handleToggleList(){
        const updatedTogglelist = props.viewToggle.map(item => {
            if(item.list === false){
                item.list = !item.list
                item.chart = false
            }
            return item
        })
        props.handTog(updatedTogglelist)
    }
    function handleToggleChart(){
        const updatedTogglechart = props.viewToggle.map(item => {
            if(item.chart === false){
                item.chart = !item.chart
                item.list = false
            }
            return item
        })
        props.handTog(updatedTogglechart)
    }
    return(
        <div className="summary-header">
            <h2 className="summary-header-h2">you owe<span className="summary-header-span">you are owe</span></h2>
            <div className="toggle-btns-area">
                <Button class={props.viewToggle[0].list?"toggle-btns-left":"toggle-btns-2-left"} name="view as list" url={MenuIcon} method={handleToggleList}/>  
                <Button class={props.viewToggle[0].list?"toggle-btns-2-right":"toggle-btns-right"} name="view chart" url={ChartIcon} method={handleToggleChart}/>  
            </div>
        </div>
    )
}

export default SummaryHeader