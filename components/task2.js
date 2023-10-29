import Link from "next/link";
import React from "react";

const Task2 = () => {
  return (
    <div className=" flex flex-col space-y-8 justify-center md:my-20 items-center mx-8">
      <span className="text-center text-5xl text-cyan-500">Tasks</span>
      <div className="flex md:flex-row flex-col  space-x-4">
        <span className="text-white font-bold text-2xl md:text-3xl mb-4 text-center">
          Task 2 :
        </span>
        <span className="text-cyan-500 font-bold  text-2xl  md:text-3xl text-center">
        Meet and Greet with Seniors
        </span><br/>
        <span className="text-cyan-500 font-bold  text-2xl  md:text-3xl text-center">
        🤝🏻🙌🏻🤜🏻🤛🏻🤟🏻
        </span>
      </div>
      <span className=" text-xl md:text-2xl font-bold text-cyan-500 ">
        About the task :
      </span>
      <span className="text-center text-xl md:text-2xl text-white ">
      This task is designed to promote better interaction between juniors and seniors through games, interesting tasks and more. 🤩🥳💥💫✨
      </span>
      <span className="text-center text-xl font-semibold md:text-2xl text-cyan-400 ">
      Time ⌚ : 4.30pm onwards
      </span  >
      <span className="text-center text-xl font-semibold md:text-2xl text-cyan-400 ">
      Venue📍: Old Nehru Nagar Park ,Near Agrasen Chowk
      </span  >
      <span className="text-center text-xl font-semibold md:text-2xl text-cyan-400 ">
      Date 📅 :30th October
      </span  >

      
      <span className="text-cyan-500 text-xl md:text-2xl text-center">
      We hope to see you all there! 👋🏻👀🙌🏻

      </span>
      <span className="text-white text-xl md:text-2xl text-center">
        All the best & Stay Tuned...!!
      </span>
    </div>
  );
};

export default Task2;
