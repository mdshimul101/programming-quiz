import React from "react";
import { EyeIcon} from "@heroicons/react/24/solid";

const Question = ({ questions ,index}) => {
    
    //console.log(questions);
  const { question, correctAnswer, options } = questions;
  //console.log(options);
  return (
    <div className="mt-5">
      <div className="border">
        <div className="flex justify-between py-2 px-4">
          <h1>{index+1}. {question}</h1>
          <EyeIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Question;
