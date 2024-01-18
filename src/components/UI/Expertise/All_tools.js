import React, { useState } from 'react';
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

    switch (index) {
      case 0:
        // console.log("rails")
        setFocused(0)
      break
      case 1:
        // console.log("javascript")
        setFocused(1)
      break
      case 2:
        // console.log("react")
        setFocused(2)
      break
      case 3:
        // console.log("redux")
        setFocused(3)
      break
      case 4:
        // console.log("restapi")
        setFocused(4)
      break
      case 5:
        // console.log("postgresql")
        setFocused(5)
      break
      case 6:
        // console.log("html")
        setFocused(6)
      break
      case 7:
        // console.log("bootstraps")
        setFocused(7)
      break
      case 8:
        // console.log("github")
        setFocused(8)
      break
      case 9:
        // console.log("figma")
        setFocused(9)
      break
      case 10:
        // console.log("trello")
        setFocused(10)
      break
      case 11:
        // console.log("salesforce")
        setFocused(11)
      break
      default:
        console.log("Wrong expression")
    }
    setFocusedApp(focused)
  }

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
