import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Projects.css';

const dataCodeClicker = [
  {image:require('../../../images/Carousel/CodeClicker/image1.png')},
  {image:require('../../../images/Carousel/CodeClicker/image2.png')},
  {image:require('../../../images/Carousel/CodeClicker/image3.png')},
  {image:require('../../../images/Carousel/CodeClicker/image4.png')}
]

const dataTheLoop = [
  {image:require('../../../images/Carousel/TheLoop/image1.png')},
  {image:require('../../../images/Carousel/TheLoop/image2.png')},
  {image:require('../../../images/Carousel/TheLoop/image3.png')},
  {image:require('../../../images/Carousel/TheLoop/image4.png')},
  {image:require('../../../images/Carousel/TheLoop/image5.png')}
]

const dataDevify = [
  {image:require('../../../images/Carousel/Devify/image1.png')},
  {image:require('../../../images/Carousel/Devify/image2.png')},
  {image:require('../../../images/Carousel/Devify/image3.png')},
  {image:require('../../../images/Carousel/Devify/image4.png')},
  {image:require('../../../images/Carousel/Devify/image5.png')}
]

function Projects(props) {


  function CodeClickerHandler() {
    props.onSaveContainer('Container1')
    // applies Container1 to the Profile in the App.js
  }
  function TheLoopHandler() {
    props.onSaveContainer('Container2')
  }
  function DevifyHandler() {
    props.onSaveContainer('Container3')
  }

  // onClick={CodeClickerHandler}
  // onClick={TheLoopHandler}
  // onClick={DevifyHandler}

  return (
    <div className="Projects-box col-7">

    <h2>Projects</h2>
    <p>All projects will be shown in cards with images and description, later on
      I will also add bubble tags of tools I have used. (For when I do Phyton and more diverse stuff)
    </p>

    </div>
  );
}

export default Projects;
