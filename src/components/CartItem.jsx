import React from "react";
import { addOrUpdateCart, removeCart } from "../api/firebase";

export default function CartItem({
  product,
  product: { image, title, id, quantity, price, option },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeCart(uid, id);

  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <p onClick={handleMinus}>-</p>
          <span>{quantity}</span>
          <p onClick={handlePlus}>+</p>
          <p onClick={handleDelete}> 휴지통</p>
        </div>
      </div>
    </li>
  );
}
