import Movie from './Movie.js';

export default function MovieForm({ 
  handleSubmit, 
  movieTitle,
  setMovieTitle, 
  movieYear,
  setMovieYear,
  movieDirector, 
  setMovieDirector, 
  movieColor, 
  setMovieColor,
}) {
  return (
    <div className="form-and-preview">
      <div className="movie-form">
        <form onSubmit={handleSubmit}>
          <label>
                title
            <input value={movieTitle} 
              onChange={(e) => setMovieTitle(e.target.value)}/>
          </label>
          <label>
            year
            <input value={movieYear}
              onChange={(e) => setMovieYear(e.target.value)}/>
          </label>
          <label>
            director
            <input value={movieDirector}
              onChange={(e) => setMovieDirector(e.target.value)}/>
          </label>
          <label>
      color
            <select value={movieColor} onChange={e => setMovieColor(e.target.value)}>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
            </select>
          </label>
          <button>add to watch list</button>
        </form>
      </div>    
    </div>
  );
}