import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="text-sm text-white bg-black font-semibold p-2 w-52 hover:brightness-95 mx-auto mt-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
