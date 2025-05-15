import React from 'react';

const ButtonDash = ({ active, fun, label }) => {
  return (
    <button
      className={`cursor-pointer rounded-xl px-6 py-2 font-semibold capitalize transition-all duration-200 ${
        !active
          ? 'border-ourGray text-ourGray border hover:bg-purple-700 hover:text-white'
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

export default ButtonDash;
