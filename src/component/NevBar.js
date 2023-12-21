import React from "react";
import img from '../component/images/logo.jpg'
import { Link } from "react-router-dom";
import '../component/css/nevbar.css';
function NevBar(){
    return(
        <>
        <div className="fullbox">
        <nav className="navbar navbar-expand-lg bg-body-tertiary hello">
  <div className="container-fluid" style={{backgroundColor:"#232323"}}>
    <p><img src={img} alt="This is the my cration" className="nevimage"></img></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p className="nav-link active" aria-current="page"><Link to="/" className="nevbutton">Home</Link></p>
        </li>
        <li className="nav-item">
          <p className="nav-link active" ><Link to="/textanalier" className="nevbutton">Text Anyliser</Link></p>
        </li>
        <li className="nav-item">
          <p className="nav-link active"><Link to="/about" className="nevbutton">About</Link></p>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <Link to="/signin"><button className="nev1button" type="submit">SigIn</button></Link>
        <Link to="/login"><button className="nev1button " type="submit">Login</button></Link>
      </form>
    </div>
  </div>
</nav>
</div>
        </>
    )
}
export default NevBar;