import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    searchButtonClicked: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleSearchButtonClicked: (state, action) => {
      state.searchButtonClicked = action.payload;
    },
  },
});
export const {
  toggleGptSearchView,
  addGptMovieResult,
  toggleSearchButtonClicked,
} = gptSlice.actions;
export default gptSlice.reducer;
