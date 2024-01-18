import React, {useState} from 'react';
import './Expertise.css';
import Focused from './Focused';
import AllTools from './All_tools';

function Expertise(props) {

  const [addFocusedApp, setFocusedApp] = useState(0)

  // console.log(addFocusedApp)
  // Now move addFocusedApp to Focused component and change the picture shown

  return (
    <div className="Expertise-container">
      <Focused />

      <AllTools setFocusedApp={setFocusedApp} />
    </div>
  )
}

export default Expertise;
