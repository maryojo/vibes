import React from 'react'
import PauseCircleIcon from './PauseCircleIcon'
import PauseIcon from './PauseIcon';


const PauseButton = ({length, section}) => 
( section === 'main-control' ? (
  <PauseIcon length={length}/>
): 
  section === 'song-card' ? (
    <PauseCircleIcon length={length}/>
  ): (
    <PauseIcon length={length}/>
  ) );


export default PauseButton