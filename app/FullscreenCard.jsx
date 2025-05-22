'use client'
import React, { useRef, useState, useEffect } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

const FullscreenCard = ({ title, children }) => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (containerRef.current) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#232f41] rounded-lg shadow-sm p-4 border border-[#222c38] flex flex-col items-center relative"
    >
      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 text-black bg-white/40 p-2 rounded-full z-10 hover:bg-white/60 transition"
      >
        {isFullscreen ? <FiX size={20} /> : <FiMaximize2 size={20} />}
      </button>

      <div className="w-full aspect-video relative">
        <div className="w-full h-14 bg-black absolute top-0"></div>
        <div className="w-full h-14 bg-black absolute bottom-0"></div>
        {children}
      </div>

      <h3 className="text-lg font-semibold text-[#e5e7eb] mt-4">{title}</h3>
    </div>
  );
};

export default FullscreenCard;
