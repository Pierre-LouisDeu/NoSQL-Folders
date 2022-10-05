import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";

const useFetch = (parent: string | string[] | boolean | undefined): Array<any> => {
  const [folders, setFolders] = useState([{}]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const query = firebase.db.collection("folders").where("parent", "==", parent);

  useEffect(() => {
    query
      .get()
      .then((data) => {
        const foldersName = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsPending(false);
        setError(null);
        setFolders(foldersName);
      })
      .catch((error: any) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [parent]);

  return [folders, isPending, error];
};

export default useFetch;
