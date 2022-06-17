import { useState, useEffect } from 'react';
import './App.css';

//import movie, movieform, movielist
import Movie from './Components/Movie.js';
import MovieForm from './Components/MovieForm.js';
import MovieList from './Components/MovieList.js';


function App() {
  //track state
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieColor, setMovieColor] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  //filter state 
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [filterMovie, setFilterMovie] = useState('');
  //put use effect here


  console.table(allMovies);

  //functions
  function handleSubmit(e) {
    e.preventDefault();

    const movie = {
      title: movieTitle,
      year: movieYear, 
      director: movieDirector,
      color: movieColor,
    };

    setAllMovies([...allMovies, movie]);
  }

  return (
    <div className="App">
      <MovieForm
        handleSubmit={handleSubmit} 
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle} 
        movieYear={movieYear}
        setMovieYear={setMovieYear}
        movieDirector={movieDirector}
        setMovieDirector={setMovieDirector}
        movieColor={movieColor}
        setMovieColor={setMovieColor}
      />
      <Movie 
        movieTitle={movieTitle}
        movieYear={movieYear}
        movieDirector={movieDirector}
        movieColor={movieColor}
      />
      <MovieList
        filteredMovies={allMovies}
        // handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
