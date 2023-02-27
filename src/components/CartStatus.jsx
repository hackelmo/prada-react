import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <HiOutlineShoppingBag />
      <p className="absolute text-xs font-bold -top-2 -right-1">
        {products && products.length}
      </p>
    </div>
  );
}
