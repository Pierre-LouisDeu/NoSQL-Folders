import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";
import { ReloadContext } from "../contexts/ReloadContext";

const useFetch = (
  query: any
): Array<any> => {
  const { reload, setReload } = useContext(ReloadContext);
  const [folders, setFolders] = useState([{}]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    query
      .get()
      .then((data : any) => {
        const foldersName = data.docs.map((doc : any) => ({
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
  }, [query, reload]);

  return [folders, isPending, error];
};

export default useFetch;
