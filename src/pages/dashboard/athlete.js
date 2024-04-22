import Link from "next/link";
import { IoFootball } from "react-icons/io5";

export default function Athlete() {
  return (
    <div>
      <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
        <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
         Top Picks For Trials
        </div>
        <div className="border-2 border-yellow-500 w-96 h-0"></div>
      </div>
      <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center">
        {/* 1st */}
        <div className=" p-12 w-1/3 h-5/6 bg-slate-50 shadow-xl">
          <div className="flex items-center gap-2"></div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <IoFootball className="w-20 h-20" />
              <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                <div className="font-Russo font-medium text-2xl tracking-wider text-gray-800">
                  May
                </div>
                <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                  4
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="font-russo font-extrabold text-3xl text-gray-800 w-full">
                Football Trial Barcelona
              </div>
              <div>
                <div className="font-medium text-xl text-gray-600 w-full">
                  15:00 - 17:00
                </div>
                <div className="font-medium text-xl text-gray-600 w-full">
                  Football
                </div>
              </div>
            </div>

            <Link href="/athletes/info">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                Apply
              </button>
            </Link>
          </div>
        </div>
        {/* 2nd */}
        <div className=" p-12 w-1/3 h-5/6 bg-purple-50 shadow-xl">
          <div className="flex items-center gap-2"></div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <IoFootball className="w-20 h-20" />
              <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                <div className="font-Russo font-medium text-2xl tracking-wider text-gray-800">
                  June
                </div>
                <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                  10
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="font-russo font-extrabold text-3xl text-gray-800 w-full">
                Tennis Trial Barcelona
              </div>
              <div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  15:00 - 17:00
                </div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  Tennis
                </div>
              </div>
            </div>

            <Link href="/athletes/info">
              <button className="bg-orange-500 rounded-full px-3 py-2 text-md font-bold text-white hover:bg-black w-40 cursor-pointer">
                Apply
              </button>
            </Link>
          </div>
        </div>
        {/* 3rd */}
        <div className=" p-12 w-1/3 h-5/6 bg-slate-50 shadow-xl">
          <div className="flex items-center gap-2"></div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <IoFootball className="w-20 h-20" />
              <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                <div className="font-Russo font-medium text-2xl tracking-wider text-gray-800">
                  June
                </div>
                <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                  15
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="font-russo font-extrabold text-3xl text-gray-800 w-full">
                Basketball Trial Barcelona
              </div>
              <div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  15:00 - 17:00
                </div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  Basketball
                </div>
              </div>
            </div>

            <Link href="/athletes/info">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                Apply
              </button>
            </Link>
          </div>
        </div>
        {/* 4th */}
        <div className=" p-12 w-1/3 h-5/6 bg-purple-50 shadow-xl">
          <div className="flex items-center gap-2"></div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <IoFootball className="w-20 h-20" />
              <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                <div className="font-Russo font-medium text-2xl tracking-wider text-gray-800">
                  July
                </div>
                <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                  16
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="font-russo font-extrabold text-3xl text-gray-800 w-full">
                Swimming Trial Barcelona
              </div>
              <div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  15:00 - 17:00
                </div>
                <div className="font-medium  text-xl text-gray-600 w-full">
                  Swimming
                </div>
              </div>
            </div>

            <Link href="/athletes/info">
              <button className="bg-orange-500 rounded-full px-3 py-2 text-md font-bold text-white hover:bg-black w-40 cursor-pointer">
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
