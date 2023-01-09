import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazam";

import ArtistCard from "./ArtistCard";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  let musics = [];
  let artistArr = [];

  if (data) {
    musics = data.tracks;
  }

  console.log(data);
  // const musics = data.tracks;
  // console.log(musics)
  if (data) {
    console.log(data.tracks);
  }

  return (
    <div className="flex flex-col gap-5">
      {musics?.map((song) => (
        <ArtistCard
          key={song.key}
          // link={`/artists/${song?.artists[0]?.adamid}`}
          artistImgURL={song?.images?.background}
          artistName={song?.subtitle}
        />
      ))}
    </div>
  );
};

export default TopArtists;
