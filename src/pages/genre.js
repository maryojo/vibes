import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SearchFilters from "../components/SearchFilters";
import SongCard from "../components/SongCard";

const Genre = () => {
  return (
    <DefaultLayout>
      <div className="mb-5 flex justify-between">
        <div className="flex flex-row justify-center items-center gap-5">
        <Link to="/discover">
        <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9084 24.1073L18.0143 23.9846C18.3321 23.5565 18.2968 22.9488 17.9084 22.5604L13.9428 18.5948L23.6986 18.5944L23.8471 18.5843C24.3808 18.512 24.7924 18.0543 24.7924 17.5006L24.7823 17.3521C24.71 16.8182 24.2523 16.4069 23.6986 16.4069L13.9398 16.4073L17.9093 12.4396L18.0153 12.3169C18.3331 11.8888 18.2978 11.2811 17.9096 10.8928C17.4826 10.4656 16.79 10.4654 16.3629 10.8925L10.5273 16.7258L10.4213 16.8484C10.1035 17.2766 10.1388 17.8844 10.5271 18.2728L16.3617 24.1073L16.4844 24.2132C16.9125 24.5309 17.5201 24.4956 17.9084 24.1073ZM17.5 2.91669C9.4458 2.91669 2.91663 9.44586 2.91663 17.5C2.91663 25.5541 9.4458 32.0834 17.5 32.0834C25.554 32.0834 32.0833 25.5541 32.0833 17.5C32.0833 9.44586 25.554 2.91669 17.5 2.91669ZM17.5 29.8959C10.6539 29.8959 5.10413 24.346 5.10413 17.5C5.10413 10.654 10.6539 5.10419 17.5 5.10419C24.346 5.10419 29.8958 10.654 29.8958 17.5C29.8958 24.346 24.346 29.8959 17.5 29.8959Z"
              fill="#4F4F4F"
            />
          </svg>
        </Link>
         
          <div className="flex gap-3 justify-center items-end">
          <p className="font-bold text-2xl text-white">
          Genre
        </p>
        <p className="font-thin ml-3 text-gray-500">All</p>
          </div>
          
        </div>
        
        <div className="flex gap-10">
          <Searchbar />
          <SearchFilters />
        </div>
      </div>
      <div className="flex flex-row w-full gap-10">
        <div className="w-10/12">
          <SongCard />
        </div>
        <div className="flex flex-col gap-4 font-thin">
          <p>All</p>
          <p>Hip Hop</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Genre;
