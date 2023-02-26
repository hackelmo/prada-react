import { useQuery } from "@tanstack/react-query";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery([], () => getCart(uid));
  return (
    <div className="relative">
      <HiOutlineShoppingBag />
      <p className="absolute text-xs font-bold -top-2 -right-1">
        {products.length}
      </p>
    </div>
  );
}
