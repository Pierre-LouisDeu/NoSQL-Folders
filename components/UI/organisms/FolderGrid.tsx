import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";
import Folder from "../molecules/Folder";
import Banner from "../molecules/Banner";
import firebase from "../../../firebase/initFirebase";
import "firebase/compat/firestore";

type ContactListProps = {
  parent: string | string[] | boolean | undefined;
};

const FolderGrid: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  const [folders, isPending, error] = useFetch(parent);
  return (
    <>
      {error && (
        <div>
          <Banner title={error} />
        </div>
      )}
      {isPending && <div>Loading...</div>}
      <div className="w-full grid md:grid-cols-4 gap-12">
        {folders &&
          folders.map((folder: any, i: number) => (
            <div key={i}>
              <Folder title={folder.title} id={folder.id} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
