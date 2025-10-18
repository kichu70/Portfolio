import React from "react";
import "./Contents.css";
import "./Responsive.css";
import headerImg from "../images/ansifHeader.png";
import cnt3img from "../images/contet3Img.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import ict from "../images/ict.jpeg";
const Contents = () => {
  return (
    <div className="main">
      <div className="header" id="home">
        <div className="section1">
          <h1>
            I am Muhammed<span> Ansif</span> ,
          </h1>
          <p>
            a BCA graduate from Calicut University with a strong passion for web
            development, specializing in the MERN stack. Proficient in React,
            Node.js, JavaScript, Express, MongoDB, SQL, HTML, CSS, Bootstrap,
            Tailwind, and MUI. Certified in Cybersecurity Analysis (Red Team),
            MERN Fullstack Development (ICT), and Django Fullstack Development
            (Regional Technology). Currently gaining practical experience
            through an internship at Limenzy. Highly motivated to apply skills
            in building scalable and user-friendly web applications
          </p>
        </div>
        <div className="section2">
          <img src={headerImg} alt="" />
        </div>
      </div>
      <div className="content1" id="education">
        <h1>Education</h1>
        <ul>
          <li>KMO Arts and Science College — BCA Student (2022-2025)</li>
          <li>
            REC GVHSS Chathamangalam — Junior Software Developer Course (High
            School)
          </li>
        </ul>
      </div>
      <div className="content2" id="crt">
        <h1>Internship & Certifications</h1>
        <ul id="internsips">
          <li>
            <h2>Current Internship: MERN Stack Developer at Limenzy</h2>
          </li>
          <li>
            <h2>Certifications:</h2>
            <ul id="certificate">
              <li>
                <h3>MERN Full Stack Development – ICT</h3>
              </li>
              <li>
                <h3>Django Full Stack Development – Regional Technology</h3>
              </li>
              <li>
                <h3>Cybersecurity Analyst (Red Team)</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="content3">
        <div className="cnt3">
          <div className="cntimg">
            <img src={cnt3img} alt="" />
            <div className="cntInImg">
              <h1>
                A passionate BCA graduate and MERN stack developer dedicated to
                building dynamic, user-focused web applications.” “Driven by
                creativity and technology — turning ideas into interactive
                digital experiences.
              </h1>
            </div>
          </div>
          <div className="cnt3Pera" id="experiance">
            <h1>Experience / Freelance Work</h1>
            <ul>
              <li>
                Freelance web development for small businesses & local clients
              </li>
              <li>
                Created responsive landing pages, dashboards, and fixed website
                bugs
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cnt4">
        <h1> Achievements / Additional Info</h1>
        <ul>
          <li>Completed multiple web development projects</li>
          <li>Built responsive UI/UX components and interactive dashboards</li>
          <li>
            Comfortable with both <span>frontend and backend development</span>
          </li>
          <li>
            Researched and documented CyberDefense, Ground Up Psychedelic
            Institute, Sending Happy projects
          </li>
          <li>Certified in Cyber Security Analysis (Red Team) </li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
