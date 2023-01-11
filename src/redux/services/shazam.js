import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


  export const shazamApi = createApi({
    reducerPath: 'shazamApi',
		baseQuery: fetchBaseQuery({
			baseUrl: 'https://shazam.p.rapidapi.com/',
			prepareHeaders: (headers) => {
				headers.set('X-RapidAPI-Key', 'cc5250c346msh46c3805e5504710p1cc0bejsn7e10df3dca79');

				return headers;
			},
		}),
		endpoints: (builder) =>({
			getTopCharts: builder.query({ query: () => '/charts/track'}),
			getAllSongs: builder.query({ query: () => '/songs/list-recommendations' }),
			getSongDetails: builder.query({ query: ({songid}) => `/songs/get-details?key=${songid}` }),
			getSimilarSongs: builder.query({ query: ({songid}) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`})
		}),
		
  });

	export const {
		useGetTopChartsQuery,
		useGetAllSongsQuery,
		useGetSongDetailsQuery,
		useGetSimilarSongsQuery,
	} = shazamApi;
	