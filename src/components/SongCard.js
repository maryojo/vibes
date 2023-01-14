import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import DefaultMusicCoverImg from "../assets/images/default-music-image.png";
import PlayPauseButton from "./PlayPauseComponents/PlayPauseButton";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import PlayingAnimation from "../assets/animations/playing-animation.json";

const SongCard = ({
  Title,
  Artist,
  link,
  CoverURL,
  isPlaying,
  activeSong,
  songData,
  i,
  song,
  styling,
}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, songData, i }));
    dispatch(playPause(true));
  };

  return (
    <div>
      <div className={`flex flex-col p-[0.5rem] md:p-3 pb-3 md:pb-5 rounded-2xl bg-black gap-4 ${styling}`}>
        <div className="imgEffectContainer cursor-pointer">
          <img
            src={CoverURL ? CoverURL : DefaultMusicCoverImg}
            alt={Title}
            className="max-h-32 md:max-h-52 w-52 object-cover object-center rounded-xl"
          />
          <div class="effect">
            <PlayPauseButton
              section="song-card"
              length={50}
              isPlaying={isPlaying}
              song={song}
              activeSong={activeSong}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Link to={link} className="w-10/12">
              <p className="font-semibold text-xs sm:text-sm cursor-pointer hover:underline truncate">
                {Title}
              </p>
            </Link>
            <Player
              src={PlayingAnimation}
              autoplay
              loop
              className={`w-4 h-4 ${
                activeSong?.title === Title && isPlaying
                  ? "block"
                  : "hidden"
              }`}
            ></Player>
          </div>
          <p className="text-gray-500 text-xs truncate">{Artist}</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
