import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const loader = useLoaderData();
    //console.log(loader.data);
    const data =[];
    loader.data.map((v) => data.push(v));
       
    return (
      <div className="App">
        <h2 className="my-5 text-slate-600 text-lg font-bold">
          Total Question
        </h2>
        <div className="w-full m-auto">
          
            <BarChart
              width={350}
              height={500}
              data={data}
              className="w-full m-auto"
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          
        </div>
      </div>
    );
};

export default Statistics;