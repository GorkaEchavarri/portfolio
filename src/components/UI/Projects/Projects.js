import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Projects.css';
import HomeCarousel from "./HomeCarousel";


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
      <HomeCarousel/>
        <p>This is the first project I did blablabalbalbalbalbalba</p>
      </TabPanel>

      <TabPanel>
        <p>This is the 2 project I did blablabalbalbalbalbalba This is the first project I did blablabalbalbalbalbalba</p>
      </TabPanel>

      <TabPanel>
        <p>This is Project number 3 with blanvdsn`fnfs`bnufsi</p>
      </TabPanel>

    </Tabs>

    </div>
  );
}

export default Projects;
