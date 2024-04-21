import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

export default function Club() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="mt-6 flex flex-col justify-center items-center w-full  gap-4">
      <div className=" flex gap-4 p-4 justify-center min-h-96 w-full">
        <div className="bg-slate-50 shadow-xl p-6 w-1/3">
          {/* profile name section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* name */}
              <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
                FC Barcelona
              </div>
              <div className="border-2 border-yellow-500 w-52 h-0"></div>
            </div>
            {/* player type */}
            <div className="font-Russo font-extrabold text-lg tracking-wider text-slate-800">
              Soccer Club
            </div>

            {/* profile image */}
            <div className="w-full flex justify-center items-center">
              <div className="rounded-full w-40 h-40 border-2 border-slate-500 relative">
                <Image
                  className="rounded-full w-40 h-40"
                  src="/images/blank-photo.jpg"
                  alt="no-profile"
                  fill={true}
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
          </div>
          {/* edit icon */}
          <div className="w-full flex justify-center items-center gap-6 my-8">
            <div className="w-11/12 pl-12 text-center font-Russo font-extrabold text-lg tracking-wider text-slate-800">
              Details
            </div>
            {isEdit ? (
              <MdOutlineModeEditOutline
                className="invisible w-8 h-8 cursor-pointer hover:text-orange-500"
                onClick={() => setIsEdit(true)}
              />
            ) : (
              <MdOutlineModeEditOutline
                className="w-8 h-8 cursor-pointer hover:text-orange-500"
                onClick={() => setIsEdit(true)}
              />
            )}
          </div>
          {isEdit ? (
            <div className="flex flex-col gap-4 mt-8">
              <div>
                <div>Club Name</div>
                <input
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>
              <div>
                <div>Email</div>
                <input
                  type="email"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>
              <div>
                <div>Description</div>
                <textarea
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                  maxLength={1000}
                />
              </div>
              <div>
                <div>Club Type</div>
                <input
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>
              <div>
                <div>Achivements</div>
                <input
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>

              <div className="w-full flex justify-center items-center  gap-4 py-4">
                <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer">
                  Save Details
                </button>
                <button className="bg-red-500 rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-8">
              <div>
                <div className="font-bold">Club Name</div>
                <div className=" text-md tracking-wider text-slate-700">
                  FC Barcelona
                </div>
              </div>

              <div>
                <div className="font-bold">Email</div>
                <div className=" text-md tracking-wider text-slate-700">
                  fcbarcelona@gmail.com
                </div>
              </div>
              <div>
                <div className="font-bold">Description</div>
                <div className=" text-md tracking-wider text-slate-700">
                  FC Barcelona&apos;s illustrious history is punctuated by a
                  glittering array of trophies, forged through decades of
                  unparalleled success on both domestic and international
                  fronts. With a record number of La Liga titles, Copa del Rey
                  triumphs, and UEFA Champions League victories, the club has
                  etched its name in the annals of footballing lore, captivating
                  the hearts and minds of fans around the globe. From the
                  legendary Dream Team under Johan Cruyff to the era-defining
                  reign of Pep Guardiola and the modern-day brilliance
                  orchestrated by the likes of Lionel Messi, FC Barcelona&apos;s
                  legacy is woven with the threads of greatness, each triumph a
                  testament to the club&apos;s unwavering pursuit of excellence.
                </div>
              </div>
              <div>
                <div className="font-bold">Club Type</div>
                <div className=" text-md tracking-wider text-slate-700">
                  Soccer Club
                </div>
              </div>
              <div>
                <div className="font-bold">Achivements</div>
                <div className="text-md tracking-wider text-slate-700">
                  La Liga Titles: 26, Copa del Rey Titles: 31, UEFA Champions
                  League Titles: 5
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
