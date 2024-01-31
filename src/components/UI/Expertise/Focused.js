import './Focused.css';
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

function Focused(ToZoomHandler) {

  let title = "Ruby on Rails"
  let image = rails
  let text = "Small text explaining where Ruby on Rails and how I used the tool."

  // console.log()

  if (ToZoomHandler.ToZoomHandler === 0) {
    title = "Ruby on Rails"
    image = rails
    text = "Small text explaining where Ruby on Rails and how I used the tool."
  } else if (ToZoomHandler.ToZoomHandler === 1) {
    title = "JavaScript"
    image = javascript

  } else if (ToZoomHandler.ToZoomHandler === 2) {
    title = "React"
    image = react

  } else if (ToZoomHandler.ToZoomHandler === 3) {
    title = "Redux"
    image = redux

  } else if (ToZoomHandler.ToZoomHandler === 4) {
    title = "Rest API"
    image = restapi

  } else if (ToZoomHandler.ToZoomHandler === 5) {
    title = "Postgresql"
    image = postgresql

  } else if (ToZoomHandler.ToZoomHandler === 6) {
    title = "HTML"
    image = html

  } else if (ToZoomHandler.ToZoomHandler === 7) {
    title = "Bootstraps"
    image = bootstraps

  } else if (ToZoomHandler.ToZoomHandler === 8) {
    title = "Github"
    image = github
  } else if (ToZoomHandler.ToZoomHandler === 9) {
    title = "Figma"
    image = figma
  } else if (ToZoomHandler.ToZoomHandler === 10) {
    title = "Trello"
    image = trello
  } else if (ToZoomHandler.ToZoomHandler === 11) {
    title = "Salesforce"
    image = salesforce
  }

  return (
    <div>
    <h2>{title}</h2>
    <img className="image" src={image} alt="Rails icon" />
    <p>{text}</p>
    </div>
  )
}

export default Focused;
