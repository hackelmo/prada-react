import React from "react";

export default function Footer() {
  return (
    <>
      <div className="text-xs flex justify-between items-center border-b border-gray-200 mb-3 h-12 w-11/12 mx-auto">
        <h3 className="font-bold">도와드릴까요?</h3>
        <button className="font-thin text-lg">+</button>
      </div>
      <div className="text-xs flex justify-between items-center border-b border-gray-200 mb-3 h-12 w-11/12 mx-auto">
        <h3 className="font-bold">회사</h3>
        <button className="font-thin text-lg">+</button>
      </div>
      <div className="text-xs flex justify-between items-center border-b border-gray-200 mb-3 h-12 w-11/12 mx-auto">
        <h3 className="font-bold">법정 고지 및 이용약관</h3>
        <button className="font-thin text-lg">+</button>
      </div>
      <div className="text-xs flex justify-between items-center border-b border-gray-200 mb-3 h-12 w-11/12 mx-auto">
        <h3 className="font-bold"> Shipping to Korea, Republic Of/Korean </h3>
        <button className="font-thin text-lg">+</button>
      </div>
    </>
  );
}
