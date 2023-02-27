import React from "react";
import { addOrUpdateCart, removeCart } from "../api/firebase";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import useCart from "../hooks/useCart";

const ICON_CLASS = "transition-all cursor-pointer hover:scale-105";
const formatComma = (number) => {
  const n = number;
  return n.toLocaleString();
};

export default function CartItem({
  product,
  product: { image, title, id, quantity, price, option },
  uid,
}) {
  const { addCart, deleteCart } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    const updatedProduct = { ...product, quantity: quantity - 1 };
    addCart.mutate({ uid, product: updatedProduct });
  };
  const handlePlus = () => {
    const updatedProduct = { ...product, quantity: quantity + 1 };
    addCart.mutate({ uid, product: updatedProduct });
  };

  const handleDelete = () => deleteCart.mutate({ uid, id });

  return (
    <li className="flex justify-between items-center my-2">
      <img src={image} alt={title} className="w-24 md:w-48" />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="font-bold text-xl">{option}</p>
          <p>₩ {formatComma(price)}</p>
        </div>
        <div className="text-lg flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <BiTrash className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
