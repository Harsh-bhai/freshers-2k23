import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const endTime = new Date(targetDate).getTime();
    const timeLeft = endTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className=" text-cyan-500 border-0 md:border-violet-300  md:border-2 p-10 rounded-lg shadow-lg w-full hover:scale-105 transition-transform delay-100">
    <div className="text-2xl font-semibold mb-4 text-center">Countdown Timer</div>
    <div className="grid grid-cols-4 md:gap-16 gap-4 md:text-4xl text-2xl text-center">
      <div className="border-2 flex  flex-col justify-center items-center border-cyan-500 p-4 md:p-8 rounded-lg">
        <div className="font-semibold" >{timeRemaining.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="border-2 flex  flex-col justify-center items-center border-cyan-500 p-4 md:p-8 rounded-lg">
        <div className="font-semibold" >{timeRemaining.hours}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="border-2 flex  flex-col justify-center items-center border-cyan-500 p-4 md:p-8 rounded-lg">
        <div className="font-semibold" >{timeRemaining.minutes}</div>
        <div className="text-xs">Mins</div>
      </div>
      <div className="border-2 flex  flex-col justify-center items-center border-cyan-500 p-4 md:p-8 rounded-lg">
        <div className="font-semibold" >{timeRemaining.seconds}</div>
        <div className="text-xs">Sec</div>
      </div>
    </div>
  </div>
  );
};

export default CountdownTimer;
