import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazam";

import SongCard from "./SongCard";

const TrendingSongs = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  let musics = [];
  let artistArr = [];

  if (data) {
    musics = data.tracks;
  }

  console.log(data);

  if (data) {
    console.log(data.tracks);
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {musics?.map((song) => (
        <SongCard
          key={song.key}
          link={`/songs/${song.key}`}
          Title={song.title}
          CoverURL={song.images?.coverart}
          Artist={song.subtitle}
        />
      ))}
    </div>
  );
};

export default TrendingSongs;
