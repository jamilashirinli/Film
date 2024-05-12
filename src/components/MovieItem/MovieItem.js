import React, { Component } from "react";
import "./MovieItem.css";
import { connect } from "react-redux";
import { addMovieToFavorites } from "../../redux/action";

class MovieItem extends Component {
  render() {
    const { Title, Year, Poster, imdbID, addMovieToFavorites } = this.props;
    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          
          <button
            onClick={() => addMovieToFavorites(imdbID, Title, Year)}
            type="button"
            className="movie-item__add-button"
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieToFavorites: (id, title, year) => {
      dispatch(addMovieToFavorites(id, title, year));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(MovieItem);
