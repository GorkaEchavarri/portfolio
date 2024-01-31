import React, { useState, useEffect } from 'react';
import './All_tools.css';
import rails from '../../../images/Icons/rails.png';
import javascript from '../../../images/Icons/JavaScript.png';
import react from '../../../images/Icons/React.png';
import redux from '../../../images/Icons/Redux.png';
import restapi from '../../../images/Icons/RESTAPI.jpeg';
import postgresql from '../../../images/Icons/Postgresql.png';
import html from '../../../images/Icons/HTML.png';
import bootstraps from '../../../images/Icons/Bootstrap.png';
import github from '../../../images/Icons/GitHub.png';
import figma from '../../../images/Icons/Figma.png';
import trello from '../../../images/Icons/Trello.png';
import salesforce from '../../../images/Icons/Salesforce.jpeg';

const icons = [
  rails,
  javascript,
  react,
  redux,
  restapi,
  postgresql,
  html,
  bootstraps,
  github,
  figma,
  trello,
  salesforce,
];

function AllTools({setFocusedApp}) {

  const [focused, setFocused] = useState(0)

  function HoverHandler(index) {
      setFocused(index)
    }

    useEffect(() => {
      setFocusedApp(focused);
    }, [focused, setFocusedApp]);

  return (
    <div className="icons_container">
      <h2>My Tools</h2>
      {icons.map((icon, index) => (
        <img
          key={index}
          className="icon"
          onMouseOver={() => HoverHandler(index)}
          src={icon}
          alt={`${icon} icon`}
        />
      ))}
    </div>
  );
}

export default AllTools;
