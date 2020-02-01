export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average?: number;
  backdrop_path?: string;
  overview?: string;
}

export interface AppState {
  movies: Movie[];
  movie?: Movie;
  similarMovies?: Movie[];
  loading: boolean;
}

export enum ActionTypes {
  GET_MOVIES = 'GET_MOVIES',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAIL = 'GET_MOVIES_FAIL',
  GET_MOVIE = 'GET_MOVIE',
  GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS',
  GET_MOVIE_FAIL = 'GET_MOVIE_FAIL',
  GET_SIMILAR_MOVIES = 'GET_SIMILAR_MOVIES',
  GET_SIMILAR_MOVIES_SUCCESS = 'GET_SIMILAR_MOVIES_SUCCESS',
  GET_SIMILAR_MOVIES_FAIL = 'GET_SIMILAR_MOVIES_FAIL',
}
