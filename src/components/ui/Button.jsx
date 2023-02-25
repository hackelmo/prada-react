import React from "react";
import { HiEmojiHappy } from "react-icons/hi";

export default function Button({ text }) {
  return (
    <button className="text-sm text-white bg-black font-semibold p-2 w-52 hover:brightness-95 mx-auto mt-2">
      {text}
    </button>
  );
}

// font-size : 12px
// font -weight: 600
// text-align: center
// width:148;
// height:15px
