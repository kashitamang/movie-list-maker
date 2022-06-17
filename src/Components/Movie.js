export default function Movie({ 
  handleDeleteMovie, 
  movieTitle, 
  movieDirector,
  movieYear,
  movieColor,

}) {
//   console.log(movie);

  return (
    <div className="movie-card" 
      onClick={() => handleDeleteMovie && handleDeleteMovie(movieTitle)} style={{ backgroundColor: movieColor }}>
      <h2>{movieTitle}</h2>
      <p>{movieYear}</p>
      <p>{movieDirector}</p>
    </div>
  );
}

///getting errors :D check in with TA 

// 