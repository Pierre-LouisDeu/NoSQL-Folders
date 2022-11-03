import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import useFetch from "../../../hooks/useFetch";
import Folder from "../molecules/Folder";
import Banner from "../molecules/Banner";
import firebase from "../../../firebase/initFirebase";
import "firebase/compat/firestore";
import DropdownMenu from "../molecules/DropdownMenu";
import RenameModal from "../molecules/RenameModal";

type ContactListProps = {
  parent: string | string[] | boolean | undefined;
};

const FolderGrid: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  const [folders, isPending, error] = useFetch(parent);
  const [renameModal, setRenameModal] = useState(true);
  return (
    <>
      {renameModal ? (
          <RenameModal setRenameModal={setRenameModal}/>
      ) : null}
      {error ? (
          <Banner title={error} />
      ) : null}
      {isPending && <div>Loading...</div>}
      <div className="w-full grid md:grid-cols-4 gap-12">
        {folders &&
          folders.map((folder: any, i: number) => (
            <div key={i}>
              <DropdownMenu
                children={Folder}
                parent={parent}
                title={folder.title}
                id={folder.id}
                setRenameModal={setRenameModal}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default FolderGrid;
