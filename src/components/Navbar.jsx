import React from "react";
import CartStatus from "./CartStatus";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import User from "./User";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex items-center justify-between border-b border-gray-300 p-3 mb-2">
      <Link to="/">
        <img
          width={120}
          alt="프라다"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/1280px-Prada-Logo.svg.png"
        />
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products" className="text-xl">
          <MdOutlineWorkOutline />
        </Link>
        {user && (
          <Link to="/carts" className="text-xl">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}
        {/* {user && <User user={user} />} */}
        {!user && (
          <button className="text-xl" onClick={login}>
            <HiOutlineUser />
          </button>
        )}
        {user && (
          <button className="text-xl" onClick={logout}>
            <MdLogout />
          </button>
        )}
      </nav>
    </header>
  );
}
