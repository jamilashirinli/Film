const initialState = {
  movies: [],
  favoriteMovies: [],
  moviesList: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.data };

    case "ADD_MOVIE_TO_FAVOURITES":
      const favoriteFilms = [...state.favoriteMovies];
      let isSame = favoriteFilms.some((el) => {
        return el.id === action.payload.Id;
      });

      if (!isSame) {
        favoriteFilms.push({
          id: action.payload.Id,
          title: action.payload.Title,
          year: action.payload.Year,
        });
      }
      return { ...state, favoriteMovies: favoriteFilms };

    case "REMOVE_MOVIE_FROM_FAVORITES":
      const tempMovies = [...state.favoriteMovies];

      let elIndex = -1;
      tempMovies.find((item, index) => {
        if (item.id === action.payload.Id) {
          elIndex = index;
          return elIndex;
        }

        return false;
      });
      tempMovies.splice(elIndex, 1);

      return { ...state, favoriteMovies: tempMovies };

    case "GET_MOVIES_IN_LIST":
      console.log(state.moviesList)
      return { ...state, moviesList: action.data };

    default:
      return state;
  }
}

export default reducer;
