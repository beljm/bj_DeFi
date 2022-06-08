import React from "react";
import './Footer.css'
import logoURL from '../../images/panLogo.png';

function Footer(){
  return(
    <div className="footerMain">
      <div className="footerAbout">
        ABOUT
        <div className="aboutButton footerBtn">
          <button>Contact</button>
          <button>Brand</button>
          <button>Community</button>
          <button>Litepaper</button>       
        </div>
      </div>
      <div className="footerHelp">
        HELP
        <div className="helpButton footerBtn">
          <button>Customer Support</button>
          <button>Troubleshooting</button>
          <button>Guides</button>  
        </div>
      </div>
      <div className="footerDevelopers">
        DEVELOPERS
        <div className="developersButton footerBtn">
          <button>Github</button>
          <button>Documentation</button>
          <button>Bug Bounty</button>  
          <button>Audits</button>  
          <button>Careers</button>  
        </div>
      </div>
      <div >
        <img className="footerLogo" src={logoURL}></img>
      </div>
    </div>
  )
}

export default Footer;