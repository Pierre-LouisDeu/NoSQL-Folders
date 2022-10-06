import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ParentsContext } from "../../../contexts/ParentsContext";

type FolderProps = {
  title: string;
  id: string;
};

const Folder: React.FunctionComponent<FolderProps> = ({ title, id }) => {
  const { parents, setParents } = useContext(ParentsContext);
  return (
    <>
      <button
        className="w-96 rounded-lg py-8 border hover:text-blue-600 hover:bg-gray-100 bg-gray-50"
        onClick={() => {
          parents ? setParents(parents + "_" + id) : setParents(id);
        }}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
      </button>
    </>
  );
};

export default Folder;
