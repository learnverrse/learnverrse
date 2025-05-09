import React from "react";

const Button = ({ label, active, fun }) => {
  return (
    <button
      className={` px-6 py-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer capitalize ${
        !active
          ? "text-purple-700 border border-purple-700  hover:bg-purple-700 hover:text-white"
          : "bg-purple-700 text-white rounded-xl hover:bg-purple-900"
      }  `}
      onClick={() => {
        fun;
      }}>
      {label}
    </button>
  );
};

export default Button;
