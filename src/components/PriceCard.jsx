import React from "react";

export default function PriceCard({ price, text }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center md:text-lg">
      <p>{text}</p>
      <p className="font-bold text-lg md:text-xl">₩{price}</p>
    </div>
  );
}
