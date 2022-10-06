import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

type parentType = {
  parent: string | string[] | boolean | undefined;
};

const useDelete = () => {
  const { setReload } = useContext(ReloadContext);

  // Delete all documents in the collection folders that contains the parent id in the parent field
  const deleteFolder = async (parent : parentType, id: string) => {
    const key = parent + '_' + id
    const query = await firebase.db
      .collection("folders")
      .where("parent", ">=", key)
      .where("parent", "<=", `${key}_`) 
      .get();
    query.forEach((doc) => {
      doc.ref.delete();
    const title = doc.data().title;
    console.log('delete :',doc.id, {title});
    });
    await firebase.db.collection("folders").doc(id).delete();
    setReload(true);
  };

  return { deleteFolder };
};

export default useDelete;
