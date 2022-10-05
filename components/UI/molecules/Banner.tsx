import React, { useState } from "react";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

type BannerProps = {
  title: string;
}

const Banner: React.FunctionComponent<BannerProps> = ({ title }) => {
  const [isHidden, setIsHidden] = useState(false);

  if (!isHidden) {
    return (
      <div className="fixed inset-x-0 top-0 pt-2 z-10">
        <div className="mx-auto max-w-7xl pr-2 pl-2">
          <div className="rounded-lg bg-indigo-600 p-2 shadow-lg hover:bg-indigo-500">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-indigo-800 p-2">
                  <MegaphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">We announced a new product!</span>
                  <span className="hidden md:inline">{title}</span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => {
                    setIsHidden(true);
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
export default Banner;
