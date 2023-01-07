import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from "../components/DefaultLayout";
import Searchbar from "../components/Searchbar";
import SongCard from "../components/SongCard";
import SearchFilters from "../components/SearchFilters";

import { useGetAllSongsQuery}  from "../redux/services/shazam";

const Explore = () => {
  const { data, isFetching, error }  = useGetAllSongsQuery();  
 
  console.log(data);

  return (
    <DefaultLayout>
        <div className="mb-5 flex justify-between">
          <p className="font-bold text-2xl text-white">Discover</p>
          <div className="flex gap-10">
            <Searchbar />
            <SearchFilters/>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
          <SongCard
            Title="Song Name"
            CoverURL="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBjb3ZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            Artist="John Mc"
          />
        </div>
    </DefaultLayout>    
  );
};

export default Explore;
