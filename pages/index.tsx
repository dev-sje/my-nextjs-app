import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectValue } from "../slices/counterSlice";

const Home: NextPage = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>The value of count is {count}</h1>
        <button
          className="w-full h-10 bg-blue-500"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          className="w-full h-10 bg-green-500"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
