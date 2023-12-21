import React from "react";
import '../css/TextfAnyliser.css';
import { useState } from "react";
function TextAnylise(){
    const[value,valuechange]=useState("");
    const[value2,valuechange2]=useState("");
    const[value3,valuechange3]=useState("0");
    function changingvalue(state){
        valuechange(state.target.value);
        valuechange2(state.target.value);
        if(value.length*60/200<1){
                valuechange3("0");
        }
        else
        {
            valuechange3(value.length*60/500);
        }
        
       }
    function uppercase(){
        valuechange2(value2.toUpperCase());
    }
    function lowercase(){
        valuechange2(value2.toLowerCase());
    }
    function removespaces(){
        const str = value.split(" ");
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '') {
            continue; // Skip empty spaces
        } else {
            str2 = str2 + str[i] + " ";
        }
    }
    valuechange2(str2);
    }
    function Captilize(){
        const str=value.split(" ");
        let str2="";
        for(let i=0;i<str.length;i++){
            str2=str2+str[i].charAt(0).toUpperCase()+str[i].slice(1)+" ";
        }
        valuechange2(str2);
    }
    return(
        <>
        <div className="form-floating">
        <p className="TopHeading">Write Your Text Below</p>
        <textarea className="Textinput" onChange={changingvalue} value={value}></textarea>
        </div>
        <button type="button" className="btn btn-primary hello" onClick={uppercase}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary hello" onClick={lowercase}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary hello" onClick={removespaces}>Remove spaces</button>
        <button type="button" className="btn btn-primary hello" onClick={Captilize}>Captilize</button>
        <p style={{marginLeft:"30px"}}>Total Time to Read the Text={value3} s</p>
        <p className="TopHeading">Output</p>
        <textarea className="Textinput1" value={value2}></textarea>
        </>
    )
}
export default TextAnylise;