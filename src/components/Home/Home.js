import React from 'react';
import {  useLoaderData } from 'react-router-dom';

import Topics from '../Topics/Topics';

const Home = () => {
    
    const topics = useLoaderData();
    return (
      <div className="w-10/12 m-auto">
        <div className="md:flex justify-between w-12/12  m-auto mt-5">
          <div>
            <h2 className=" my-6 text-slate-500 text-lg font-bold">
              Hello , Programmer.... <br />
              We are ready to help grow you Programming skill. Participate quiz
              and develop our programming knowledge.
            </h2>
          </div>
          <div>
            <img className="md:w-52" src="favicon.png" alt="" />
          </div>
        </div>
        <div className='mt-10'>
          <h2 className="text-center text-3xl font-bold text-slate-800 py-3 border bg-slate-300">
            Topic
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-20">
          {topics.data.map((topic) => (
            <Topics key={topic.id} topic={topic} ></Topics>
          ))}
        </div>
      </div>
    );
};

export default Home;