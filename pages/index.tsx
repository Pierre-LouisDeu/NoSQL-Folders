import type { NextPage } from "next";
import Head from "next/head";
import Finder from "../components/templates/Finder";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Finder parent={false} />
    </div>
  );
};

export default Home;
