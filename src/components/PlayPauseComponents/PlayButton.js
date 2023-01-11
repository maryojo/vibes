import React from 'react'
import PlayCircleIcon from './PlayCircleIcon'
import PlayIcon from './PlayIcon';


const PlayButton = ({length, section, click}) => 
( section === 'main-control' ? (
  <PlayIcon length={length} click={click}/>
): 
  section === 'song-card' ? (
    <PlayCircleIcon length={length} click={click}/>
  ): (
    <PlayIcon length={length} click={click}/>
  ) );


export default PlayButton