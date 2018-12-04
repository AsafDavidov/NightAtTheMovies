import React from 'react';

function Timer({time,handleStopTime}) {
  return (
    <h1 onClick={handleStopTime}>Current Time Taken: {time}</h1>
  )
}

export default Timer;
