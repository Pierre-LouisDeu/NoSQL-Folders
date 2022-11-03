import { Fragment, useState, useEffect, useRef, MutableRefObject } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchBar from "../molecules/SearchBar";
import FolderGrid from "../organisms/FolderGrid";

type SearchModalStateProps = {
  show: boolean;
  text: string;
};

type SearchModalProps = {
  setSearch: (state: SearchModalStateProps) => void;
  search: SearchModalStateProps;
  query: any;
};

const SearchModal: React.FunctionComponent<SearchModalProps> = ({
  search,
  setSearch,
  query,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      setSearch({ ...search, show: false });
    }
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto backdrop-blur">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-1/2 transform overflow-hidden rounded-lg backdrop-blur-lg bg-white pb-4 shadow-xl transition-all mt-8 mb-8">
                <SearchBar setSearch={setSearch} search={search} />
                <div className="text-center border-t border-1">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-left pl-8 pt-6 font-medium leading-6 text-gray-900 font-semibold"
                  >
                    Folders
                  </Dialog.Title>
                  <div className="pt-2">
                    <FolderGrid query={query} setOpen={setOpen} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchModal;
