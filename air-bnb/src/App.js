
import React from "react";
import Navbar from "./component/navbar";
import HeroComp from "./component/hero";
import Card from "./component/card";
import Contact from "./component/contact";
import Jokes from "./component/joke";
import jokesData from "./jokesData";
import data from "./data";

function App() {
  const cards = data.map(item=>{
    return <Card
    key = {item.id}

    item = {item}
    
    />
  })

  return (<> 
  <Navbar/>
    <HeroComp/>
    <section className="cards-list">
    {cards}
    </section>
   
  </>
  );
}

export default App;

// const jokes = jokesData.map(
//   joke=>{
//     return <Jokes
//     setup={joke.setup}
//     punchline={joke.punchline}
//     />

//   }
// )
// console.log(jokes)

// {jokes}
    // {/* <Contact
    // img ="../assets/swimmer.png"
    // name ="Fluffykins"
    // phone = "(212) 555-2345"
    // email = "fluff@me.com"
    // />
    //   <Contact
    // img ="../assets/swimmer.png"
    // name ="Wisker"
    // phone = "(212) 555-2345"
    // email = "ws@me.com"
    // /> */}


    //     {/* <Jokes
    // setup = "How did the hacker escape the police?"
    // punchline  = "He just ransomware!"  
    // ispun = {true}
    // upvote = {100}
    // comment = {
    //   [
    //     {
    //       "Auther":"Ash","Id":1,"Comment":"Funny"
    //     }
    //   ]
    // }
    // /> */}