import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART
} from "../actions/actionCreators";

export const cartReducer = (state = { cartItems: {} }, action) => {
  let ret = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      ret.cartItems[action.key] = action.payload;
      return ret;
    case DELETE_PRODUCT_FROM_CART:
      delete ret.cartItems[action.key];
      return ret;
    default:
      return ret;
  }
};
