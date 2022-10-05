import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Finder from "../../components/templates/Finder";
import Image from "next/image";

const Home: NextPage = () => {
  const router = useRouter();
  const { folder } = router.query;

console.log(parent);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Finder parent={folder} />
    </div>
  );
};

export default Home;
