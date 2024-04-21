import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className=" bg-black-800 px-4 flex justify-between items-center border-b-2 border-b-gray-100">
          <div className=" flex gap-8 items-center font-Russo text-slate-700  text-xl font-extrabold">
            <Image src="/images/logo.png" width={150} height={150} alt="logo" />
            <div className="flex gap-12">
              <div className="cursor-pointer hover:text-black">
                <Link href="/">Home</Link>
              </div>
              <div className="cursor-pointer hover:text-black">
                <Link href="/about-us">About Us</Link>
              </div>
            </div>
          </div>
          <div className=" flex gap-8 items-center">
            <div className="flex gap-2 items-center">
              <Link href="/login/athlete">
                <div className="font-bold p-2 px-4 bg-black text-white rounded-full cursor-pointer hover:bg-orange-500">
                  Login as Athlete
                </div>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
            <Link href="/login/club">
              <div className="font-bold p-2 px-4 bg-black text-white rounded-full cursor-pointer hover:bg-orange-500">
                Login as Club
              </div>
              </Link>
            </div>
          </div>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
