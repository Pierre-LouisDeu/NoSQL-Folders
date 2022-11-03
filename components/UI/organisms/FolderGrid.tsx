import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";
import Folder from "../molecules/Folder";
import Banner from "../molecules/Banner";
import firebase from "../../../firebase/initFirebase";
import "firebase/compat/firestore";
import DropdownMenu from "../molecules/DropdownMenu";
import RenameModal from "../molecules/RenameModal";
import { ParentsContext } from "../../../contexts/ParentsContext";

const FolderGrid: React.FunctionComponent<any> = ({ query, setOpen }) => {
  const { setParents, parents } = useContext(ParentsContext);
  const [folders, isPending, error] = useFetch(query);
  const [renameFolderState, setRenameFolderState] = useState({
    id: "",
    show: false,
  });

  // useEffect(() => {
  //   console.log(renameFolderState.show ? "open" : "closed");
  // }, [renameFolderState]);

  return (
    <>
      {renameFolderState?.show ? (
        <RenameModal
          setRenameFolderState={setRenameFolderState}
          renameFolderState={renameFolderState}
        />
      ) : null}
      {error ? <Banner title={error} /> : null}
      {isPending && <div>Loading...</div>}
      <div className="w-full grid md:grid-cols-4 gap-12">
        {folders &&
          folders.map((folder: any, i: number) => (
            <div key={i}>
              <DropdownMenu
                children={Folder}
                title={folder.title}
                id={folder.id}
                setRenameFolderState={setRenameFolderState}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
