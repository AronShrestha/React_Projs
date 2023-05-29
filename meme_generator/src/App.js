import Header from "./Components/Header";
import React,{useState} from "react";
// import Meme from "./Components/Meme";
// import Count from "./Components/count";
import boxes from "./boxes";
import BOX from "./Components/box";




export default function App(){
  // function odd(ob){
  //   if (ob.length %2 ===0)
  //   {
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }
  const [box,setBox] = useState(boxes)
  // console.log(box)
  // const cond = odd(box)
  // const styles ={
  //   backgroundColor : cond  ? "#222222" : "#cccccc"
  // }
  const boxelement =box.map(
    bx=><BOX id={bx.id} on={bx.on} />)
  return(
    <main>
      <h1>Boxes will go here</h1>
    {boxelement}
    </main>
  )
}






// function App() {
//   return (
//     <div>
//     <Header />
//     <Meme />
// </div>
//   );
  
// }


// function App() {
//     /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      */
//     const [thingsArray,setThing] = useState(["Thing 1","Thing 2"])
    
//     function addItem() {
//         // We'll work on this next
//         // const newThingText = `Thing ${thingsArray.length + 1}`
//         // thingsArray.push(newThingText)
//         // document.getElementById()
//         // console.log(thingsArray)
//         setThing(
//             prevThing =>{

           
//             return  [...prevThing,`Thing ${prevThing.length+1}`]
//             }

//         )
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }



// function App() {
//     const[count,setCount] =useState(0)

  //   function add(){
  //     setCount(prevCount=>prevCount+1)
  //   }
  //   function subtract(){
  //     setCount(prevCount=>prevCount-1)
  //   }
  //   console.log("App component Render")
  // return (
  //     <div className="counter">
  //         <button className="counter--minus" onClick={subtract}>–</button>
  //         <Count number={count} />
  //         <button className="counter--plus" onClick={add}>+</button>
  //     </div>
  // )

//   function add(){
//     setCount(prev_count=>prev_count+1)
//   }
//   function subtract(){
//     setCount(prev_count=>prev_count-1)
//   }
//   console.log("App component Render")
//   return(
//     <div className="counter">
      
//     </div>
//   )
// }




// export default App;
// function App() {


// let [num, setCount ]= React.useState(0)
// function incrementHandler(){
//   // if (result==="Hello"){
//   //   setString(result="Yes")
//   // }
//   // else{
//   //   setString(result="Hello")
//   // }
//   setCount(prevCount => prevCount + 1)
// }
// function decrementHandler(){
//   // if (result==="Hello"){
//   //   setString(result="Yes")
//   // }
//   // else{
//   //   setString(result="Hello")
//   // }
//   setCount(num-1)
// }

// return (
//     <div className="state">
//         <h1 className="state--title">Is state important to know?</h1>
//         <div className="state--value">
//             <h1>{num}</h1>
//             <button onClick={incrementHandler}>+</button>
//             <button onClick={decrementHandler}>-</button>
//         </div>
//     </div>)
// // )
// //   return (
// //     // <div className="App">
// //     //     <Header/>
// //     //     {/* <Meme/> */}
// //     // </div>

// //   );

// }


