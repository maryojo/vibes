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
			getSongDetails: builder.query({ query: () => '/songs/v2/get-details' })

		}),
		
  });

	export const {
		useGetTopChartsQuery,
		useGetAllSongsQuery,
		useGetSongDetailsQuery,
	} = shazamApi;
	