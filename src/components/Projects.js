import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Projects.css';


function Projects() {

  return (
    <div className="Projects-box">

<Tabs className="Tabs">
       <TabList>
         <Tab>Project 1</Tab>
         <Tab>Project 2</Tab>
         <Tab>Project 3</Tab>
       </TabList>
<TabPanel>
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
