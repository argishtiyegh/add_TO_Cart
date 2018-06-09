export const ADD_PRODUCTS_LISTS = "ADD_PRODUCTS_LISTS";
export const PRODUCTS_LIST_LOADING_START = "PRODUCTS_LIST_LOADING_START";
export const PRODUCTS_LIST_LOADING_FAILED = "PRODUCTS_LIST_LOADING_FAILED";
export const PRODUCTS_LIST_LOADING_SUCCESS = "PRODUCTS_LIST_LOADING_SUCCESS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const AddProducts = payload => {
  return {
    type: ADD_PRODUCTS_LISTS,
    payload
  };
};

export const AddProductToCart = (payload, key) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload,
    key
  };
};

export const DeleteProductFromCart = key => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    key
  };
};

export const LoadingState = type => {
  return {
    type
  };
};
