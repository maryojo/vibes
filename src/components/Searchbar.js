import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFindSongQuery } from '../redux/services/shazam';

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isFetching, error } = useFindSongQuery({searchQuery});


  const handleSearch = () => {
    // console.log('Performing search with query:', searchQuery);
    setSearchResults(data?.tracks.hits);
    console.log(data?.tracks.hits);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className='relative'>
      <input
        className='bg-[#333333] text-gray-400 text-xs sm:text-sm rounded-full w-[100%] px-4 md:px-5 py-2'
        placeholder='Search'
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      {/* Add your search icon here with an onClick event */}
      {/* <button
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button> */}
      {
        searchResults !== null && (
          <div className='absolute z-10 w-full flex flex-col gap-2 mt-2 bg-[#1a1919] p-4 max-h-64 overflow-y-auto rounded-lg'>
            {
              searchResults.map((searchResult) =>(
              <div key={searchResult?.track.key} className=''>
                <Link  to={`/songs/${searchResult?.track.key}`} className='flex flex-row gap-2'>
                  <img src={searchResult.track.images?.coverart} className='h-8 w-8 rounded-full'/>
                  <div>
                    <p className='text-[14px]'>{searchResult?.track.title}</p>
                    <p className='text-[10px]'>{searchResult?.track.subtitle}</p>
                  </div>
                </Link>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default Searchbar;
