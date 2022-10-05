import { useState, useEffect, useContext } from "react";
import firebase from "../firebase/initFirebase";
import "firebase/compat/firestore";

// useEffect(() => {
  // fetch(url)
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw Error('Could not fetch the data for that resource');
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     setData(data);
  //     setIsPending(false);
  //     setError(null);
  //   })
  //   .catch((err) => {
  //     setIsPending(false);
  //     setError(err.message);
  //   });
// }, [url]);

const useFetch = (parent: string | boolean): Array<any> => {
  const [folders, setFolders] = useState([{}]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   const unsubscribe = firebase.db
      .collection("folders")
      .where("parent", "==", parent)
      .onSnapshot((snapshot) => {
        const foldersName = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsPending(false);
        setError(null);
        setFolders(foldersName);
      })
    return () => unsubscribe();
  }, [parent]);

  return [folders, isPending, error];
};

export default useFetch;
