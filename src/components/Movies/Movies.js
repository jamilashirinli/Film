import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {

 state = { 
        movies: [
            {
               Poster: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
               Title: "Harry Potter and the Sorcerer's Stone",
               Type: "movie",
               Year: "2001",
               imdbID: "tt0241527",
            },
            
            {
                imdbID: 'tt0068646',
                Title: "The Godfather",
                Year: 1972,
                Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

            },
            {
                imdbID: 'tt3896198',
                Title: "Guardians of the Galaxy Vol. 2",
                Year: 2017,
                Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

            }
            
        ]
    }
    componentDidUpdate =(prevProps)=>{
     
           if( prevProps.movies!=this.props.movies){
            this.setState({
                movies: this.props.movies
            })
           }
    }
    render() { 
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />

                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (s) => {
    return {
        movies: s.movies
    }
}
 
export default connect(mapStateToProps)(Movies);