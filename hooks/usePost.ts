import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

type parentType = {
  parent: string | string[] | boolean | undefined;
};

const usePost = () => {
  const { setReload } = useContext(ReloadContext);
  const postNewFolder = async (parent: parentType) => {
    const newFolder = {
      title: "New Folder",
      parent: parent,
      //   createdAt: firebase.timestamp(),
    };
    try {
      await firebase.db.collection("folders").add(newFolder);
      setReload(true);
    } catch (err) {
      console.log(err);
    }
  };

  return { postNewFolder };
};

export default usePost;
