import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { removeMovieFromFavorites } from "../../redux/action";
import { getMoviesInList } from "../../redux/action";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    title: "",
    btnActive: false,
    listId: "",
    isLoading: false,
  };

  onInputEnter = (e) => {
    this.setState({ title: e.target.value });
  };

  postMovies = () => {
    if(this.state.title.trim()!=''){
    this.setState({ isLoading: true, btnActive: true });
    fetch("https://acb-api.algoritmika.org/api/movies/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        movies: this.props.favoriteMovies.map((item) => {
          return item.id;
        }),
      }),
    })
      .then((res) => res.json())
      .then((data) => this.setState({ listId: data.id, isLoading: false }));}
  };

  render() {
    return (
      <div className="favorites">
        {this.state.listId !== "" &&
          this.props.getMoviesInList(this.state.listId)}
        <input
          onChange={this.onInputEnter}
          value={this.state.title}
          className="favorites__name"
          placeholder="Добавить в список"
        />
        <ul className="favorites__list">
          {this.props.favoriteMovies.map((item) => {
            return (
              <li className="list__item" key={item.id}>
                {item.title} ({item.year}){" "}
                {!this.state.btnActive && (
                  <button
                    onClick={() => this.props.removeMovieFromFavorites(item.id)}
                    className="close__btn"
                  >
                    X
                  </button>
                )}
              </li>
            );
          })}
        </ul>
        {this.state.listId === "" ? (
          <button
            disabled={
              this.state.title === "" ||
              this.props.favoriteMovies.length === 0 ||
              this.state.isLoading
                ? true
                : false
            }
            onClick={() => this.postMovies()}
            type="button"
            className="favorites__save"
          >
            {this.state.isLoading ? "Загрузка..." : "Сохранить список"}
          </button>
        ) : (
          <Link to={`/list/${this.state.listId}`}>Перейти к списку</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.favoriteMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromFavorites: (Id) => {
      dispatch(removeMovieFromFavorites(Id));
    },
    getMoviesInList: (Id) => {
      dispatch(getMoviesInList(Id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
