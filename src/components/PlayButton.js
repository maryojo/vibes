import React from 'react'
import PlayCircleIcon from './PlayCircleIcon'
import PlayIcon from './PlayIcon';


const PlayButton = ({length, section}) => 
( section === 'main-control' ? (
  <PlayIcon length={length}/>
): 
  section === 'song-card' ? (
    <PlayCircleIcon length={length}/>
  ): (
    <PlayIcon length={length}/>
  ) );


export default PlayButton