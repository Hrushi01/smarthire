import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(20 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(20 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative h-screen flex justify-center items-center ">
      <div className="absolute top-0 right-0 border-2 border-black p-5">
        <p className="text-3xl font-bold">{formatTime(time)}</p>
      </div>
      <div className=" flex flex-col items-center w-4/5">
        <div className="w-full mt-8 border-2 border-black p-5">
          <p className="text-2xl mb-4">Interview Question:</p>
          <p className="text-lg mb-4">Sample question goes here?</p>
        </div>

        <div className="w-full mt-8 flex">
          <div className="w-full mt-8 flex">
            {!isActive && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleStart}
              >
                Start
              </button>
            )}
            {isActive && (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handleStop}
              >
                Stop
              </button>
            )}
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <div className="w-1/2 flex ">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
              Next Question
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => alert("RESULT")}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
