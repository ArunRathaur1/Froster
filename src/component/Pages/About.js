import React from "react";
import img1 from '../images/aboutpage1.jpeg';
import img2 from '../images/secondimge.jpg';
import '../css/about.css'
function About() {
    const mainheading = {
        marginTop: "1cm",
        textAlign: "center",
        fontSize: "30px",
    };

    const mainheading2 = {
        fontSize: "20px",
        fontFamily: "Arial",
         fontWeight: "bold" 
    };

    const aboutimage = {
        width: "6cm",
        height: "6cm",
    };


    const content = {
        fontSize: "18px",
    };

    return (
        <>
             <p style={mainheading}>About Us</p>
            <p style={mainheading2} className="Box11">A personal mission statement and personal vision statement can be used to guide our decision-making and help us stay focused to meet our long-term goals. Company statements are no different. A company vision statement is one of your most important business documents, along with your mission statement and core values. Although it's easy to confuse the three, each one is unique and serves its own purpose. </p>
            <p style={{fontSize:"30px",fontWeight:"bold"}}>Our Vision</p>
            <div classname="boxing" >
            <img src={img1} style={aboutimage} alt="I'm creator of the website" />
            <p style={content}>Core values are the organization's long-term beliefs and principles that guide employee behavior. A mission statement deals with “why” an organization exists, while a vision statement outlines “what” that existence will eventually look like. A mission statement has to do with what the organization is doing in the present, while a vision statement focuses on the future. Mission statement examples include L’Oreal’s “Offering all women and men worldwide the best of cosmetics innovation in terms of quality, efficacy, and safety.” Conversely, Disney’s vision for itself is “to be one of the world’s leading producers and providers of entertainment and information.”</p>
                
        </div>
            <div classname="boxing">
            <img src={img2} style={aboutimage} alt="I'm creator of the website" />
                <p style={content}>Core values are the organization's long-term beliefs and principles that guide employee behavior. A mission statement deals with “why” an organization exists, while a vision statement outlines “what” that existence will eventually look like. A mission statement has to do with what the organization is doing in the present, while a vision statement focuses on the future. Mission statement examples include L’Oreal’s “Offering all women and men worldwide the best of cosmetics innovation in terms of quality, efficacy, and safety.” Conversely, Disney’s vision for itself is “to be one of the world’s leading producers and providers of entertainment and information.”</p>
                
        </div>
        </>
    );
}

export default About;
