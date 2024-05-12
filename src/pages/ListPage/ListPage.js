import React, { Component } from 'react';
import './ListPage.css';
import {connect} from "react-redux";

class ListPage extends Component {
    state = {
        movies: [
            { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
        ]
     }
 
    render() { 

        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.moviesList.title}</h1>
                <ul>
                    {this.props.moviesList.movies.map((id) => {
                        return (
                            <li key={id} className="movie__item">
                                <a rel="noreferrer" href={`https://www.imdb.com/title/${id}/`} target="_blank">
                                    {this.props.favoriteMovies.map((movie) => {
                                        return id === movie.id ? `${movie.title} (${movie.year})` : false
                                    })}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moviesList: state.moviesList,
        favoriteMovies: state.favoriteMovies
    }
}
 
export default connect(mapStateToProps)(ListPage);