import React, { Component } from "react";
import MarketItem from "./marketItem";

class Market extends Component {
  render() {
    return (
      <div className="row">
        {this.props.items.map(item => (
          <MarketItem key={item.id} item={item} onAdd={this.props.onAdd} />
        ))}
      </div>
    );
  }
}

export default Market;
