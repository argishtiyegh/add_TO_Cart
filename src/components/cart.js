import React from "react";
import { connect } from "react-redux";
import { DeleteProductFromCart } from "../actions/actionCreators";

class Cart extends React.Component {
  deleteProd(prod) {
    return () => {
      this.lastClicked = true;
      this.props.dispatch(DeleteProductFromCart(prod.id));
      delete prod["order"];
    };
  }
  getSumPrice(products) {
    return Object.values(products).reduce(
      (collected, current) => (collected += current.price),
      0
    );
  }
  render() {
    let { cartItems } = this.props;
    return (
      <div className="cart-wrapper">
        <h2>{"CART"}</h2>
        {Object.values(cartItems)
          .sort((a, b) => a.order - b.order)
          .map((prod, key) => (
            <div className="product-box" key={key}>
              <span>{prod.name}</span>
              <span>{`Price: $${prod.price}`}</span>
              <span className="delete-product" onClick={this.deleteProd(prod)}>
                {"Delete"}
              </span>
            </div>
          ))}
        {<span>{`Sum: $${this.getSumPrice(cartItems)}`}</span>}
        {<span>{`Number of Products: ${Object.keys(cartItems).length}`}</span>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems
  };
};

export default connect(mapStateToProps)(Cart);
