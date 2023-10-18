import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesName: null,
    tmdbMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMoviesName, tmdbMovies } = action.payload;
      state.gptMoviesName = gptMoviesName;
      state.tmdbMovies = tmdbMovies;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
