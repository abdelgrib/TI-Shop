import React, { Component } from "react";

class MarketItem extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://picsum.photos/200"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
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
}

export default MarketItem;
