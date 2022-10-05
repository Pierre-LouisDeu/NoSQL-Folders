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


  // get all documents name from the collection "folders"
    const [foldersName, setFoldersName] = useState({});
    useEffect(() => {
        const unsubscribe = firebase.db.collection("folders").onSnapshot((snapshot) => {
            const foldersName = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFoldersName(foldersName);
        });
        return () => unsubscribe();
    }, []);


  console.log(foldersName)

//   useEffect(() => {
//     if (parent) {
//       const a = firebase
//         .firestore()
//         .collection("folders")
//         .where("parent", "==", false);
//     }
//   }, [parent]);

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
          folders.map((folder: { id: number; title: string }) => (
            <div className="py-4" key={folder.id}>
              <Folder title={folder.title} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
