import React from "react";
import pic from "../images/swim.jpeg"
import star from "../images/star1.png"

export default function Card(){
    return(
        <div className="card-main">
            <img src ={pic} className="review-per"></img>
            <div className="rate">
                <div className="star-wrapper">
                    <img    src={star} className='star'></img>
                </div>
                <div className="para">
                    <p>(6).USA</p>
                </div>
               
            </div>
            <p>I found my a soulmate </p>
            <b>from Dharan</b>
        </div>
    )
}