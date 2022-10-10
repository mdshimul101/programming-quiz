import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    return (
      <div className="w-10/12 m-auto">
        <div className="sm:flex justify-between w-12/12 lg:w-10/12 md:w-10/12 m-auto mt-5">
          <div>
            <h2 className=" my-6 text-slate-500 text-lg font-bold">
              Hello , Programmer.... <br />
              We are ready to help grow you Programming skill. Participate quiz
              and develop our programming knowledge
            </h2>
          </div>
          <div>
            <img className="w-52" src="favicon.png" alt="" />
          </div>
        </div>
        {
            topics.data.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
        }
      </div>
    );
};

export default Home;