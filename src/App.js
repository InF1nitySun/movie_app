import React from "react";
import axios from "axios";
import {RotatingLines} from 'react-loader-spinner'

import Movies from "./components/Movies";
import './App.css'

const URL_MOVIES = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

class App extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios(URL_MOVIES)

        return movies
    }

    componentDidMount() {
        this.getMovies().then(movies => {
            this.setState({movies, isLoading: false})
        })
    }


    render() {
        const {isLoading, movies} = this.state

        return (
            <section className="container">
                {isLoading
                    ? (<div className="loader">
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div>)
                    : <Movies movies={movies}/>}
            </section>
        )
    }
}

export default App;