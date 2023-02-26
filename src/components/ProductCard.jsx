import React from "react";
import { useNavigate } from "react-router-dom";

const formatComma = (number) => {
  //왜 상수지정을 해줘야 써지는지?
  const n = number;
  return n.toLocaleString();
};

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      className=" overflow-hidden cursor-pointer"
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
    >
      <img className="w-full" src={image} alt={id} />
      <div className="mt-2 text-sm flex flex-col gap-1">
        <h3 className="truncate font-semibold">{title}</h3>
        <p>{`₩ ${formatComma(price)}`}</p>
        <p className="mb-2 text-xs text-gray-600">{category}</p>
      </div>
    </li>
  );
}
