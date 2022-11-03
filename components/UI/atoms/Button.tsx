import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

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
    "bg-indigo-100/30 hover:bg-indigo-200/30 text-indigo-700 hover:text-indigo-900 focus:ring-indigo-500 hover:shadow-indigo-300/30",
  blue: "bg-blue-100/30 hover:bg-blue-200/30 text-blue-700 hover:text-black focus:ring-blue-500 hover:shadow-blue-300/30",
  red: "bg-red-100/30 hover:bg-red-200/30 text-red-700 hover:text-black focus:ring-red-500 hover:shadow-red-300/30",
  gray: "bg-gray-200/30 hover:bg-gray-200/30 text-gray-700 hover:text-black focus:ring-gray-500",
  green:
    "bg-green-100/30 hover:bg-green-200/30 text-green-700 hover:text-black focus:ring-green-500 hover:shadow-green-300/30",
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
        className={`items-center shadow-xl rounded-full rounded-lg border border-transparent ${colorClasses} px-6 py-3 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 w-36 py-6 px-10`}
        onClick={action}
      >
        {title === 'search' ? <MagnifyingGlassIcon className="h-8 w-16 text-indigo-600" aria-hidden="true" /> : title}
      </button>
    </>
  );
};

export default Button;
