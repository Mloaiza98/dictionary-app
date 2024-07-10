"use client";

import { useRef } from "react";
export default function Play({ src, theme }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button
        onClick={handlePlay}
        className={`w-12 h-12 rounded-full focus:outline-none  ${theme === "light" ? " bg-purple-300" : "bg-purple-900"} ${theme === "light" ? "text-purple-900" : "text-pruple-500"}`}
      >
        ▶
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
