import React from "react";


export default function Jokes(props){
    console.log(props)
    return (
        <div className="joke-div">
            <h1>Jokes of the day</h1>
            <p>
                {props.setup} hahah cz {props.punchline}
            </p>
        
        </div>

    );
}