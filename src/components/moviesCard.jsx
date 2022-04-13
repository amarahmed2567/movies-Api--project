import React from 'react'
import './moviesCardes.css'
function MoviesCard({movies}) {
    return (
        <div className="movie" key={movies.imdbID}>

            <div className="img">
            <img src={movies.Poster} alt={movies.Title}/>
            </div>

            <h3>{movies.Title}</h3>
        <div className='inf-text'>
        <span> {movies.Type}</span>

        <p>{movies.Year}</p>
        </div>
        </div>
    )
}

export default MoviesCard