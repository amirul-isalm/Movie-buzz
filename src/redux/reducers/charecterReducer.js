import { ActionTypes } from "../contants/ActionTypes";
const intialState = {
  charecters: [],
};
const intialMovieState = {
 movies: [],
};

export const charectersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARECTER:
      
      return { ...state, charecters: payload };
    default:
      return state;
  }
};
export const movieDetailsReducer = (state = intialMovieState, { type, payload }) => {
  switch (type) {
    case ActionTypes.MOVIE_DETAILS:
      return { movies: payload };
    default:
      return state;
  }
};
export const pageNumberReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.PAGE_NUMBER:
     
      
      return { page: payload };
    default:
      return state;
  }
};

export const selectedCharectersReducer = (state = "",{ type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CHARECTER:
      return payload;
    case ActionTypes.REMOVE_SELECTED_CHARECTER:
      return {};
    default:
      return state;
  }
};
