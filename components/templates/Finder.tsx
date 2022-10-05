import React, { useState, useEffect, useContext } from "react";
import FolderGrid from "../UI/organisms/FolderGrid";

type ContactListProps = {
  parent: string | string[] | boolean | undefined;
};

const Finder: React.FunctionComponent<ContactListProps> = ({ parent }) => {
  return (
    <>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <FolderGrid parent={parent} />
        </div>
      </main>
    </>
  );
};

export default Finder;