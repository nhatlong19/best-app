"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex flex-col place-items-center gap-[10px] before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="relative text-[32px] font-bold text-black mb-[40px]">
          Login to My App
        </div>
        <div
          className="relative text-white flex gap-[10px] justify-center items-center w-[320px] h-[48px] bg-black rounded-[8px] cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image
            className="relative"
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
            alt="github"
            width={25}
            height={25}
            priority
          />
          Login with Github
        </div>
        <div
          className="relative text-white flex gap-[10px] justify-center items-center w-[320px] h-[48px] bg-[#6b4fbb] rounded-[8px] cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image
            className="relative"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
            alt="github"
            width={20}
            height={20}
            priority
          />
          Login with Gitlab
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.youtube.com/watch?v=LyRBIeAw8ak&list=PLFsuT_KlQbQY1OY78U4uQgcVcZDhyu5fY&index=37"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Best app for best you
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=LyRBIeAw8ak&list=PLFsuT_KlQbQY1OY78U4uQgcVcZDhyu5fY&index=37"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Best app for best you
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=LyRBIeAw8ak&list=PLFsuT_KlQbQY1OY78U4uQgcVcZDhyu5fY&index=37"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Best app for best you
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=LyRBIeAw8ak&list=PLFsuT_KlQbQY1OY78U4uQgcVcZDhyu5fY&index=37"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Best app for best you
          </p>
        </a>
      </div>
      {open && (
        <div className="best fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] z-[1000000]">
          <div
            className="run text-[red] text-[30px] font-bold absolute cursor-pointer left-[50px] top-[50px] scale-animation"
            onClick={() => {
              setOpen(false);
            }}
          >
            Run
          </div>
          <img
            className="w-auto h-full block m-auto"
            src="va.jpg"
            alt="github"
          />
          <div
            className="run text-[red] text-[50px] font-bold absolute cursor-pointer bottom-[150px] right-[150px] scale-animation"
            onClick={() => {
              setOpen(false);
            }}
          >
            Run
          </div>
        </div>
      )}
    </div>
  );
}
