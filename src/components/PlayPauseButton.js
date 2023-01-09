import React from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const PlayPauseButton = ({isPlaying, activeSong, song, handlePauseClick, handlePlayClick, playIconSvg, pauseIconSvg, length, section}) =>
    (isPlaying && activeSong?.title === song.title ? (
      <PauseButton length={length} section={section}/>
    ) : (
      <PlayButton length={length} section={section}/>
        )
    );

export default PlayPauseButton;