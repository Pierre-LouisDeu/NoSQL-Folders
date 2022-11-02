import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

type ParentType = {
  parent: string | string[] | boolean | undefined;
};

const useDelete = () => {
  const { setReload } = useContext(ReloadContext);

  // Delete all documents in the collection folders that contains the parent id in the parent field
  const deleteFolder = async (parent: ParentType, id: string) => {
    try {
      // Delete the folder (firestore request)
      await firebase.db.collection("folders").doc(id).delete();
      // Delete the subfolders (backend request)
      setReload(true);
      const res = await fetch(
        `https://us-central1-nosql-folders.cloudfunctions.net/deleteSubFolders?id=${id}`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return { deleteFolder };
};

export default useDelete;
