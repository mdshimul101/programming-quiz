import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    //console.log(quiz);
    
    return (
      <div>
        <div className="w-10/12 m-auto">
          <h2 className="text-center text-2xl font-bold mt-5 text-slate-600">Quiz Topic : {quiz.data.name}</h2>
          {quiz.data.questions.map((questions, index) => (
            <Question
              key={questions.id}
              questions={questions}
              index={index}
            ></Question>
          ))}
          <p>hello Quiz</p>
        </div>
      </div>
    );
};

export default Quiz;