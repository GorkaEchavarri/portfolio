import React, { useState } from 'react';
import './Expertise.css';
import Focused from './Focused';
import AllTools from './All_tools';

function Expertise(props) {

  const [addFocusedApp, setFocusedApp] = useState(0)

  return (
    <div className="Expertise-container">
      <Focused ToZoomHandler={addFocusedApp}/>

      <AllTools setFocusedApp={setFocusedApp} />
    </div>
  )
}

export default Expertise;
