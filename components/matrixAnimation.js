// components/MatrixAnimation.js
import React from 'react';

const MatrixAnimation = () => {
    const characters = ['0', '1'];
    const matrix = [];
  
    // Generate initial matrix
    for (let i = 0; i < 50; i++) {
      matrix.push({
        char: characters[Math.floor(Math.random() * characters.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        speed: `${Math.random() *10 + 1}s`,
      });
    }
  
    return (
      <div className=" -z-10  fixed top-0 left-0 h-screen w-full pointer-events-none bg-black text-blue-400 font-mono text-xs md:text-xl ">
          <div className="h-full w-full bg-gradient-to-b from-black to-slate-800"></div>
        {matrix.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              animation: `fall ${item.speed} linear infinite`,
            }}
          >
            {item.char}
          </div>
        ))}
        <style jsx>
            {`
            @keyframes fall {
                from {
                  transform: translateY(-100%);
                  opacity: 1;
                }
                to {
                  transform: translateY(100vh);
                  opacity: 0.5;
                }
              }
              
            `}
        </style>
      </div>
    );
  };
  

export default MatrixAnimation;
