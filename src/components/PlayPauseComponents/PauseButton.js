import React from 'react'
import PauseCircleIcon from './PauseCircleIcon'
import PauseIcon from './PauseIcon';


const PauseButton = ({length, section, click}) => 
( section === 'main-control' ? (
  <PauseIcon length={length} click={click}/>
): 
  section === 'song-card' ? (
    <PauseCircleIcon length={length} click={click}/>
  ): (
    <PauseIcon length={length} click={click}/>
  ) );


export default PauseButton