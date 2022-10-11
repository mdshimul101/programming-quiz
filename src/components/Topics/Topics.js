import React from 'react';
import {ArrowRightCircleIcon} from '@heroicons/react/24/solid';

const Topics = ({topic, showQuiz}) => {
    //console.log(topic);
    const {id,name,total,logo} = topic;
    return (
      <div className="">
        <div className="border bg-slate-200">
          <img className="w-full" src={logo} alt="" />
          <div className="md:flex justify-between p-3 text-slate-700 text-lg">
            <h2>Topic Name : {name}</h2>
            <p>Total Number of Quiz : {total}</p>
          </div>
          <div onClick={() =>showQuiz(id)} className="flex bg-slate-500">
            <button className=" px-4 py-2 w-full text-white text-lg">
              Practice {name} Quiz
            </button>
            <div className="flex justify-center items-center mr-3">
              <ArrowRightCircleIcon className="h-8 w-8  text-white"></ArrowRightCircleIcon>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Topics;