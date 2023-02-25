import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button className="text-2xl" onClick={onClick}>
      {text}
    </button>
  );
}
