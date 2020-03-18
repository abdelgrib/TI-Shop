import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Prix total{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalPrice}
        </span>{" "}
        €
      </a>
    </nav>
  );
};

export default NavBar;
