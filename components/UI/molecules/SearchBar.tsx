import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const SearchBar: React.FunctionComponent<any> = ({ setSearch, search }) => {
  return (
    <>
      <div className="flex rounded-md h-full w-full p-2">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </div>
          <input
            type="email"
            name="email"
            className="block w-full rounded-t-lg border-white pl-10 sm:text-sm"
            placeholder="Search folder"
            onChange={(e) =>
              setSearch({...search, text : e.target.value})
            }
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
