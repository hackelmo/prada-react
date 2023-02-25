import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        className="w-6 h-6 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
