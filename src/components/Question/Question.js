import React, { useState } from "react";
import { EyeIcon} from "@heroicons/react/24/solid";

import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questions ,index}) => {
    

  const { question, correctAnswer, options } = questions;
  const [answer , setAnswer] = useState();

  const showCorrectAnsToast = () => toast(`${correctAnswer}`);
  const rightAnsToast = () => toast("Your ans is Correct");
  const wrongAnsToast = () => toast("Your ans is Wrong!");

  let ans;
  const onChange = (e) =>{
    setAnswer(e.target.value)
    if(e.target.value === correctAnswer)
    {
      
        ans = correctAnswer;
        rightAnsToast();
        return;
    }
    else{
      
      ans = e.target.value;
        wrongAnsToast();
        return;
    }
    
}
  
  
  return (
    <div className="my-10">
      <div className="mt-5">
        <div className="border">
          <div onClick={showCorrectAnsToast} className="flex justify-between py-2 px-4 w-full my-3">
            <h1 className="w-11/12">
              {index + 1}. {question}
            </h1>
            <button>
              <EyeIcon className="md:h-6 md:w-6 h-6 w-6 text-slate-500" />
              <ToastContainer/>
            </button>
          </div>
          <div>
            {options.map((option) => (
              <div className="ml-4 my-2">
                <input
                  type="radio"
                  name="{option.id}"
                  value={option}
                  onChange={onChange}
                />
                {option}
              </div>
            ))}
          </div>
          <div className="ml-4 my-1">
            {
              (ans) ? <p>Right</p> : <p>Wrong</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
