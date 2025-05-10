import React from 'react';

const Button = ({ label, active, fun }) => {
  return (
    <button
      className={`cursor-pointer rounded-xl px-6 py-2 font-semibold capitalize transition-all duration-200 ${
        !active
          ? 'border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white'
          : 'rounded-xl bg-purple-700 text-white hover:bg-purple-900'
      } `}
      onClick={() => {
        fun();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
