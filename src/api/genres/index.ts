import { Genre, GenresResponse } from "../../models/Genres";

export const getGenres = async (): Promise<Genre[]> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const data: GenresResponse = await response.json();
    return data.genres;
  } catch (error) {
    throw new Error("Failed to fetch genres");
  }
};
