import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="content">
          <h1>ABOUT ME</h1>
          <h2>
            A passionate MERN Stack Developer and Cybersecurity Analyst from ICT
            Academy Kerala. Currently interning at Limenzy Technologies,
            focusing on full-stack web development and red team security
            analysis.
          </h2>
          <hr />
        </div>
        <div className="contact"><a href="https://www.instagram.com/_ansif_mp_?igsh=NDR5aDdjd2t2ZDgx&utm_source=qr" target="_blank">
          <button>
          <InstagramIcon/>
          </button></a>
          <a href="https://github.com/kichu70" target="_blank">
          <button>
          <GitHubIcon/>
          </button>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ansif-627b85375/" target="_blank">
          <button>
          <LinkedInIcon/>
          </button>
          </a>
        </div>
        <p>&copy; 2025 Muhammed Ansif. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
