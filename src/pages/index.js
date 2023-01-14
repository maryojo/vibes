import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";
import MusicPlayer from "../components/MusicPlayer";
import ArtistCard from "../components/ArtistCard";
import { useGetTopChartsQuery } from "../redux/services/shazam";
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

  if (isFetching)
    return (
      <DefaultLayout>
        <Loader />
      </DefaultLayout>
    );

  // if (error) return <Error />;

  return (
    <DefaultLayout>
      <div className="w-full flex justify-between ">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl">Hello</p>
        <div className="flex">
          <Searchbar />
        </div>
      </div>
      <div className="flex gap-10 mt-7">
        <div className="md:w-10/12 flex flex-col gap-7 ">
          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-base sm:text-lg md:text-xl">
                Trending Songs
              </p>
              <Link to="/trending-songs">
                <p className="text-sm sm:text-base font-thin ml-3 text-gray-500 cursor-pointer hover:text-gray-400">
                  See all
                </p>
              </Link>
            </div>
            <div className="flex flex-wrap justify-between gap-2 sm:gap-3 md:gap-5">
              {musics?.map((song, i) => (
                <SongCard
                  i={i}
                  key={song?.key}
                  link={`/songs/${song?.key}`}
                  Title={song?.title}
                  CoverURL={song?.images?.coverart}
                  Artist={song?.subtitle}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  styling="w-[7.4rem] sm:w-[8.5rem] md:w-[10.4rem]"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl ">Trending Songs</p>
            <div>
              <SongCard />
            </div>
          </div>
        </div>
        <div className="hidden md:flex-col md:items-center  md:flex ">
          <p className="font-semibold text-xl mb-3">Top Artists</p>
          <TopArtists />
        </div>
      </div>
      <MusicPlayer />
    </DefaultLayout>
  );
};

export default Home;
