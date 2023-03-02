import React from "react";
import Main from "./components/Main"
import Navbar  from "./components/Navbar";
import Header from "./Header"


function App(){
    return(
        <div className="container">
            
            <Navbar/>
            <br></br>
        
            <Main/>
        </div>
    )
}

export default App