import React from 'react';

function PopBar({score}) {

  return (
    <div class="pop-slidecontainer">
      <input type="range" min="1" max="100" disabled="true"value={!!score ? score:50} class="pop-slider" id="myRange" />
    </div>
  )
}

export default PopBar;
