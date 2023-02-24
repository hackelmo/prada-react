import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>Prada</h1>
      </Link>
      <nav>
        <Link to="/products">AllProducts</Link>
        <Link to="/carts">MyCart</Link>
        <Link to="/products/new">NewProduct</Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
