import { MOVIE_LIST, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE } from "../types";

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: "Now playing"
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return { ...state, list: action.payload };
    case RESPONSE_PAGE:
      return { ...state, page: action.payload.page, totalPages: action.payload.totalPages };
    case LOAD_MORE_RESULTS:
      return { ...state, list: [...state.list, ...action.payload] };
    case MOVIE_TYPE:
      return { ...state, movieType: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
