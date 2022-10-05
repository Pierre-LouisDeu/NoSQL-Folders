import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";
import Folder from "../molecules/Folder";
import Banner from "../molecules/Banner";
import firebase from "../../../firebase/initFirebase";
import "firebase/compat/firestore";

type ContactListProps = {
  parent: string | boolean;
};

const FolderGrid: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  const [folders, isPending, error] = useFetch(parent);
  return (
    <>
      <div className="mt-2 w-full">
        {error && (
          <div>
            <Banner title={error} />
          </div>
        )}
        {isPending && <div>Loading...</div>}
        {folders &&
          folders.map((folder: any, i: number) => (
            <div className="py-4" key={i}>
              <Folder title={folder.title} id={folder.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
