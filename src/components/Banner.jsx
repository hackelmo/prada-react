import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-center bg-banner opacity-80" />
      <div className="absolute top-32 w-full text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-2xl font-bold">프라다 2023 가을/겨울</h2>
        <p className="text-sm font-medium">Coming soon</p>
      </div>
    </section>
  );
}
