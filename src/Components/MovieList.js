import Movie from './Movie.js';

export default function MovieList({ handleDeleteMovie, filteredMovies, movie }) {
  return (
    <div className='movie-list'>
      {
        filteredMovies.map((movie, i) => (
          <div
            handleDeleteMovie={handleDeleteMovie}
            key={movie.title + i}
            movie={movie}
            className="movie-card"
            style={{ background: movie.color }}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.director}</p>
          </div>
        ))
      }
    </div>
  );
}