import React from "react";

export default function NavOutline({ children }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 p-3 mb-2 md:px-4 lg:px-6 xl:px-8 fixed z-10 w-full bg-white">
      {children}
    </header>
  );
}
