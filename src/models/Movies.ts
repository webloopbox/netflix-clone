interface TopMoviesDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TopMovieAttached {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  genres: number[];
}

export interface TmdbMovie {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TopMovieDataResponse {
  page: number;
  results: Array<TopMoviesDetailsResponse>;
  total_pages: number;
  total_results: number;
}

export interface MoviesInitState {
  topMovies: Array<TopMovieAttached>;
}
