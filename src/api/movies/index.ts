import { TopMovieDataResponse } from "../../models/Movies";

export const getTopMovies = async (): Promise<TopMovieDataResponse> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch top movies");
  }
};
