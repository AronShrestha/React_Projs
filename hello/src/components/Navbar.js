import React from "react";
import imge from "../images/logo192.png"

function Navbar(){
    return(
        <nav>
            <img src={imge} className="react-img" />
            <h2 className="Left">ReactFacts</h2>
            <h4 className="Right">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar