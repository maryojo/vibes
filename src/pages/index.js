import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";
import { useGetTopChartsQuery}  from "../redux/services/shazam";
import Loader from "../components/Loader";
import TrendingSongs from "../components/TrendingSongs";
import TopArtists from "../components/TopArtists";



const Home = () => {


  

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
        <p className="font-thin ml-3 text-gray-500 cursor-pointer hover:text-gray-400">See all</p>
        </div>
          <TrendingSongs/>
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
    </DefaultLayout>
  );
};

export default Home;
