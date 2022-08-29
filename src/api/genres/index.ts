export async function getGenres() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    const data = await response.json()
    return (data as any).genres
  } catch (error) {
    return error;
  }
}
