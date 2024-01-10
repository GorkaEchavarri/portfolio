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

function AllTools() {

  function HoverHandler(index) {
    // console.log(index)
    switch (index) {
      case 0:
        console.log("rails")
      break
      case 1:
        console.log("javascript")
      break
      case 2:
        console.log("react")
      break
      case 3:
        console.log("redux")
      break
      case 4:
        console.log("restapi")
      break
      case 5:
        console.log("postgresql")
      break
      case 6:
        console.log("html")
      break
      case 7:
        console.log("bootstraps")
      break
      case 8:
        console.log("github")
      break
      case 9:
        console.log("figma")
      break
      case 10:
        console.log("trello")
      break
      case 11:
        console.log("salesforce")
      break
      default:
        console.log("Wrong expression")
    }

    // Now instead of console.logging we have to change status and move it to the file "focused"
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
