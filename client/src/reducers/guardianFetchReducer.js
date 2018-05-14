import {
  FETCH_GUARDIAN,
  FETCH_PROCESSED_DATA,
  ARTICLE_TITLE,
  NAVBAR_TOGGLE
} from "../actions/types";

const initialState = {
  articles: [],
  processedData: {},
  title: "",
  toggle: {
    instruction: true,
    about: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GUARDIAN:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_PROCESSED_DATA:
      return {
        ...state,
        processedData: action.payload
      };
    case ARTICLE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case NAVBAR_TOGGLE:
      return {
        ...state,
        toggle: action.payload
      };
    default:
      return state;
  }
}
