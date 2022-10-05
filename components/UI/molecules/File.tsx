import React, { useState, useEffect, useContext } from "react";

type FolderProps = {
  title: string;
};

const Folder: React.FunctionComponent<FolderProps> = ({ title }) => {

  return (
    <>
      <a
        href=""
        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
      >
        <h1 className="text-2xl font-bold">{title} &rarr;</h1>
      </a>
    </>
  );
};

export default Folder;
