import { useState, useEffect, useContext } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Finder from "../../components/templates/Finder";
import Image from "next/image";
import { ParentsContext } from "../../contexts/ParentsContext";

const Home: NextPage = () => {
  const router = useRouter();
  const { folder } = router.query;
  const [parents, setParents] = useState(null);
  
  return (
    <ParentsContext.Provider value={{ parents, setParents }}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Finder parent={parents ? parents : folder} />
      </div>
    </ParentsContext.Provider>
  );
};

export default Home;
