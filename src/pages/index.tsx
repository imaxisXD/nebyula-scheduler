
import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/component/ui/navbar";


import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.getCurrentUser.getAll.useQuery();
  console.log(data);


  return (
    <>
      <Head>
        <title>Nebyula Schedular</title>
        <meta name="description" content="scheduling meetings with others with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">


      </main>
    </>
  );
};

export default Home;
