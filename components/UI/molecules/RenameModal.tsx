import { Fragment, useState, useEffect, useRef, MutableRefObject } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import usePatch from "../../../hooks/usePatch";

type RenameFolderStateProps = {
  id: string;
  show: boolean;
};

type RenameModalProps = {
  setRenameFolderState: (state: RenameFolderStateProps) => void;
  renameFolderState: RenameFolderStateProps;
};

const RenameModal: React.FunctionComponent<RenameModalProps> = ({
  setRenameFolderState,
  renameFolderState,
}) => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState("");
  const { renameFolder } = usePatch();

  useEffect(() => {
    if (!open) {
      setRenameFolderState({ show: false, id: "" });
    }
  }, [open]);

  const rename = () => {
    if (renameFolderState?.id && title.length > 0) {
      renameFolder(renameFolderState.id, title);
      setOpen(false);
    } else {
      console.log("Error while renaming folder");
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      rename();
    }
  };

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

        <div className="fixed inset-0 z-10 overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Rename folder
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="text" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="New name"
                      onChange={(e) => setTitle(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <button
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => rename()}
                  >
                    Save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default RenameModal;
