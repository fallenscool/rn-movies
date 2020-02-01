import {ActionTypes, AppState} from '../types';

const initialState: AppState = {
  movies: [],
  // @ts-ignore
  movie: {},
  similarMovies: [],
  loading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIES:
      return {...state, loading: true};
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {...state, loading: false, movies: action.payload.data.results};
    case ActionTypes.GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching movies',
      };
    case ActionTypes.GET_MOVIE:
      return {...state, loading: true};
    case ActionTypes.GET_MOVIE_SUCCESS:
      return {...state, movie: action.payload.data};
    case ActionTypes.GET_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching movie by id',
      };
    case ActionTypes.GET_SIMILAR_MOVIES:
      return {...state};
    case ActionTypes.GET_SIMILAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        similarMovies: action.payload.data.results,
      };
    case ActionTypes.GET_SIMILAR_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching movie by id',
      };
    default:
      return state;
  }
};
export default rootReducer;
