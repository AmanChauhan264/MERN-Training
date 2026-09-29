"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center w-96">
        
        <h1 className="text-3xl font-bold mb-8">
          Counter Application
        </h1>

        <div className="text-6xl font-bold mb-8">
          {count}  
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            +
          </button>
        </div>

      </div>
    </main>
  );
}