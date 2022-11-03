import React, { useState, useEffect, useContext } from "react";
import FolderGrid from "../UI/organisms/FolderGrid";
import GoBackButton from "../UI/molecules/GoBackButton";
import AddButton from "../UI/molecules/AddButton";
import SearchButton from "../UI/molecules/SearchButton";
import SearchModal from "../UI/organisms/SearchModal";
import firebase from "../../firebase/initFirebase";
import "firebase/compat/firestore";

type ContactListProps = {
  parent: string | string[] | boolean | undefined;
};

const Finder: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  const [search, setSearch] = useState({ show: false, text: '' });
  const queryFinder = firebase.db.collection("folders").where("parent", "==", parent);
  const querySearchTool = firebase.db.collection("folders");

  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center py-20 px-20 text-center">
        <div className="mt-6 flex-wrap items-center justify-around px-24 flex flex-col">
          <div className="py-8 flex flex-row">
            <GoBackButton active={parent ? true : false} />
            <div className="px-8">
              <SearchButton search={search} setSearch={setSearch}/>
            </div>
            <AddButton />
          </div>
          <div className="py-6 rounded-lg px-6 h-96 w-full">
            <FolderGrid parent={parent} query={queryFinder} />
            {search.show ? <SearchModal search={search} setSearch={setSearch} query={querySearchTool}/> : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default Finder;
