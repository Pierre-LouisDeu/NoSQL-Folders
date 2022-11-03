import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

const usePost = (id: string, newName: string) => {
  const { setReload } = useContext(ReloadContext);
  const renameFolder = async () => {
    try {
      await firebase.db
        .collection("folders")
        .doc(id)
        .update({ title: newName });
      setReload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return { renameFolder };
};

export default usePost;
