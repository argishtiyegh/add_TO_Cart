import React from "react";
import { AddProductToCart } from "../actions/actionCreators";
import { setOrder } from "../helpers/helperFunctions";
import { connect } from "react-redux";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(singleProd) {
    return () => {
      if (this.props.cartItems.hasOwnProperty(singleProd.id)) {
        //disallow to click the add to cart button twice
        return;
      }
      let cardObj = {
        ...singleProd,
        order: setOrder(this.props.cartItems)
      };
      this.props.dispatch(AddProductToCart(cardObj, cardObj.id));
    };
  }
  render() {
    let { singleProd } = this.props;
    return (
      <div className="single-product">
        <h1>{singleProd.name}</h1>
        <p className="product-description">{singleProd.description}</p>
        <span className="price">{`Price: $${singleProd.price}`}</span>
        <button className="btn-large" onClick={this.addToCart(singleProd)}>
          {"Add To Cart"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems
  };
};
export default connect(mapStateToProps)(SingleProduct);
