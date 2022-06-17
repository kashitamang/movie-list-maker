import Movie from './Movie.js';

export default function MovieList({ handleDeleteMovie, filteredMovies, movie }) {
  return (
    <div className='movie-list'>
      {
        filteredMovies.map((movie, i) => (
          <Movie
            handleDeleteMovie={handleDeleteMovie}
            key={movie.title + i}
            movie={movie}/>
        ))
      }
    </div>
  );
}