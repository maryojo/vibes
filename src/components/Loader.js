import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '../assets/animations/loading-animation.json'


const Loader = ({visibility}) => {
  return (
    <Player
    src={LoadingAnimation}
    autoplay
    loop
    className={`w-64 h-64 ${visibility}`}>
    </Player>
  )
}

export default Loader