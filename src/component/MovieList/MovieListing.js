import React from 'react';
    import { useSelector } from 'react-redux';
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {

    const movies = useSelector((state) => state.movies.movies)
    const movieShows = useSelector((state) => state.movies.shows)
    const movieEpisodes = useSelector((state) => state.movies.episodes)
    const movieSeries = useSelector((state) => state.movies.series)

    console.log('movies:', movies);
    console.log('movieShows:', movieShows);
    console.log('movieEpisodes:', movieEpisodes);
    console.log('movieSeries:', movieSeries);



    const renderMovies = movies.Response === 'True' ? (
        movies.Search.map(movie => {
            return (
                <MovieCard key={movie.imdbID} data={movie} />
            )
        }))
        :
        (<div><h2>Loading...</h2></div>)

    const renderShow = movieShows.Response === 'True' ? (
        movieShows.Search.map(movie => {
            return (
                <MovieCard key={movie.imdbID} data={movie} />
            )
        }))
        :
        (<div><h2>Loading...</h2></div>)

    const renderEpisodes = movieEpisodes.Response === 'True' ? (
        movieEpisodes.Search.map(movie => {
            return (
                <MovieCard key={movie.imdbID} data={movie} />
            )
        }))
        :
        (<div><h2>Loading...</h2></div>)

    const renderSeries = movieSeries.Response === 'True' ? (
        movieSeries.Search.map(movie => {
            return (
                <MovieCard key={movie.imdbID} data={movie} />
            )
        }))
        :
        (<div><h2>Loading...</h2></div>)



    return (
        <div className='movie-wrappers'>
            <div className='Movie-list'>
                <h2 className='movie-header'>Movies Card List </h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
            </div>
            <div className='Movie-list'>
                <h2 className='movie-header'>Movies Card Show </h2>
                <div className='movie-container'>
                    {renderShow}
                </div>
            </div>
            <div className='Movie-list'>
                <h2 className='movie-header'>Movies Card </h2>
                <div className='movie-container'>
                    {renderEpisodes}
                </div>
            </div>
            <div className='Movie-list'>
                <h2 className='movie-header'>Movies Card Series </h2>
                <div className='movie-container'>
                    {renderSeries}
                </div>
            </div>

        </div>
    );
};

export default MovieListing;