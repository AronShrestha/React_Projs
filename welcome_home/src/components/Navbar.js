import React from "react";
import Logo from "../images/logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={Logo} className="nav--logo"></img>
        </nav>
    )
}