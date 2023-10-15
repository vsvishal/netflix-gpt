import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: movieSlice,
  },
});

export default appStore;
