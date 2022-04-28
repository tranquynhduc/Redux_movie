import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKEY } from './../../common/apis/ApiMovieKey';
import axios from 'axios';


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieText = 'harry'
        const response = await axios
            .get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieText}&type=movie`)
            .catch((err) => { console.log('err:', err); });
        return response.data;
    })

export const fetchAsyncShow = createAsyncThunk('movies/fetchAsyncShow',
    async () => {
        const movieShow = 'fish'
        const response = await axios
            .get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieShow}&type=series`)
            .catch((err) => { console.log('err:', err); });
        return response.data;


    })
export const fetchAsyncEpisode = createAsyncThunk('movies/fetchAsyncEpisode',
    async () => {
        const movieEpisode = 'nobita'
        const response = await axios
            .get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieEpisode}&type=movie`)
            .catch((err) => { console.log('err:', err); });
        return response.data;
    })

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async () => {
    const movieSeries = 'pokemon'
    const response = await axios
        .get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieSeries}&type=movie`)
        .catch((Err) => { console.log('err:', Err); })
    return  response.data;
})
//detail
export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
    const response = await axios 
        .get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&Plot=full`)
        .catch((Err) => { console.log('err:', Err); })
    return  response.data;
})


const initialState = {
    movies: {},
    shows: {},
    episodes: {},
    series:{},
    detail:{},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
    //extraReducers 
    extraReducers: {
        /*         [fetchAsyncMovies.pending]: () =>{
                    console.log('pending');
                }, */
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fulfilled successfully Movies')
            return { ...state, movies: payload }
        },
        /*      [fetchAsyncMovies.rejected]: () =>{
                 console.log('rejected') 
             },
      */
        [fetchAsyncShow.fulfilled]: (state, { payload }) => {
            console.log('fulfilled successfully Show')
            return { ...state, shows: payload }
        },

        [fetchAsyncEpisode.fulfilled]: (state, { payload }) => {
            console.log('fulfilled successfully episode')
            return { ...state, episodes: payload }
        },

        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log('fulfilled successfully episode')
            return { ...state, series: payload }
        },
        //detail
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log('fulfilled successfully episode')
            return { ...state, detail: payload }
        },


    }

})
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;