"use client";

import React from "react";
export const Counter: React.FC = () => {
  const value = 0;

  const dec = () => {
    value--;
    console.log(value);
  };

  const inc = () => {
    value++;
    console.log(value);
  };

  return (
    <div className="flex gap-4 max-w-fit">
      <button
        className="w-8 h-8 flex justify-baseline items-center border-1 bg-red-300"
        onClick={dec}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className="w-8 h-8 flex justify-baseline items-center border-1 bg-green-300"
        onClick={inc}
      >
        +
      </button>
    </div>
  );
};
