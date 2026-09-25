"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-bold text-white tabular-nums">{count}</h1>
      <div className="flex gap-4">
        <button onClick={() => setCount(count - 1)} className="w-16 h-16 rounded-full bg-zinc-800 text-white text-2xl hover:bg-zinc-700">-</button>
        <button onClick={() => setCount(0)} className="px-4 h-16 rounded-full bg-amber-600 text-white hover:bg-amber-500">Reset</button>
        <button onClick={() => setCount(count + 1)} className="w-16 h-16 rounded-full bg-violet-600 text-white text-2xl hover:bg-violet-500">+</button>
      </div>
    </div>
  );
}