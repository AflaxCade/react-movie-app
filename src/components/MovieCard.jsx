import React from 'react'

const MovieCard = ({movie}) => {

    const handleFavoriteClick = () => {
        alert(`Added ${movie.title} to favorites`);

    }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-button" onClick={handleFavoriteClick}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard