import { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Finder from "../components/templates/Finder";
import Image from "next/image";
import { ReloadContext } from "../contexts/ReloadContext";
import { ParentsContext } from "../contexts/ParentsContext";
import { VechaiProvider, Button } from "@vechaiui/react";

const Home: NextPage = () => {
  const [reload, setReload] = useState(false);
  const [parents, setParents] = useState(false);
  return (
    <VechaiProvider>
      <ReloadContext.Provider value={{ reload, setReload }}>
        <ParentsContext.Provider value={{ parents, setParents }}>
          <div className="flex min-h-screen flex-col items-center py-2 ">
            <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Finder parent={parents} />
          </div>
        </ParentsContext.Provider>
      </ReloadContext.Provider>
    </VechaiProvider>
  );
};

export default Home;
