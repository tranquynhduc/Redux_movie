
import React, { useEffect } from 'react';
import MovieListing from '../MovieList/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies,fetchAsyncShow,fetchAsyncEpisode,fetchAsyncSeries } from './../../feature/movie/MovieSlice';


const Home = () => {
    // const movieText = 'harry'
     const dispatch = useDispatch();
    // const fetchMoive = async () => {
    //     // const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${movieText}&type=movie`)
    //     //     .catch((err) => { console.log('err:', err); })
    //     // dispatch(addMovies(response.data))
    // }
    
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShow());
        dispatch(fetchAsyncEpisode());
        dispatch(fetchAsyncSeries());
    }, [dispatch])

    return (
        <div>
            <div className='banner-img '></div>
            <MovieListing />
        </div>
    );
};

export default Home;