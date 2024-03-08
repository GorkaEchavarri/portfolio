import React, { useState } from 'react';
import Profile from './components/UI/Profile/Profile';
import Projects from './components/UI/Projects/Projects';
import Expertise from './components/UI/Expertise/Expertise.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const[containerStatus, setContainerStatus] = useState('Container1');

  function addContainerHandler(item) {
    setContainerStatus(item)
  }

  return (
    <div className="App">
      <div className="Box">
      <div className={containerStatus}>
      <Profile />
      </div>
      </div>
      <Expertise />
      <Projects onSaveContainer={addContainerHandler}/>
    </div>
  );
}

export default App;

// Dependencies, FontAwesome, React Tables, Bootstraps... Mirar para readme que son.
