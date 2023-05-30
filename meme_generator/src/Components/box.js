import React from "react"

export default function BOX(props){

  const styles ={
    backgroundColor :props.on  ? "#222222" : "#cccccc"
  }
  console.log(props)
    return(
        <div   style={styles} 
        key={props.id} 
        onClick = {props.toggle}
        className="box-container">{props.id} {props.on}</div>
    )
   
}
