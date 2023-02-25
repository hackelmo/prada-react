import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className=" overflow-hidden cursor-pointer">
      <img className="w-full" src={image} alt={id} />
      <div className="mt-2 text-sm flex flex-col gap-1">
        <h3 className="truncate font-semibold">{title}</h3>
        <p>{`₩${price}`}</p>
        <p className="mb-2 text-xs text-gray-600">{category}</p>
      </div>
    </li>
  );
}
