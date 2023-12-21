import React from "react";
import '../css/signin.css';
function Sigin(){
    return(
        <>
        <div className="FullContainer">
        <div className="Container">
        <label for="exampleFormControlInput1" className=" hello form-label">Sign In</label>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className=" hello1 form-label">Email address</label>
        <input type="email" className="hello1 form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label className="hello1 form-label">Password</label>
        <input type="password" className="hello1 form-control" id="exampleFormControlInput1"/>
        <button type="button" className="hello1 btn btn-primary button" style={{marginTop:"30px"}}>Sign In</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Sigin;