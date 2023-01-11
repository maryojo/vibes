import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";
import MusicPlayer from "../components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import { useGetTopChartsQuery}  from "../redux/services/shazam";
import Loader from "../components/Loader";
import TopArtists from "../components/TopArtists";

import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";



const Home = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  let musics = [];
  if (data) {
    musics = data.tracks.slice(0, 10);
    console.log(data.tracks);
  }

  if (isFetching) return (
  <DefaultLayout>
    <Loader/>
  </DefaultLayout>);

  // if (error) return <Error />;
  

  return (
    <DefaultLayout>
      <div className="w-full flex justify-between ">
        <p className="font-bold text-3xl">Hello</p>
        <div className="flex">
          <Searchbar/>
        </div>
      </div>
      <div className="flex gap-10 mt-7">
        <div className="w-10/12 flex flex-col gap-7">
        <div>
        <div className="flex justify-between mb-3">
        <p  className="font-semibold text-xl">Trending Songs</p>
        <Link to='/trending-songs'>
        <p className="font-thin ml-3 text-gray-500 cursor-pointer hover:text-gray-400">See all</p>
        </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {musics?.map((song, i) => (
        <SongCard
          i={i}
          key={song.key}
          link={`/songs/${song.key}`}
          Title={song.title}
          CoverURL={song.images?.coverart}
          Artist={song.subtitle}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          
        />
      ))}
    </div>
        </div>
        <div>
        <p className="font-semibold text-xl ">Trending Songs</p>
          <div>
            <SongCard/>
          </div>
        </div>
         
        </div>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-xl mb-3">Top Artists</p>
          <TopArtists/>
        </div>
      </div>
      <MusicPlayer/>
    </DefaultLayout>
  );
};

export default Home;
