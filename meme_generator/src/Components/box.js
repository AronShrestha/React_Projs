import React,{useState}  from "react"

export default function BOX(props){
  const [color_flag,setColorFlag] = useState(props.on)

  const styles ={
    backgroundColor :color_flag  ? "#222222" : "#cccccc"
  }
  function change(e){
    console.log(e)
    setColorFlag(color_flag=>!color_flag)
  }
 
    return(
        <div   style={styles} 
        key={props.id} 
        onClick = {()=>{
          return props.toggle(props.id)
        }}
        className="box-container">{props.id} {props.on}</div>
    )
   
}
