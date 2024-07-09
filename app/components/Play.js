"use client";

import { useRef } from "react";
export default function Play({ src }) {
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
        className="w-12 h-12 rounded-full bg-blue-500 focus:outline-none text-white "
      >
        ▶
      </button>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
