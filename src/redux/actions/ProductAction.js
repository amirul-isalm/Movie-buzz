import { ActionTypes } from "../contants/ActionTypes";

export const setCharecter = (charecters) => {
  return {
    type: ActionTypes.SET_CHARECTER,
    payload: charecters,
  };
};
export const movieDetails = (movies) => {
    return {
      type: ActionTypes.MOVIE_DETAILS,
      payload: movies,
    };
};
export const pageNumber = (page) => {
  return {
      
      type: ActionTypes.PAGE_NUMBER,
      payload: page,
    };
};

export const selectedCharecter = (charecters) => {
  return {
    type: ActionTypes.SELECTED_CHARECTER,
    payload: charecters,
  };
};
export const removeSelectedCharecter = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CHARECTER,
  };
};
