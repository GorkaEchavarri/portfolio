import React from 'react';
import './Profile.css';
import ProfilePic from '../images/Gorka-profile.jpg';

function Profile() {

  return (
    <div className="Profile-box">

      <div class="wrapper">

        <div class="main">
          <h1>Gorka Echavarri</h1>
          <h2>Web Developer</h2>
          <p>Linkedin</p>
          <p>Github</p>
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
