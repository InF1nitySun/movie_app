import propTypes from "prop-types";
import './Movie.css'

function Movie(props) {
    const {title, medium_cover_image: poster, year, url, summary, genres} = props

    return <div className="movie">
        <img src={poster} alt={title}/>
        <div className="movie_column">
            <a className="movie_title" href={url}>{title}</a>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0, 128)}...</p>
            <ul className="movie_genres">
                {genres.map((genre, ind) => <li key={ind} className="genres_genre">{genre}</li>)}
            </ul>
        </div>
    </div>
}

Movie.propTypes = {
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired, //medium_cover_image
    url: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie