import React from "react";
import { Link } from "react-router-dom";
import DefaultMusicCoverImg from "../assets/images/default-music-image.png";

const SongCard = ({ Title, Artist, link, CoverURL, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  console.log(typeof Artist);
  // let artistArray = Artist.split(' & ' || ', ' || ',');
  // let firstArtist = artistArray[0];
  // Artist = firstArtist;
  return (
    <div>
      <div className="flex flex-col p-3 pb-5 rounded-2xl bg-black gap-4">
        <div className="imgEffectContainer cursor-pointer">
          <img
            src={CoverURL ? CoverURL : DefaultMusicCoverImg}
            alt={Title}
            className="max-h-32 md:max-h-52 w-52 object-cover object-center rounded-xl"
          />
          <div class="effect">
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33337 50C8.33337 26.9881 26.9882 8.33333 50 8.33333C73.0117 8.33333 91.6667 26.9881 91.6667 50C91.6667 73.0117 73.0117 91.6667 50 91.6667C26.9882 91.6667 8.33337 73.0117 8.33337 50ZM45.2317 33.9791C41.7605 32.0564 37.5 34.567 37.5 38.5353V61.465C37.5 65.4333 41.7605 67.9438 45.2317 66.0213L69.2225 52.7337C70.2167 52.1833 70.8334 51.1362 70.8334 50C70.8334 48.8637 70.2167 47.8171 69.2225 47.2662L45.2317 33.9791Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Link  to={link}>
              <p className="font-semibold text-sm  cursor-pointer hover:underline">
                {Title}
              </p>
            </Link>
            <svg
              className="invisible"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 8.75V15.25C11 15.6642 10.6642 16 10.25 16C9.83579 16 9.5 15.6642 9.5 15.25V8.75C9.5 8.33579 9.83579 8 10.25 8C10.6642 8 11 8.33579 11 8.75ZM17 8.75V15.25C17 15.6642 16.6642 16 16.25 16C15.8358 16 15.5 15.6642 15.5 15.25V8.75C15.5 8.33579 15.8358 8 16.25 8C16.6642 8 17 8.33579 17 8.75ZM14 10.25V13.75C14 14.1642 13.6642 14.5 13.25 14.5C12.8358 14.5 12.5 14.1642 12.5 13.75V10.25C12.5 9.83579 12.8358 9.5 13.25 9.5C13.6642 9.5 14 9.83579 14 10.25ZM8 10.75V13.25C8 13.6642 7.66421 14 7.25 14C6.83579 14 6.5 13.6642 6.5 13.25V10.75C6.5 10.3358 6.83579 10 7.25 10C7.66421 10 8 10.3358 8 10.75Z"
                fill="#C27EA3"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-xs">{Artist}</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
