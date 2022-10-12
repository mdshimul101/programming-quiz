import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="w-10/12 m-auto">
        <h1 className="font-bold md:text-3xl text-2xl md:mt-28 mt-10 text-slate-700">
          Frequently Asked Questions(FAQ)
        </h1>
        <div className="mt-11 mb-24 md:w-8/12">
          <h4 className="font-semibold text-2xl text-slate-800">
            1. What is the purpose of react router?
          </h4>
          <p>
            React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React
            Application, allows changing the browser URL, and keeps the UI in
            sync with the URL. React Router is a state container for the current
            location , or URL. It keeps track of the location and renders
            different Route s as it changes, and it also gives you tools to
            update the location using Link s and the history API
          </p>
          <br />
          <h4 className="font-semibold text-2xl text-slate-800">
            2. How does Context API works?
          </h4>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.The React Context
            API was been around as an experimental feature for a while now but
            finally became safe to use in production last year, solving one
            major problem React problem — prop drilling.
          </p>
          <br />
          <h4 className="font-semibold text-2xl text-slate-800">
            3. What does useRef means in react?
          </h4>
          <p>
            Essentially, useRef is like a “box” that can hold a mutable value in
            its .current property. You might be familiar with refs primarily as
            a way to access the DOM. If you pass a ref object to React with
            myRef, React will set its .current property to the corresponding DOM
            node whenever that node changes.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Blog;