
export type CategoriesDataType = Array<{ id: number, name: 'string' }>

type TopMoviesDetails = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type TopMovieDataType = {
    page: number,
    results: Array<TopMoviesDetails>,
    total_pages: number,
    total_results: number
}

type TopMovieDetailsType = {
    id: number,
    title: string,
    overview: string,
    poster: string,
    genres: CategoriesDataType,
    RankingNumber: JSX.Element
}

export type MoviesInitState = {
    topMovies: Array<TopMovieDetailsType>
}