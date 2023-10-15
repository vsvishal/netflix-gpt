import { useDispatch } from "react-redux";
import { options } from "./constants";
import { addTrailerVideo } from "./movieSlice";
import { useEffect } from "react";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );

    const data = await response.json();

    const filteredTrailer = data.results?.filter((e) => e.type === "Trailer");
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : data.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;
