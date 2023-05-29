import React,{useState} from "react"
import MemeData from "../MemeData"

export default function Meme(){
    const [meme, setMeme] = useState(
        {
            topText:"",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg" 
        }
    )
    
    const [allMemeImages,setAllMemeImages] = useState(MemeData)


    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomumber = Math.floor((Math.random() * memesArray.length));
        const url = memesArray[randomumber].url
       setMeme(
        prevMeme=>({
            ...prevMeme,
            randomImage:url
        })
       )

    }
    
    return(
        <main>
            <div className="form">
                <input type = "text"
                
                className="form--input"
                placeholder="Top text"
                />
                <input type = "text"
                className="form--input"
                placeholder="Buttom text"
                />
                <button
                className="form--button"
                onClick={getMemeImage}
                >Get a new meme image 🖼</button>
                
               
            </div>
            <div className="Image-holder"> 
            <img src={meme.randomImage} className="meme--img"></img>
                
            </div>
            
        </main>
    )
}