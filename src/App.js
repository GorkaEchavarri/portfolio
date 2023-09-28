import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './components/UI/Profile/Profile';
import Projects from './components/UI/Projects/Projects';

function App() {

  const[containerStatus, setContainerStatus] = useState('Container1');

  function addContainerHandler(item) {
    setContainerStatus(item)
  }


  return (
    <div className="App">
    <div className={containerStatus}>

     <Profile />

     <Projects onSaveContainer={addContainerHandler}/>

    </div>
    </div>
  );
}

export default App;

// Dependencies, FontAwesome, React Tables, Bootstraps... Mirar para readme que son.
