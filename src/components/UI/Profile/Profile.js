import React from 'react';
import './Profile.css';
import ProfilePic from '../../../images/Gorka-profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Profile() {

  return (
    <div className="Profile-box col-5">

      <div class="wrapper">

        <div class="main">
          <h1>Gorka Echavarri</h1>
          <h2>Web Developer</h2>

          <a href="https://www.linkedin.com/in/gorka-echavarri/" target="_blank" rel="noopener noreferrer">
          <button className="btn-custom">
            <span><FontAwesomeIcon icon={faLinkedin} /> Linkedin</span>
          </button>
          </a>
          <br/>
          <a href="https://github.com/GorkaEchavarri" target="_blank" rel="noopener noreferrer">
          <button class="btn-custom">
          <p><FontAwesomeIcon icon={faGithub} /> Github</p>
          </button>
          </a>

        </div>

        <div class="aside aside-1"><img src={ProfilePic} alt="Gorkas profile pic" className="Profile-pic"/></div>

        <div class="footer">
          <p>As a Full Stack Web Developer and a Le Wagon graduate, I am passionate about creating user-friendly and innovative web applications that solve real-world problems. I have acquired skills in React.js, JavaScript, Ruby on Rails, and other web development technologies through an intensive and hands-on course that taught me how to design, code, and deploy full-stack web projects from scratch.</p>
          <p>I am organised, hard-working, and eager to learn new tools and skills. I am looking for a dynamic environment where I can apply my web development and product support expertise, and where I can explore new opportunities and challenges. I am from Spain and eligible to work in the UK, with no need of visa or work permit.</p>
        </div>

      </div>


    </div>
  );
}

export default Profile;
