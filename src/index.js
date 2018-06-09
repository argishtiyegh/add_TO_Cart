import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";
import ProductList from "./components/productList";
import Cart from "./components/cart";

const reducers = combineReducers({
  productReducer,
  cartReducer
});

const store = createStore(reducers);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ProductList />
          <Cart />
        </div>
      </Provider>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
