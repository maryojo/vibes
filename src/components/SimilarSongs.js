import React from 'react'
import { useGetSimilarSongsQuery } from '../redux/services/shazam'
import SongCard from './SongCard'

const SimilarSongs = ({songid}) => {
  const { data } = useGetSimilarSongsQuery({songid});

  console.log(data)
  let songlist = [];
  let songlistArr = [];
  let songlistKey = [];
  songlist = data?.resources['shazam-songs'];
  console.log(songlist)

  if(songlist){
    Object.entries(songlist).map(([key, value]) => {
      songlistArr.push(value?.attributes);
      songlistKey.push(key);
  });
  }

  console.log(songlistArr)
  return (
    <div>
    <p className='font-semibold text-xl mb-3'>More like this</p>
    <div className='flex flex-col gap-3'>
      {songlistArr?.map((song, i) => (
        <SongCard
          i={i}
          key={`${songlistKey[i]}`}
          link={`/songs/${songlistKey[i]}`}
          Title={song.title}
          CoverURL={song.images?.coverArt}
          Artist={song.primaryArtist}
          song={song}
        />
      ))}
    </div>
    </div>
  )
}

export default SimilarSongs