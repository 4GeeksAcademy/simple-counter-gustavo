//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let unidad = 0
let decimal= 0
let centenos= 0
let thousands = 0
let millions = 0

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
    if(centenos>9 && decimal>9){
        thousands++
        centenos=0
    }
    if(thousands>9 && centenos>9){
        millions++
        thousands=0
    } 

    // si el decimal (if) es mayor a 9 y (&&) la unidad es mayor a 9
    
    ReactDOM.render(<Home unidad={unidad} decimal={decimal} centenos={centenos} thousands={thousands} millions={millions}/>, document.querySelector("#app"));
},1000)
