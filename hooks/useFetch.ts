import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

const useFetch = (
  parent: string | string[] | boolean | undefined
): Array<any> => {
  const { reload, setReload } = useContext(ReloadContext);
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
        setReload(false);
      })
      .catch((error: any) => {
        setError(error.message);
      });
  }, [parent, reload]);

  return [folders, isPending, error];
};

export default useFetch;
