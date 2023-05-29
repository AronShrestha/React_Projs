import React from "react";


export default function Star(props){
    let icon = props.isFilled ? "Star.png" : "wstar.png"
    return(
        <img 
        src={`/images/${icon}`} 
        className="card--favorite"
       onClick={props.handleClick}
    />
    )
}