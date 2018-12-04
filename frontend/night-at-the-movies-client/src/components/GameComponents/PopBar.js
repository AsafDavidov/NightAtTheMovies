import React from 'react';

function PopBar({score}) {

  return (
    <div className="pop-slidecontainer">
      <input type="range" min="1" max="100" disabled={true} value={!!score ? score:0} className="pop-slider" id="myRange" />
    </div>
  )
}

export default PopBar;
