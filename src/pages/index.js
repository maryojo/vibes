import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";
import { useGetTopChartsQuery}  from "../redux/services/shazam";
import Loader from "../components/Loader";



const Home = () => {
  const { data, isFetching, error }  = useGetTopChartsQuery();
  let musics = [];
  let artistArr = [];




  if(data){
    musics = data.tracks;
    
}



  console.log(data);
  // const musics = data.tracks;
  // console.log(musics)
  if(data){
    console.log(data.tracks);
  }

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {
              musics?.map((song) =>(
                <SongCard 
                  key={song.key}
                  link={`/songs/${song.key}`}
                  Title={song.title}
                  CoverURL={song.images?.coverart}
                  Artist={song.subtitle}
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
          <div className="flex flex-col gap-5">
           {
            musics?.map((song) =>(
              <ArtistCard
                key={song.key}
                // link={`/artists/${song.artists[0].adamid}`}
                artistImgURL={song.images?.background}
                artistName={song.subtitle}

              />
            ))
           }
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
