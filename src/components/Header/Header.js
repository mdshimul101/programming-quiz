import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <nav className="bg-slate-400 py-5">
          <div className=" sm:flex justify-between  w-10/12 sm:m-auto pl-3">
            <div>
              <Link to="/" className="text-slate-800 text-xl font-bold">
                Programming Quiz
              </Link>
            </div>
            <div>
              <Link
                className="mr-4 font-semibold text-slate-800 hover:text-white ease-in-out duration-400"
                to="/"
              >
                Home
              </Link>
              <Link
                className="mr-4 font-semibold text-slate-800 hover:text-white ease-in-out duration-400"
                to="/statistics"
              >
                Statistics
              </Link>
              <Link
                className="mr-4 font-semibold text-slate-800 hover:text-white ease-in-out duration-400"
                to="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;