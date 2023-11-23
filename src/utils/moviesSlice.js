import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo: null,
    },
    reducers:
 //Create action for the movies which are playing now
     {
        addNowPlayingMovies : ( state, action) => {
            state.nowPlayingMovies = action.payload
        },
        //Created action for trailer video key
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})


export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;