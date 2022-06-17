export default function Movie({ 
  movieTitle, 
  movieYear, 
  movieDirector, 
  movieColor,
//   handleDeleteMovie, 
}) {

  return (
    <div className="movie-card" style={{ background: movieColor }}>
      <h2>{movieTitle}</h2>
      <p>{movieYear}</p>
      <p>{movieDirector}</p>
    </div>
  );
}