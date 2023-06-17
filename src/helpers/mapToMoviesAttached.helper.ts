import { TmdbMovie, TopMovieAttached } from "../models/Movies";

export const mapToMoviesAttached = (
  movies: TmdbMovie[]
): TopMovieAttached[] => {
  return movies.map((movie: TmdbMovie) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
      backdrop: "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path,
      genres: movie.genre_ids,
    };
  });
};
