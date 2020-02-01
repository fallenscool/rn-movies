import {ActionTypes} from '../types';
import {API_KEY, API_LANG} from '../axios/params';

export const getAllMovies = () => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: {
      request: {
        url: `/discover/movie?api_key=${API_KEY}&language=${API_LANG}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      },
    },
  };
};

export const getMovieById = (id: string) => {
  return {
    type: ActionTypes.GET_MOVIE,
    payload: {
      request: {
        url: `/movie/${id}?api_key=${API_KEY}&language=${API_KEY}`,
      },
    },
  };
};

export const getSimilarMoviesById = (id: string) => {
  return {
    type: ActionTypes.GET_SIMILAR_MOVIES,
    payload: {
      request: {
        url: `/movie/${id}/similar?api_key=${API_KEY}&language=${API_LANG}&page=1`,
      },
    },
  };
};
