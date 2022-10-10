import React from 'react';

const Topics = ({topic}) => {
    //console.log(topic);
    const {id,name,total,logo} = topic;
    return (
        <div className=''>
            <div className='border'>
                <img className='w-full' src={logo} alt="" />
                <div className=''>
                    <h2>{name}</h2>
                    <p>Total Number of Quiz : {total}</p>
                </div>
                <div>
                    <button className='bg-slate-500 px-4 py-2 w-full '>Practice Quiz</button>
                </div>
            </div>
            <h3>{topic.id}</h3>
        </div>
    );
};

export default Topics;