import React from 'react';
import './Profile.css';
import ProfilePic from '../../../images/Gorka-profile-sized.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Profile() {

  return (
    <div className="Profile-box">

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
          <p>I am currently volunteeing for a non profit organisation as Front End React Developer while I continue my journey of constant learning. I love new challenges!</p>
        </div>

      </div>

    </div>
  );
}

export default Profile;
