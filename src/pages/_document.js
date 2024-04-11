import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body> 
        <nav className=" bg-black-800 p-4 flex justify-between items-center">
          <div className=" flex gap-4 items-center font-Russo text-yellow-500 text-xl font-bold">
            <Image src="/images/logo.png" width={150} height={150} alt="logo" />
            <div className="flex gap-8">
            <div>
              Home
            </div>
            <div>
              About us
            </div>
            </div>
            
          </div>
          <div className=" flex gap-8 items-center">
            <button className="bg-yellow-500 rounded-full px-3 py-2 text-md font-bold">
              Become a Talent
            </button>
            <button className="bg-yellow-500 rounded-full px-3 py-2 text-md font-bold">
              Become a Recruiter
            </button>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
