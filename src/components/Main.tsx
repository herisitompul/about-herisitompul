import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import bgDark from "../assets/images/PP CIS.png";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={bgDark} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/herisitompul" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mickael Sitompul</h1>
          <p>Explorating Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/herisitompul" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;