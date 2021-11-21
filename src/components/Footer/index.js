import React from "react";
import "../../../src/stylesheet.css";

function Footer() {
    return (
    <div className="footerParent" >
        <ul className="Footer" >
            <li>
                <a href="mailto:spologas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">E-Mail</a> 
            </li> 
            <li>
                <a href="https://github.com/Erik-jpg/"
                            target="_blank"
                            rel="noopener noreferrer">Github</a> 
            </li> 
            <li>
                <a href="www.linkedin.com/in/erik-stone-33b2a661"
                                    target="_blank"
                                    rel="noopener noreferrer">LinkedIn</a> 
            </li> 
        </ul> 
    </div>
);
}
export default Footer;