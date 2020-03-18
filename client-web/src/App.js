import React, { Component } from "react";
import "./App.css";
import NabBar from "./components/navbar";
import Cart from "./components/cart";
import Market from "./components/market";

class App extends Component {
  state = {
    marketItems: [],
    cartItems: []
  };
  render() {
    return (
      <React.Fragment>
        <NabBar totalPrice={this.totalPrice()} />
        <main className="container">
          <span>Panier</span>
          <hr style={{ height: "30px" }}></hr>
          <Cart
            items={this.state.cartItems}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          <hr style={{ height: "30px" }}></hr>
          <span>Produits</span>
          <hr style={{ height: "30px" }}></hr>
          <Market items={this.state.marketItems} onAdd={this.handleAdd} />
        </main>
      </React.Fragment>
    );
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ marketItems: data });
      })
      .catch(console.log);
  }
  handleAdd = item => {
    const newItems = [...this.state.cartItems];
    const index = newItems.findIndex(x => x.id === item.id);
    if (index > -1) {
      const newItem = newItems[index];
      newItems[index] = { ...newItem };
      newItems[index].quantity++;
    } else {
      item.quantity = 1;
      newItems.push(item);
    }

    this.setState({ cartItems: newItems });
  };
  handleDelete = itemId => {
    const newItems = this.state.cartItems.filter(x => x.id !== itemId);
    this.setState({ cartItems: newItems });
  };
  handleIncrement = item => {
    const newItems = [...this.state.cartItems];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].quantity++;
    this.setState({ cartItems: newItems });
  };
  handleDecrement = item => {
    const newItems = [...this.state.cartItems];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    if (newItems[index].quantity > 0) {
      newItems[index].quantity--;
      this.setState({ cartItems: newItems });
    }
  };
  handleReset = () => {
    const newItems = this.state.cartItems.map(x => {
      x.quantity = 0;
      return x;
    });
    this.setState({ cartItems: newItems });
  };
  totalPrice = () => {
    let totalPrice = 0;
    this.state.cartItems.forEach(item => {
      let quantity = item.quantity;
      if (item.discount > 1) {
        var discountQuantity =
          Math.floor(item.quantity / item.discount) * (item.discount - 1);
        var regularQuantity = item.quantity % item.discount;
        quantity = discountQuantity + regularQuantity;
      }
      totalPrice += item.price * quantity;
    });
    return totalPrice;
  };
}

export default App;
