const movieList = ['movie1', 'movie12', 'movie3'];

export default {
  fetchMovies() {
    return [...movieList].sort()
  },
  fetchMovieById(id) {
    return movieList[id]
  }
}