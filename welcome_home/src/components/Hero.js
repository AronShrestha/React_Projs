import React from "react";
import Logo from "../images/horoscopewall.png";


export default function Hero(){
    return(
        <section className="hero-section">
          
            <img src={Logo} className="wal"></img>
            <div className="hero--text">
            <h1 className="hero--header">Online Experiences</h1>
            <p>Join our unique love finding zodic website. Explore your destiny to find the best match for you!!!</p>
            </div>
            
        </section>
    );
}