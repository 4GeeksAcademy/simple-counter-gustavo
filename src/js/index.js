//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let unidad = 0
let decimal= 0
let centenos=0

//render your react application
setInterval(()=>{
    unidad++

    if(unidad>9){
        decimal++
        // decimal es igual a decimal + 1 
        unidad=0
        }
    if(decimal>9 && unidad>9){
        centenos++
        decimal=0
    }
    
    ReactDOM.render(<Home unidad={unidad} decimal={decimal} centenos={centenos}/>, document.querySelector("#app"));
},1000)
