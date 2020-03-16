import React, { Component } from "react";
import Item from "./item";

class Cart extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.items.map(item => (
          <Item
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
