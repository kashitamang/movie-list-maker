import Movie from './Movie.js';

export default function MovieList({ handleDeleteMovie, filteredMovies }) {
  console.table(filteredMovies);
  return (
    <div className='movie-list'>
      {
        filteredMovies.map((movie, i) => (
          <Movie
            handleDeleteMovie={handleDeleteMovie}
            key={movie.title + i}     
            movieTitle={movie.title}
            movieYear={movie.year}
            movieDirector={movie.director}
            movieColor={movie.color}
            className="movie-card"/>
        ))
      }
    </div>
  );
}