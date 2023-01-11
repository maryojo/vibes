import React from 'react'
import DefaultCoverArt from '../../assets/images/default-music-image.png'

const TrackInfo = ({isPlaying, isActive, activeSong, style}) => {
  return (
    <div className={`flex flex-row gap-5 ${style}`}>
      <div className={`${isPlaying && isActive ? 'animate-3':''} h-12 w-12`}>
        <img src={`${activeSong?.images?.coverart ? activeSong?.images?.coverart : DefaultCoverArt }`} alt={activeSong?.title} className='rounded-full'/>
      </div>
      <div className='flex flex-col justify-center gap-1'>
        <p className='font-semibold text-sm truncate'>{activeSong?.title ? activeSong?.title : 'No active song'}</p>
        <p className='font-thin text-xs text-gray-300 truncate'>{activeSong?.subtitle ? activeSong?.subtitle : 'No active song'}</p>
      </div>
    </div>
  )
}

export default TrackInfo