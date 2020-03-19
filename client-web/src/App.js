import React, { Component } from "react";
import "./App.css";
import NabBar from "./components/navbar";
import Cart from "./components/cart";
import Market from "./components/market";

class App extends Component {
  baseUrl = "http://localhost:5000/api/";
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
            onValidate={this.handleValidate}
            canValidate={this.canValidate}
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
    fetch(this.baseUrl + "products")
      .then(res => res.json())
      .then(data => {
        this.setState({ marketItems: data });
      })
      .catch(console.log);
  }
  handleValidate = () => {
    if (this.canValidate()) {
      fetch(this.baseUrl + "cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: this.state.cartItems
        })
      })
        .then(response => {
          console.log(response);
          this.setState({ cartItems: [] });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  canValidate = () => {
    return this.state.cartItems.filter(x => x.quantity > 0).length > 0;
  };
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
