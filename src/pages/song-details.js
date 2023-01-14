import React, {useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetSongDetailsQuery } from "../redux/services/shazam";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

import Back from "../components/Back";
import DefaultLayout from "../components/DefaultLayout";
import Loader from "../components/Loader";
import SimilarSongs from "../components/SimilarSongs";
import ReactPlayer from 'react-player'

import DefaultImage from '../assets/images/default-music-image.png'
import MusicPlayer from "../components/MusicPlayer";


const SongDetails = () => {
  const { songid } = useParams();

  const { data, isFetching, error } = useGetSongDetailsQuery({ songid });

  console.log(songid);
  console.log(data);

  const [displayStatus, setDisplayStatus] = useState(false);
  const checkbox = useRef();

  const handleSwitch = () => {
    if (checkbox.current.checked) {
      setDisplayStatus(true);
    } else {
      setDisplayStatus(false);
    }
  }


  if (isFetching)
    return (
      <DefaultLayout>
        <Loader />
      </DefaultLayout>
    );

  

  return (
    <DefaultLayout>
      <Back title="Song Details" />
      <div className="flex md:flex-row flex-col w-full gap-7 md:gap-10 mt-5">
        <div className="w-full md:w-9/12 flex flex-col gap-7">
          <div>
          { !displayStatus ? 
            (<img
              src={data?.images?.coverart}
              alt={data?.title}
              className="rounded-2xl w-full object-cover object-center h-[50vh] md:h-[70vh]"/>
            ) : (
              <ReactPlayer url={data?.sections[2]?.youtubeurl?.actions[0]?.uri} className='w-full md:h-[70vh]' width={400} >
              </ReactPlayer>
            )
          }
          </div>
          <div>
            <div className="flex justify-between items-center md:items-start">
              <div className="flex flex-col gap-3">
                <p className="text-lg md:text-xl font-semibold">{data?.title}</p>
                <div className="flex items-center gap-3 pb-7">
                  <img
                    src={data?.images?.background}
                    alt={data?.subtitle}
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="text-xs text-gray-400">{data?.subtitle}</p>
                </div>
              </div>
              <label class="switch btn-color-mode-switch">
                <input
                  type="checkbox"
                  name="display-checkbox"
                  id="display-checkbox"
                  value="display"
                  ref={checkbox}
                  onChange={handleSwitch}
                />
                <label
                  for="display-checkbox"
                  data-on="Video"
                  data-off="Audio"
                  class="btn-color-mode-switch-inner text-sm"
                ></label>
              </label>
            </div>

            <div>
              <p className="font-semibold mb-4">Lyrics</p>
              <div className="flex flex-col gap-2">
                {data?.sections[1]?.text?.map((line, i) => (
                  <p className="text-gray-300 text-sm">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/12">
          <SimilarSongs songid={songid} />
        </div>
      </div>
      <MusicPlayer/>
    </DefaultLayout>
  );
};

export default SongDetails;
