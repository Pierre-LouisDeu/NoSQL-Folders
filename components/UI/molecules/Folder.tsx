import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ParentsContext } from "../../../contexts/ParentsContext";
import FolderIcon from "../atoms/FolderIcon";

type FolderProps = {
  title: string;
  id: string;
};

const Folder: React.FunctionComponent<FolderProps> = ({ title, id }) => {
  const { parents, setParents } = useContext(ParentsContext);
  return (
    <>
      <div className="w-48 rounded-xl hover:text-black text-gray-800 hover:bg-gray-50 justify-center">
        <button
          className="w-full px-6"
          onClick={() => {
            parents ? setParents(parents + "_" + id) : setParents(id);
          }}
        >
          <FolderIcon className="h-36 w-36" />
          <h1 className="text-xl my-6">{title}</h1>
        </button>
      </div>
    </>
  );
};

export default Folder;
