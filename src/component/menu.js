import React from 'react'
 import './menu.css'


function menu(props) {
    return (
        <div className="nav">
            <ul className="nav-menu">
            {
props.Nav.map((el,i)=>el.drop?
    <li   key={i} className="dropdown" ><a href={el.href}>{el.title}</a>
    <ul className="dropdown-content">
     {
         el.drop.map(el=> 
            <li className="dropi">{el}</li>)
     }  
      </ul> 
     </li>: <li key={i} ><a id="a2" href={el.href}>{el.title}</a></li>)
     }



   </ul>
        </div>
    )
}

export default menu
