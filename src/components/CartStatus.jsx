import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  return (
    <div className="relative">
      <HiOutlineShoppingBag />
      <p className="absolute text-xs font-bold -top-2 -right-1">
        {products && products.length}
      </p>
    </div>
  );
}
