import React, { Component } from "react";
import CartItem from "./cartItem";

class Cart extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Réinitialiser
        </button>
        <button
          onClick={this.props.onValidate}
          className="btn btn-primary btn-sm m-2"
          disabled={!this.props.canValidate()}
        >
          Valider
        </button>
        {this.props.items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
