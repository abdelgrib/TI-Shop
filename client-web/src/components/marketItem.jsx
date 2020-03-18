import React, { Component } from "react";

class MarketItem extends Component {
  render() {
    return (
      <div className="card w-30" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://picsum.photos/200"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <h5 className="card-title">{this.props.item.price}€</h5>
          {this.discount()}
          <button
            onClick={() => this.props.onAdd(this.props.item)}
            className="btn btn-primary btn-sm m-2"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  discount() {
    if (this.props.item.discount > 1)
      return (
        <h5 className="card-title">
          {this.props.item.discount} achetés au prix de{" "}
          {this.props.item.discount - 1}
        </h5>
      );
    return null;
  }
}

export default MarketItem;
