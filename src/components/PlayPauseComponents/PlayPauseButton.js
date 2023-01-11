import React from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const PlayPauseButton = ({isPlaying, activeSong, song, handlePause, handlePlay, length, section}) =>
    
    (isPlaying && activeSong?.title === song.title ? (
      <PauseButton length={length} section={section} click={handlePause}/>
    ) : (
      <PlayButton length={length} section={section} click={handlePlay}/>
        )
    );

export default PlayPauseButton;