import React, { useState, useEffect } from "react";

type ActionType = {
  (): void;
};

type ButtonProps = {
  title: string;
  action: ActionType;
  color: string;
};

type colorsType = {
  [key: string]: string;
};

const colors: colorsType = {
  indigo:
    "bg-indigo-100/30 hover:bg-indigo-200/30 text-indigo-700 hover:text-indigo-900 focus:ring-indigo-500",
  blue: "bg-blue-100/30 hover:bg-blue-200/30 text-blue-700 hover:text-black focus:ring-blue-500",
  red: "bg-red-100/30 hover:bg-red-200/30 text-red-700 hover:text-black focus:ring-red-500",
  gray: "bg-gray-100/30 hover:bg-gray-200/30 text-gray-700 hover:text-black focus:ring-gray-500",
  green:
    "bg-green-100/30 hover:bg-green-200/30 text-green-700 hover:text-black focus:ring-green-500",
};

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  action,
  color,
}) => {
  const colorClasses: string = colors[color] || colors["indigo"];

  return (
    <>
      <button
        type="button"
        className={`items-center shadow-xl hover:shadow-indigo-300/30 rounded-full rounded-lg border border-transparent ${colorClasses} px-6 py-3 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 w-36 py-6 px-10`}
        onClick={action}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
