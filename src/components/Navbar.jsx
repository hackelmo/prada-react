import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser, HiUser } from "react-icons/hi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

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
        {user && (
          <Link to="/carts" className="text-2xl">
            <HiOutlineShoppingBag />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text={<HiOutlineUser />} />}
        {user && <Button onClick={logout} text={<HiUser />} />}
      </nav>
    </header>
  );
}
