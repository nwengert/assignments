import React from 'react';
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import email from "./images/email.png";
import github from "./images/github.png";



function SocialLinks() {
    return (
        <div id="socialLinksDiv">
            <a href="https://www.linkedin.com/in/nathan-wengert/" alt="Linked in" 
                    target="_blank" rel="noopener noreferrer" className="socialA">
                <img src={linkedin} alt="linked in" className="socialImg"/></a>

            <a href="https://github.com/nwengert" alt="git hub link" 
                    target="_blank" rel="noopener noreferrer" className="socialA">
                <img src={github}  alt="github" className="socialImg"/></a>

            <a href="https://www.instagram.com/nate.weng/" alt="instagram link" 
                    target="_blank" rel="noopener noreferrer" className="socialA">
                <img src={instagram} alt="instagram" className="socialImg"/></a>

            <a href="https://www.facebook.com/nate.wengert.1" alt="facebook link" 
                    target="_blank" rel="noopener noreferrer" className="socialA">
                <img src={facebook} alt="facebook" className="socialImg"/></a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nate.weng@gmail.com,me@nathanwengert.com" alt="podcast link" 
                    target="_blank" rel="noopener noreferrer" className="socialA">
                <img src={email} alt="email" className="socialImg"/></a>
        </div>
    )
}

export default SocialLinks
