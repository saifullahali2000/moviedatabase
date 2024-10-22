import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container">
      <img className="movie-card-image" alt={title} src={posterPath} />
      <div className="title-rating">
        <h1 className="movie-title">{title}</h1>
        <p className="movie-rating">Rating: {voteAverage}</p>
      </div>
      <button className="button-view" type="button">
        View Details
      </button>
    </li>
  )
}

export default MovieCard
