import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Projects.css';
import HomeCarousel from "./HomeCarousel";

const dataCodeClicker = [
  {image:require('../../../images/Carousel/CodeClicker/image1.png')},
  {image:require('../../../images/Carousel/CodeClicker/image2.png')},
  {image:require('../../../images/Carousel/CodeClicker/image3.png')}
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

  return (
    <div className="Projects-box col-7">

<Tabs className="Tabs">
      <TabList>
        <Tab>CodeClicker</Tab>
        <Tab>TheLoop</Tab>
        <Tab>Devify</Tab>
      </TabList>

      <TabPanel>
      <HomeCarousel data={dataCodeClicker}/>
        <p>This is the first project I did blablabalbalbalbalbalba</p>
      </TabPanel>

      <TabPanel>
      <HomeCarousel data={dataTheLoop}/>
        <p>This is the 2 project I did blablabalbalbalbalbalba This is the first project I did blablabalbalbalbalbalba</p>
      </TabPanel>

      <TabPanel>
      <HomeCarousel data={dataDevify}/>
        <p>This is Project number 3 with blanvdsn`fnfs`bnufsi</p>
      </TabPanel>

    </Tabs>

    </div>
  );
}

export default Projects;
