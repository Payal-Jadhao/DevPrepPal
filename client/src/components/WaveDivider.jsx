import React from "react";
export default function WaveDivider({ position }) {
  return position === "top" ? (
    <div className="absolute top-0 left-0 w-full -z-10">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <path fill="url(#topwave)" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        <defs>
          <linearGradient id="topwave" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(180)">
            <stop stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  ) : (
    <div className="absolute bottom-0 left-0 w-full -z-10">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <path fill="url(#bottomwave)" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        <defs>
          <linearGradient id="bottomwave" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 