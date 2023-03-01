import React from "react";

export default function FooterOutline({ children }) {
  return (
    <div className="p-3 md:px-4 lg:px-6 xl:px-8 w-full border-t border-gray-300">
      {children}
    </div>
  );
}
