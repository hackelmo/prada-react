import React from "react";

const formatComma = (number) => {
  //왜 상수지정을 해줘야 써지는지?
  const n = number;
  return n.toLocaleString();
};

export default function PriceCard({ price, text }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center md:text-lg">
      <p>{text}</p>
      <p className="font-bold text-lg md:text-xl">₩ {formatComma(price)}</p>
    </div>
  );
}
