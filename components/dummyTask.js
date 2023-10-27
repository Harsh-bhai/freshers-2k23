import Link from "next/link";
import React from "react";

const DummyTask = () => {
  return (
    <div className=" flex flex-col space-y-8 justify-center md:my-20 items-center mx-8">
      <span className="text-center text-5xl text-cyan-500">Tasks</span>
      <div className="flex md:flex-row flex-col  space-x-4">
        <span className="text-white font-bold text-3xl mb-4 text-center">
          Task 1 :
        </span>
        <span className="text-cyan-500 font-bold  text-3xl text-center">
          Selfie with Seniors 📷
        </span>
      </div>
      <span className="text-center text-2xl text-white ">
        Heyy everyone ✨, Now we are beginning the freshers week from 28.10.23
      </span>
      <span className=" text-2xl font-bold text-cyan-500 ">
        About the task :
      </span>
      <span className="text-center text-2xl text-white ">
        You need to take selfie with seniors individually,the person with max
        selfie will be considered as winner
      </span>
      <span className="text-center text-2xl text-cyan-500 ">
        Timing: 1:20 pm to 2:10 pm only
      </span  >
      <span className="text-cyan-500  font-bold  text-center text-3xl ">
      Addition to task some points to remember :
      </span>
      <span className="text-white  text-2xl space-y-4">
        <ul className="m">
          <li>1.You need to know the names
        of seniors before approaching them </li>
          <li>2.Seniors can ask you to do any task
        just for making task more enjoyable </li>
          <li>3.You should approach seniors
        formally </li>
        </ul>
       
        
         
        
      </span>
      
      <span className="text-cyan-500 text-2xl text-center">
      And part 2 👀 of this task will be something mysterious

      </span>
      <span className="text-cyan-500 text-2xl text-center">
      Hint : remember your seniors name☺️

      </span>
      <span className="text-white text-2xl text-center">
        All the best & Stay Tuned...!!
      </span>
    </div>
  );
};

export default DummyTask;
