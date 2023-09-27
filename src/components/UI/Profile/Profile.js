import React from 'react';
import './Profile.css';
import ProfilePic from '../../../images/Gorka-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Profile() {

  return (
    <div className="Profile-box col-5">

      <div className="wrapper">

        <div className="main">
          <h1>Gorka Echavarri</h1>
          <h2>Web Developer</h2>

          <a href="https://www.linkedin.com/in/gorka-echavarri/" target="_blank" rel="noopener noreferrer">
          <button className="btn-custom">
            <span><FontAwesomeIcon icon={faLinkedin} /> Linkedin</span>
          </button>
          </a>
          <br/>
          <a href="https://github.com/GorkaEchavarri" target="_blank" rel="noopener noreferrer">
          <button className="btn-custom">
          <p><FontAwesomeIcon icon={faGithub} /> Github</p>
          </button>
          </a>

        </div>

        <div className="aside aside-1"><img src={ProfilePic} alt="Gorkas profile pic" className="Profile-pic"/></div>

        <div className="footer">
          <p>I am Gorka, a passionate Web Developer expert on user-friendly and innovative web applications that solve real-world problems.
             Love to design, code, and deploy full-stack web projects from scratch.</p>
          <p>I am organised, hard-working, and eager to learn new tools and skills.
            I am looking for a dynamic environment where I can apply my web development and product support expertise, and where I can explore new opportunities and challenges.</p>
        </div>

      </div>


    </div>
  );
}

export default Profile;
