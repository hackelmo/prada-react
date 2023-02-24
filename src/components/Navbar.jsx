import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser, HiUser } from "react-icons/hi";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/">
        <img
          width={120}
          alt="프라다"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1280px-Prada-Logo.svg.png"
        />
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">AllProducts</Link>
        <Link to="/carts" className="text-2xl">
          <HiOutlineShoppingBag />
        </Link>
        <Link to="/products/new">NewProduct</Link>
        <button className="text-2xl">
          <HiOutlineUser />
        </button>
      </nav>
    </header>
  );
}
