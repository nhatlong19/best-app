"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const audioRef = useRef(null);
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setShowImage(true);
    }, 3000);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 2500);
  };

  const handleClose = () => {
    setShowImage(false);
    setOpen(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex flex-col place-items-center gap-[10px] before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="relative text-[32px] font-bold text-black mb-[40px]">
          Login to continue
        </div>
        <div
          className="relative text-white flex gap-[10px] justify-center items-center w-[320px] h-[48px] bg-black rounded-[8px] cursor-pointer box-shadow-here"
          onClick={handleClick}
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
          className="relative text-white flex gap-[10px] justify-center items-center w-[320px] h-[48px] bg-[#6b4fbb] rounded-[8px] cursor-pointer box-shadow-here"
          onClick={handleClick}
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
        <div className="best fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] z-[100000] bg-[rgba(0,0,0,0.6)] flex justify-center items-center">
          <div className="z-[100001] w-[520px] bg-white text-black rounded-[10px] p-8 ">
            <div className=" h-[300px] overflow-auto">
              Dear User,
              <br />
              Before start, please pay close attention to the following
              information as it addresses a critical issue that may impact your
              experience. It is essential to read through the details carefully
              to understand the implications and the steps you may need to take.
              Your attention to this matter is highly appreciated.
              <br />
              <ul>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>1.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>2.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>3.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>4.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>1.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>2.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>3.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>4.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>1.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>2.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>3.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
                <li className="pl-3 flex gap-2 text-[14px] italic mt-1">
                  <p>4.</p>
                  <p className="pl-1">
                    Users are expected to use the app in a respectful and lawful
                    manner. Any form of harassment, abusive language, or
                    inappropriate content will not be tolerated and may result
                    in the termination of your account.
                  </p>
                </li>
              </ul>
              <br />
              Thank you.
            </div>
            <div className="flex justify-end w-full mt-5">
              <button className="bg-black text-[#fff] flex justify-center cursor-auto items-center rounded-[5px] h-[40px] px-4 opacity-[0.5]">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {showImage && (
        <div className="best fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] z-[1000000]">
          <div
            className="run text-[red] text-[30px] font-bold absolute cursor-pointer left-[50px] top-[50px] scale-animation"
            onClick={handleClose}
          >
            Run
          </div>
          <img
            className="w-auto h-full block m-auto"
            src="va.jpg"
            // src="https://m.media-amazon.com/images/I/81DO2H9zhwL._AC_UF1000,1000_QL80_.jpg"
            alt="github"
          />
          <div
            className="run text-[red] text-[50px] font-bold absolute cursor-pointer bottom-[150px] right-[150px] scale-animation"
            onClick={handleClose}
          >
            Run
          </div>
        </div>
      )}
      <audio ref={audioRef} src="cat.mp3" />
    </div>
  );
}
