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

export const buttonVariants = ({ variant, size }) => {
  return `rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
    variant === 'default'
      ? 'bg-gray-800 text-white hover:bg-gray-700'
      : variant === 'outline'
        ? 'border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
        : ''
  } ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : ''}`;
};
