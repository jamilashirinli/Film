export const findMovies = (name) => {
  return (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${name}&apikey=91b17070`
      );
      const data = response.json();
      return data;
    };
    getData().then((data) =>
      dispatch({ type: "GET_MOVIES", data: data.Search })
    );
  };
};

export const addMovieToFavorites = (Id, Title, Year) => {
  return {
    type: "ADD_MOVIE_TO_FAVOURITES",
    payload: {
      Id,
      Title,
      Year,
    },
  };
};

export const removeMovieFromFavorites = (Id) => {
  return {
    type: "REMOVE_MOVIE_FROM_FAVORITES",
    payload: {
      Id
    }
  }
}

export const getMoviesInList = (id) => {
  return (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        `https://acb-api.algoritmika.org/api/movies/list/${id}`
      );
      const data = response.json();
      return data;
    };
    getData().then((data) =>
      dispatch({ type: "GET_MOVIES_IN_LIST", data: data })
    );
  };
};
