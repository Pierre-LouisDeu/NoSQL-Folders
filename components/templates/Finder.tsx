import React, { useState, useEffect, useContext } from "react";
import FolderGrid from "../UI/organisms/FolderGrid";
import GoBackButton from "../UI/molecules/GoBackButton";
import AddButton from "../UI/molecules/AddButton";

type ContactListProps = {
  parent: string | string[] | boolean | undefined;
};

const Finder: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center py-20 px-20 text-center">
        <div className="mt-6 flex-wrap items-center justify-around px-24 flex flex-col">
          <div className="py-6 flex flex-row">
            <div className="mr-8">{parent && <GoBackButton />}</div>
            <AddButton />
          </div>
          <div className="py-6 rounded-lg px-6 h-96 w-full">
            <FolderGrid parent={parent} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Finder;
