import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

const usePatch = () => {
  const { setReload } = useContext(ReloadContext);
  const renameFolder = async (id: string, newName: string) => {
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

export default usePatch;
