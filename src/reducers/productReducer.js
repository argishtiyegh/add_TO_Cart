import {
  ADD_PRODUCTS_LISTS,
  PRODUCTS_LIST_LOADING_START,
  PRODUCTS_LIST_LOADING_FAILED,
  PRODUCTS_LIST_LOADING_SUCCESS
} from "../actions/actionCreators";
import { setLoadingStates } from "../helpers/helperFunctions";

export const productReducer = (state = { loaded: {} }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_LISTS:
      return {
        ...state,
        products: action.payload
      };
    case PRODUCTS_LIST_LOADING_START:
      return {
        ...state,
        loaded: { ...setLoadingStates({}, "loading") }
      };
    case PRODUCTS_LIST_LOADING_FAILED:
      return {
        ...state,
        loaded: { ...setLoadingStates({}, "failed") }
      };
    case PRODUCTS_LIST_LOADING_SUCCESS:
      return {
        ...state,
        loaded: { ...setLoadingStates({}, "loaded") }
      };
    default:
      return state;
  }
};
