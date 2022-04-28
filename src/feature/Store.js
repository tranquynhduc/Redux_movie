import { configureStore } from "@reduxjs/toolkit";
import  movieReducer from './movie/MovieSlice'
export default  configureStore ({
    reducer:{
        movies: movieReducer
        
    }
})