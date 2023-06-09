interface TopMoviesDetails {
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

interface TopMovieDetailsType {
  id: number;
  title: string;
  overview: string;
  poster: string;
  genres: CategoriesDataType;
  RankingNumber: JSX.Element;
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

export type CategoriesDataType = Array<{ id: number; name: "string" }>;

export interface TopMovieDataResponse {
  page: number;
  results: Array<TopMoviesDetails>;
  total_pages: number;
  total_results: number;
}

export interface MoviesInitState {
  topMovies: Array<TopMovieDetailsType>;
}
