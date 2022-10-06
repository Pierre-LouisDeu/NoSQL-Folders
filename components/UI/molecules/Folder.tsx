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
      <div className="w-48 rounded-lg hover:text-blue-600 hover:bg-gray-100 bg-gray-50">
        <button
          className="w-full"
          onClick={() => {
            parents ? setParents(parents + "_" + id) : setParents(id);
          }}
        >
          <h1 className="text-2xl font-bold my-8">{title}</h1>
        </button>
      </div>
    </>
  );
};

export default Folder;
