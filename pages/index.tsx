import { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Finder from "../components/templates/Finder";
import Image from "next/image";
import { ParentsContext } from "../contexts/parentsContext";

const Home: NextPage = () => {
  const [parents, setParents] = useState(false);
  console.log({ parents });
  return (
    <ParentsContext.Provider value={{ parents, setParents }}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Finder parent={parents} />
      </div>
    </ParentsContext.Provider>
  );
};

export default Home;
