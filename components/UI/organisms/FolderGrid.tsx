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

  const [foldersName, setFoldersName] = useState([{}]);

  useEffect(() => {
    const unsubscribe = firebase.db
      .collection("folders")
      .onSnapshot((snapshot) => {
        const foldersName = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoldersName(foldersName);
      });
    return () => unsubscribe();
  }, [parent]);

  console.log(foldersName);

  return (
    <>
      <div className="mt-2 w-full">
        {error && (
          <div>
            <Banner title={error} />
          </div>
        )}
        {isPending && <div>Loading...</div>}
        {foldersName &&
          foldersName.map((folder: any) => (
            <div className="py-4" key={folder.id}>
              <Folder title={folder.title} id={folder.id}/>
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
