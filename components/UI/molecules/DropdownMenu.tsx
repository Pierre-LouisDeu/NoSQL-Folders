import React, { useState } from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { cx, Kbd, Icon } from "@vechaiui/react";
import {
  ArrowRightCircleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import useDelete from "../../../hooks/useDelete";



const DropdownMenu: React.FunctionComponent<any> = ({
  children: Children,
  title,
  id,
  parent,
  setRenameModal
}) => {
  const { deleteFolder } = useDelete();
  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Children title={title} id={id} />
        </ContextMenu.Trigger>
        <ContextMenu.Content
          className={cx(
            "z-40 w-56 min-w-max py-1 rounded-md shadow-lg outline-none",
            "backdrop-blur-xl bg-white/30 border border-gray-200",
            "dark:bg-indigo-800 dark:border-gray-700"
          )}
          alignOffset={-5}
        >
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30",
              "dark:focus:bg-neutral-700"
            )}
            onClick={() => {console.log({id})}}
          >
            <DocumentDuplicateIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Copy</span>
            <Kbd>⌘C</Kbd>
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30 dark:focus:bg-neutral-700"
            )}
          >
            <ArrowRightCircleIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Move</span>
            <Kbd>⌘⇧M</Kbd>
          </ContextMenu.Item>
          <ContextMenu.Separator className="h-px my-1 bg-neutral-200 dark:bg-neutral-700" />
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30 dark:focus:bg-neutral-700"
            )}
          >
            <HeartIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Add to favorites</span>
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30 dark:focus:bg-neutral-700"
            )}
          >
            <UserPlusIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Share</span>
          </ContextMenu.Item>
          <ContextMenu.Separator className="h-px my-1 bg-neutral-200 dark:bg-neutral-700" />
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30 dark:focus:bg-neutral-700"
              )}
              onClick={() => setRenameModal(true)}
          >
            <PencilSquareIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Rename</span>
            <Kbd>⌘R</Kbd>
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
              "focus:bg-neutral-400/30 dark:focus:bg-neutral-700"
            )}
            onClick={() => deleteFolder(parent, id)}
          >
            <TrashIcon
              className="mr-3 h-5 w-5 text-gray-600 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="flex-1 mr-2">Delete</span>
            <Kbd>⌘⇧D</Kbd>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </>
  );
};

export default DropdownMenu;
