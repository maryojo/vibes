import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


  export const shazamApi = createApi({
    reducerPath: 'shazamApi',
		baseQuery: fetchBaseQuery({
			baseUrl: 'https://shazam.p.rapidapi.com/',
			prepareHeaders: (headers) => {
				headers.set('X-RapidAPI-Key', process.env.REACT_APP_SHAZAM_API_KEY);

				return headers;
			},
		}),
		endpoints: (builder) =>({
			getTopCharts: builder.query({ query: () => '/charts/track'}),
			getAllSongs: builder.query({ query: () => '/songs/list-recommendations' }),
			getSongDetails: builder.query({ query: ({songid}) => `/songs/get-details?key=${songid}` }),
			getSimilarSongs: builder.query({ query: ({songid}) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`}),
			findSong: builder.query({ query: ({searchTerm}) => `/search?term=${searchTerm}`})
		}),
		
  });

	export const {
		useGetTopChartsQuery,
		useGetAllSongsQuery,
		useGetSongDetailsQuery,
		useGetSimilarSongsQuery,
		useFindSongQuery,
	} = shazamApi;
	