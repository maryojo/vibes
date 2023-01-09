import React from "react";
import PlayPauseButton from "./PlayPauseButton";
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const MusicControl = ({ style, currentURL, Title, songId, songName, artist, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  return (
    <div className={`glass-effect w-[90%]  rounded-full z-10 ${style} flex items-center p-2 px-10 `}>
    <div className=" w-full h-full flex items-center justify-between">
    <div className="flex items-center gap-5">
        <svg
          className="cursor-pointer"
          width="24"
          height="25"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 5.1875C3.75 4.66974 4.16974 4.25 4.6875 4.25C5.20526 4.25 5.625 4.66974 5.625 5.1875V25.8125C5.625 26.3302 5.20526 26.75 4.6875 26.75C4.16974 26.75 3.75 26.3302 3.75 25.8125V5.1875ZM26.2499 6.44125C26.2499 4.68149 24.2776 3.64204 22.826 4.63671L9.70289 13.6285C8.44018 14.4936 8.43368 16.3549 9.69033 17.2289L22.8134 26.3559C24.2639 27.3646 26.2499 26.3266 26.2499 24.56V6.44125Z"
            fill="#828282"
          />
        </svg>
        <svg
        className="cursor-pointer"
          width="24"
          height="25"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 24.125V24.875C28.4992 25.571 28.2224 26.2382 27.7304 26.7304C27.2382 27.2224 26.571 27.4992 25.875 27.5H4.125C3.42904 27.4992 2.76183 27.2224 2.26972 26.7304C1.7776 26.2382 1.5008 25.571 1.5 24.875V24.125C1.5 23.8267 1.61853 23.5404 1.82951 23.3295C2.04048 23.1185 2.32664 23 2.625 23C2.92336 23 3.20952 23.1185 3.42049 23.3295C3.63147 23.5404 3.75 23.8267 3.75 24.125V24.875C3.75 24.9744 3.78951 25.0698 3.85983 25.1402C3.93017 25.2105 4.02555 25.25 4.125 25.25H25.875C25.9744 25.25 26.0698 25.2105 26.1402 25.1402C26.2105 25.0698 26.25 24.9744 26.25 24.875V24.125C26.25 23.8267 26.3685 23.5404 26.5795 23.3295C26.7904 23.1185 27.0767 23 27.375 23C27.6733 23 27.9596 23.1185 28.1705 23.3295C28.3815 23.5404 28.5 23.8267 28.5 24.125ZM5.7495 16.064C6.88314 15.3627 8.21127 15.0421 9.54 15.149C10.0963 15.1789 10.6487 15.2603 11.19 15.392C11.1597 15.1484 11.0681 14.9165 10.9238 14.7179C10.7795 14.5194 10.5873 14.3606 10.365 14.2565C9.7729 13.9859 9.12326 13.8654 8.4735 13.9055C7.92168 13.9165 7.37737 14.0358 6.8715 14.2565C6.73932 14.3226 6.59542 14.362 6.44802 14.3725C6.30061 14.383 6.15259 14.3643 6.0124 14.3176C5.8722 14.2708 5.74258 14.1969 5.63095 14.1001C5.51931 14.0033 5.42784 13.8854 5.36175 13.7532C5.29566 13.6211 5.25625 13.4772 5.24578 13.3298C5.2353 13.1824 5.25396 13.0343 5.3007 12.8942C5.34742 12.7539 5.42132 12.6243 5.51814 12.5127C5.61497 12.4011 5.73282 12.3096 5.865 12.2435C6.66075 11.876 7.52368 11.6763 8.4 11.657C9.42822 11.6023 10.4539 11.8038 11.385 12.2435C12.0872 12.6185 12.6627 13.1929 13.0391 13.8944C13.4154 14.5959 13.5758 15.393 13.5 16.1855V22.25C13.5111 22.5483 13.4033 22.8389 13.2002 23.0577C12.9971 23.2766 12.7154 23.4059 12.417 23.417C12.1186 23.4281 11.8281 23.3203 11.6092 23.1172C11.3904 22.9141 11.2611 22.6323 11.25 22.334C10.6129 22.7744 9.8913 23.0777 9.13088 23.2246C8.37045 23.3716 7.58778 23.3589 6.8325 23.1875C6.08907 22.9959 5.41833 22.5902 4.90365 22.0205C4.38897 21.4508 4.05306 20.7425 3.93766 19.9835C3.82228 19.2245 3.93251 18.4484 4.25463 17.7515C4.57676 17.0546 5.09658 16.4678 5.7495 16.064ZM7.416 21.014C8.12901 21.0966 8.85141 21.0032 9.51986 20.7416C10.1883 20.4802 10.7824 20.0585 11.25 19.514V17.75C10.6612 17.549 10.0473 17.4304 9.426 17.3975C8.57961 17.3167 7.72936 17.5063 6.9975 17.939C6.70551 18.1027 6.46953 18.3505 6.32024 18.65C6.17094 18.9497 6.11524 19.2872 6.16038 19.6189C6.20553 19.9507 6.34942 20.261 6.57334 20.5099C6.79728 20.7586 7.09089 20.9343 7.416 21.014ZM16.5 22.25V6.5C16.5 6.20164 16.6185 5.91548 16.8295 5.70451C17.0404 5.49353 17.3267 5.375 17.625 5.375C17.9233 5.375 18.2096 5.49353 18.4205 5.70451C18.6315 5.91548 18.75 6.20164 18.75 6.5V13.4855C19.4802 12.8557 20.4108 12.5064 21.375 12.5C22.665 12.6069 23.8608 13.218 24.7032 14.2008C25.5456 15.1836 25.9666 16.4588 25.875 17.75C25.9666 19.0412 25.5456 20.3164 24.7032 21.2992C23.8608 22.282 22.665 22.8931 21.375 23C20.4109 22.9928 19.4807 22.6436 18.75 22.0145V22.25C18.75 22.5483 18.6315 22.8346 18.4205 23.0455C18.2096 23.2565 17.9233 23.375 17.625 23.375C17.3267 23.375 17.0404 23.2565 16.8295 23.0455C16.6185 22.8346 16.5 22.5483 16.5 22.25ZM19.125 17.75C19.0384 18.4441 19.2246 19.1447 19.6441 19.7044C20.0638 20.264 20.6844 20.6388 21.375 20.75C22.0656 20.6388 22.6862 20.264 23.1059 19.7044C23.5254 19.1447 23.7116 18.4441 23.625 17.75C23.7116 17.0559 23.5254 16.3553 23.1059 15.7956C22.6862 15.2361 22.0656 14.8612 21.375 14.75C20.6844 14.8612 20.0638 15.2361 19.6441 15.7956C19.2246 16.3553 19.0384 17.0559 19.125 17.75Z"
            fill="#828282"
          />
        </svg>
        
      </div>
      <div className="flex gap-3">
      <img src={currentURL} className="h-10 w-10 rounded-full bg-gray-300"/>
      <div className="flex flex-col justify-between">
        <p className="font-semibold text-sm">{songName}</p>
        <p className="font-thin text-xs text-gray-400">{artist}</p>
      </div>
      </div>
      
      <div></div>
      <div className="flex items-center gap-5">
        <PlayPauseButton
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          section = 'main-control'
          length = {30}
        />
        <svg
        className="cursor-pointer"
          width="24"
          height="25"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 25.8125C26.25 26.3303 25.8303 26.75 25.3125 26.75C24.7947 26.75 24.375 26.3303 24.375 25.8125L24.375 5.1875C24.375 4.66975 24.7947 4.25 25.3125 4.25C25.8303 4.25 26.25 4.66975 26.25 5.1875L26.25 25.8125ZM3.75012 24.5588C3.75012 26.3185 5.72238 27.358 7.174 26.3633L20.2971 17.3715C21.5598 16.5064 21.5663 14.6451 20.3097 13.7711L7.18662 4.64412C5.73612 3.63537 3.75012 4.67338 3.75012 6.44L3.75012 24.5588Z"
            fill="#828282"
          />
        </svg>
      </div>
    </div>
      
    </div>
  );
};

export default MusicControl;
