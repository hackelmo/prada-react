import React, { useEffect, useState } from "react";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";

export default function MyCart() {
  const { uid } = useAuthContext();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getCart(uid).then(setItems);
  }, [uid]);
  return (
    <ul>
      {items &&
        items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ul>
  );
}
