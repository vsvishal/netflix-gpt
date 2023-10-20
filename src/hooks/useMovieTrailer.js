import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const trailerVideos = useSelector((store) => store.movies.trailerVideos);

  const getTrailerVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );

    const data = await response.json();

    const filteredTrailer = data.results?.filter((e) => e.type === "Trailer");
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : data.results[0];

    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    !trailerVideos && getTrailerVideos();
  }, []);
}

export default useMovieTrailer;
