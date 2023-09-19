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

        <p class="footer">Long text describing my path and my interests.</p>

      </div>


    </div>
  );
}

export default Profile;
