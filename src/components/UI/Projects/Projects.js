import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Projects.css';
import HomeCarousel from "./HomeCarousel";

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

function Projects() {

  function displayFirstTab() {
    console.log('First Tab clicked!');
  }
  function displaySecondTab() {
    console.log('Second tab clicked');
  }
  function displayThirdTab() {
    console.log('Third tab clicked');
  }

  return (
    <div className="Projects-box col-7">

  <Tabs className="Tabs">
      <TabList>
        <Tab onClick={displayFirstTab}>CodeClicker</Tab>
        <Tab onClick={displaySecondTab}>TheLoop</Tab>
        <Tab onClick={displayThirdTab}>Devify</Tab>
      </TabList>

      <TabPanel>
      <HomeCarousel data={dataCodeClicker}/>
        <p>Incremental game where the user initially clicks on a big computer on the screen, earning a single line of code per click.</p>
        <p>They can then use their earned code to purchase "developers" and other "buildings" that automatically produce lines of code per second.</p>
      </TabPanel>

      <TabPanel>
      <HomeCarousel data={dataTheLoop}/>
        <p>
        A place for anyone impacted by Cancer, whether you have been diagnosed or are supporting a loved one.</p>
        <p>Support Platform for cancer patients and family members who wants to share feelings, experiences and generally a safe space for people to connect.
        </p>
      </TabPanel>

      <TabPanel>
      <HomeCarousel data={dataDevify}/>
        <p>Hire your own Web Developer with a simple click!</p>
        <p>The first Team Project done as a mockup for Airbnb where instead of renting places you rent Web Developers to code for you.
            Designed implemented and shipped to production in Heroku created entirely in Ruby on Rails.</p>
      </TabPanel>

  </Tabs>

    </div>
  );
}

export default Projects;
