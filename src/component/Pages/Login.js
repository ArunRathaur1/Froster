import React from "react";
import '../css/login.css';
function Login(){
    return(
        <>
        <div class="image1">
        <div className="Form" style={{position:"relative",top:"1cm",left:"15%",borderRadius:"10px"}}>
        <form action="submit" >
        <div class="container" style={{height:"12cm"}}>
    <h1 style={{textAlign:"center"}}>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required className="box"/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required className="box"/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required className="box"/>

    <div class="clearfix">
    <p><button type="submit" class="signupbtn">Sign Up</button></p>
      <p><button type="button" class="cancelbtn" style={{marginBottom:"80px"}}>Cancel</button></p>
      </div>
  </div>
</form>
</div>
</div>
        </>
    )
}
export default Login;