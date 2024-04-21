import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";

export default function Athlete() {
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
                John Doe
              </div>
              <div className="border-2 border-yellow-500 w-52 h-0"></div>
            </div>
            {/* player type */}
            <div className="font-Russo font-extrabold text-lg tracking-wider text-slate-800">
              Football Player
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
                <div>First Name</div>
                <input
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>
              <div>
                <div>Last Name</div>
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
                <div>About Me</div>
                <textarea
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                  maxLength={1000}
                />
              </div>
              <div>
                <div>Profession</div>
                <input
                  type="text"
                  className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                />
              </div>
              <div>
                <div>Interests</div>
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
                <div className="font-bold">First Name</div>
                <div className=" text-md tracking-wider text-slate-700">
                  John{" "}
                </div>
              </div>
              <div>
                <div className="font-bold">Last Name</div>
                <div className=" text-md tracking-wider text-slate-700">
                  Doe{" "}
                </div>
              </div>
              <div>
                <div className="font-bold">Email</div>
                <div className=" text-md tracking-wider text-slate-700">
                  johndoe@gmail.com
                </div>
              </div>
              <div>
                <div className="font-bold">About Me</div>
                <div className=" text-md tracking-wider text-slate-700">
                  In the world of football, John Doe emerges as a dynamic force,
                  blending athleticism, skill, and unwavering determination.
                  From the early days of honing their craft on the streets to
                  gracing the grandest stages of the sport, John Doe embodies
                  versatility and technical prowess. Whether orchestrating plays
                  in midfield, surging forward with blistering pace, or
                  marshaling the defense with stoic resolve, their adaptability
                  sets them apart. With a keen eye for goal and an innate
                  leadership ability, John Doe inspires teammates and strikes
                  fear into opponents, leaving an indelible mark on every match
                  they grace.
                </div>
              </div>
              <div>
                <div className="font-bold">Profession</div>
                <div className=" text-md tracking-wider text-slate-700">
                  Football Player
                </div>
              </div>
              <div>
                <div className="font-bold">Interests</div>
                <div className="text-md tracking-wider text-slate-700">
                  Football, Tennis, Basketball
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
