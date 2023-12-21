import React from "react";
import '../css/homepage.css'
function Home(){
    const maingbox2={
        display: "flex",
        position: "relative",
        top:"-18px",
        marginBottom:"-10px"
    }
    const maingbox1={
        width:"15cm",
   marginTop:"50px",
   paddingLeft: "30px"
    }
    const heading101={
        fontSize:"80px",
    textDecoration: "underline",
    color: "Red",
    fontFamily:"Arial"
    }
    const heading102={
        fontSize:"30px",
        color:"blue"
    }
    return(
        <>
        <div style={maingbox2} className="homepage">
        <div style={maingbox1}>
        <p style={heading101}>welcome To Froster</p>
        <p style={heading102}>One and Only Deistination for any kind of Text Related Works</p>
        </div>
        </div>
        </>
    )
}
export default Home;