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
    <div className="movie-form">
      <h2>Create New Movie</h2>
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
            <option value="pink">red</option>
            <option value="skyblue">blue</option>
            <option value="chartreuse">green</option>
            <option value="goldenrod">yellow</option>
          </select>
        </label>
        <button>add to watch list</button>
      </form>
    </div>    
  );
}