import React from "react";
import SingleProduct from "./singleProduct";
import { ProductsList } from "../helpers/staticShopData";
import { connect } from "react-redux";
import {
  LoadingState,
  AddProducts,
  PRODUCTS_LIST_LOADING_START,
  PRODUCTS_LIST_LOADING_FAILED,
  PRODUCTS_LIST_LOADING_SUCCESS
} from "../actions/actionCreators";

class ProductList extends React.Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      this.props.dispatch(LoadingState(PRODUCTS_LIST_LOADING_START));
      if (ProductsList) {
        resolve(ProductsList);
      } else {
        reject();
        this.props.dispatch(LoadingState(PRODUCTS_LIST_LOADING_FAILED));
      }
    }).then(data => {
      this.props.dispatch(AddProducts(data));
      this.props.dispatch(LoadingState(PRODUCTS_LIST_LOADING_SUCCESS));
    });
  }
  render() {
    let { loadingState: { loaded }, products } = this.props;
    return loaded
      ? products.map((singleProd, key) => {
          return <SingleProduct singleProd={singleProd} key={key} />;
        })
      : "Loading...";
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    loadingState: state.productReducer.loaded
  };
};
export default connect(mapStateToProps)(ProductList);
