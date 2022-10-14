import Movie from "./Movie";
import React from "react";
import './Movies.css'

function Movies({movies}) {

    const RenderMovies = () => {
        return movies.map(movie => <Movie key={movie.id}{...movie}/>)
    }

    return (
        <div className="movies">
            <RenderMovies/>
        </div>
    )
}

export default Movies