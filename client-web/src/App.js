import React, { Component } from "react";
import "./App.css";
import NabBar from "./components/navbar";
import Cart from "./components/cart";

class App extends Component {
  state = {
    items: [
      { id: 1, quantity: 4 },
      { id: 2, quantity: 0 },
      { id: 3, quantity: 0 },
      { id: 4, quantity: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NabBar
          totalQuantity={this.state.items.filter(x => x.quantity > 0).length}
        />
        <main className="container">
          <Cart
            items={this.state.items}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
  handleDelete = itemId => {
    const newItems = this.state.items.filter(x => x.id !== itemId);
    this.setState({ items: newItems });
  };
  handleIncrement = item => {
    const newItems = [...this.state.items];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].quantity++;
    this.setState({ items: newItems });
  };
  handleReset = () => {
    const newItems = this.state.items.map(x => {
      x.quantity = 0;
      return x;
    });
    this.setState({ items: newItems });
  };
}

export default App;
