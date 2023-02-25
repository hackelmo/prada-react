import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiLogout,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi";
import { login, logout, onUserStateChange, testa } from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-gray-300 p-3">
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
        {user && <User user={user} />}
        {!user && (
          <button className="text-2xl" onClick={login}>
            <HiOutlineUser />
          </button>
        )}
        {user && (
          <button className="text-2xl" onClick={logout}>
            <HiUser />
          </button>
        )}
      </nav>
    </header>
  );
}
