import React, { useEffect } from 'react';
import './MovieDetail.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchAsyncDetail } from '../../feature/movie/MovieSlice';
import  {AiFillStar} from 'react-icons/ai' ;
import  {BsCaretUpSquareFill} from 'react-icons/bs';
import  {BsClock} from 'react-icons/bs';



const MovieDetail = () => {
    const { imdbID } = useParams();
    console.log('detailId:', imdbID);

    const dispatch = useDispatch();

    const movieDetail = useSelector(state => state.movies.detail)
    console.log('movieDetail:', movieDetail);

    useEffect(() => {
        dispatch(fetchAsyncDetail(imdbID))
    }, [dispatch, imdbID])

    return (
        <div className="detail_container">
            
            <div className="detail_Poster"><img src={movieDetail.Poster} alt={movieDetail.Title} /></div>
            <div className="detail_form">
                <p className="movie-titles">{movieDetail.Title}</p>
                <div className="movie-rating">
                    <span className="detail_title">Quality <AiFillStar />: {movieDetail.imdbRating}</span>
                    <span className="detail_title">imdbVotes <BsCaretUpSquareFill/> : {movieDetail.imdbVotes}</span>
                    <span className="detail_title">Runtime <BsClock/>: {movieDetail.Runtime}</span>
                    <span className="detail_title">Released: {movieDetail.Released}</span>
                </div>
                <div className="detail_infor">
                    <div >
                        <span>Director:</span>
                        {movieDetail.Director}
                    </div>
                    <div >
                        <span>Start:</span>
                        {movieDetail.Actors}
                    </div>
                    <div >
                        <span>Language:</span>
                        {movieDetail.Language}
                    </div>
                    <div >
                        <span>Awards:</span>
                        {movieDetail.Awards}
                    </div>
                </div>
                <div className="detail_Plot">  {movieDetail.Plot} </div>




            </div>
        </div>
    );
};

export default MovieDetail;