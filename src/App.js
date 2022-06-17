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
  const [allMovies, setAllMovies] = useState([
    {
      title: 'Titanic',
      director: 'James Cameron',
      year: '1997',
      color: 'goldenrod', 
    },
    {
      title: 'Nausicaa Valley of the Wind',
      director: 'Hayao Miyazaki',
      year: '1984',
      color: 'Chocolate', 
    },
    {
      title: 'Moonlight',
      director: 'Barry Jenkins',
      year: '2017',
      color: 'skyblue', 
    }
  ]);
  //filter state 
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [filterMovie, setFilterMovie] = useState('');
  //put use effect here
  useEffect(() => handleFilterMovies(filterMovie), [allMovies, filterMovie]);

  // console.table(movieTitle);

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
    setMovieTitle('');
    setMovieDirector('');
    setMovieYear('');
    setMovieColor('');
  }

  function handleDeleteMovie(title) {
    const movieIndex = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(movieIndex, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const searchMovies = allMovies.filter((movie) => movie.title.includes(search));

    setFilteredMovies(searchMovies);
  }

  return (
    <div className="App" style={{ backgroundColor: 'salmon', borderRadius: '10px' }}>
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
      <label>
        search:
        <input onChange={e => setFilterMovie(e.target.value)}/>
      </label>
      <Movie 
        movieTitle={movieTitle}
        movieYear={movieYear}
        movieDirector={movieDirector}
        movieColor={movieColor}
      />
      <MovieList
        filteredMovies={filteredMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
