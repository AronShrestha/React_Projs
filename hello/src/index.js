import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from  "./Header.js"
import App from "./App.js"
import "./index.css"


function Page(){
    return(
   
            <App/>
           
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page/>)

