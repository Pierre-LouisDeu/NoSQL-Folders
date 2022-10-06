import React, { useState, useEffect } from "react";

type ActionType = {
  (): void;
};

type ButtonProps = {
  title: string;
  action: ActionType;
  color: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  action,
  color,
}) => {
  return (
    <>
      <button
        type="button"
        className={`items-center rounded-lg border border-transparent bg-${color}-100 px-6 py-3 text-2xl font-bold text-${color}-700 hover:text-black hover:bg-${color}-200 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 w-96 py-8 px-10`}
        // className={`inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-32 px-10`}
        onClick={action}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
