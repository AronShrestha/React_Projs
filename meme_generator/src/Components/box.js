import React,{useState}  from "react"

export default function BOX(props){


  const styles ={
    backgroundColor :props.on ? "#222222" : "#cccccc"
  }

 
    return(
        <div   style={styles} 
      
        onClick = {()=>props.toggle(props.id)}
        className="box-container">{props.id} {props.on}
        </div>
    )
   
}
