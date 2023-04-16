import React from "react";

function Header({ setDisplay }) {
  //   console.log("hdhdhd", goto);
  return (
    <div className="marginLeftZero">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Smart Hire</h1>
          </div>
          <div>
            <button
              onClick={() => {
                setDisplay("home");
              }}
              to="/"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => {
                setDisplay("about");
              }}
              to="/about"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <button
              to="/contact"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
