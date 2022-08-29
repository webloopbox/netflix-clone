
export async function getTopMovies() {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    return error;
  }
}
