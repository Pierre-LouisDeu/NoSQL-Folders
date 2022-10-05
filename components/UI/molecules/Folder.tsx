import { useState, useEffect, useContext } from "react";
import Link from "next/link";

type FolderProps = {
  title: string;
  id: string;
};

const Folder: React.FunctionComponent<FolderProps> = ({ title, id }) => {
  return (
    <>
      <button className="w-96 rounded-lg py-6 border hover:text-blue-600 hover:bg-gray-100 bg-gray-50">
        <Link href={'/folder/' + id} >
          <h1 className="text-2xl font-bold">{title} &rarr;</h1>
        </Link>
      </button>
    </>
  );
};

export default Folder;
