import React from 'react';

const Topics = ({topic}) => {
    //console.log(topic);
    const {id,name,total,logo} = topic;
    return (
        <div>
            <h3>{topic.id}</h3>
        </div>
    );
};

export default Topics;