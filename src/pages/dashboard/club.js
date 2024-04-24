import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";
import { useState } from "react";
import { IoFootball } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Club() {
  const [showTrialPopup, setShowTrialPopup] = useState(false);
  const [clubName, setClubName] = useState("");
  const [trialName, setTrialName] = useState("");
  const [sports, setSports] = useState("");
  const [date, setDate] = useState("");
  const createTrial = async () => {
    try {
      if (clubName === "" || trialName === "" || sports === "" || date === "") {
        console.log("error");
        toast.error("Please fill all the fields", {
          position: "top-right",
        });
      } else {
        const clubToken = localStorage.getItem("token");
        const club = jwtDecode(clubToken);
        const trialData = {
          trial_name: trialName,
          sports: sports,
          trial_date: date,
          club_id: club.club_id.toString(),
        };

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/new/trial`,
          trialData
        );

        toast.success("Trial created successfully", {
          position: "top-right",
        });

        showTrialPopup(false);
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };

  
  return (
    <div className=" relative">
      {showTrialPopup && (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center p-4 bg-slate-100 opacity-100 z-30">
          <div className="mt-6 flex flex-col justify-center items-center w-full gap-4">
            {/* <Image src="/images/logo.png" width={200} height={200} alt="logo" /> */}
            <div className=" flex gap-4 p-4 justify-center min-h-96 w-full">
              <div className="bg-slate-50 shadow-xl p-6 w-3/4 relative">
                <div className="absolute right-4">
                  <MdOutlineCancel
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => setShowTrialPopup(false)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
                    Trial Post
                  </div>
                  <div className="border-2 border-yellow-500 w-60 h-0"></div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div>
                    <div>Club Name</div>
                    <input
                      type="text"
                      className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                      onChange={(e) => setClubName(e.target.value)}
                      value={clubName}
                    />
                  </div>
                  <div>
                    <div>Trial Name</div>
                    <input
                      type="text"
                      className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                      onChange={(e) => setTrialName(e.target.value)}
                      value={trialName}
                    />
                  </div>
                  <div>
                    <div>Sports </div>
                    <input
                      type="text"
                      className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                      onChange={(e) => setSports(e.target.value)}
                      value={sports}
                    />
                  </div>
                  <div>
                    <div>Trial Date</div>
                    <input
                      type="date"
                      className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                    />
                  </div>
                  <div className="w-full flex flex-col  justify-center items-center  gap-4 py-4">
                    <button
                      className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                      onClick={createTrial}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* create a trial */}

      <div>
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Start A Trial
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center ">
          {/* 1st */}
          <div className="flex items-center w-1/2 h-20 p-2 bg-slate-50 shadow-xl gap-2">
            <div className="w-3/4 border-2 border-slate-200 bg-white rounded-md px-2 py-2">
              <input
                placeholder="start your sports trial"
                className="w-full  focus:outline-none focus:ring-0"
                onFocus={() => setShowTrialPopup(true)}
              />
            </div>
            <button
              className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer"
              onClick={() => setShowTrialPopup(true)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      {/* suggested interests */}
      <div className="z-10">
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Suggested Interests
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center">
          {/* 1st */}
          <div className=" p-12 w-1/3 h-[26rem] bg-slate-50 shadow-xl">
            <div className="h-2/3 relative ">
              <Image
                src="/images/athlete1.jpg"
                alt="Football"
                fill={true}
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="w-full flex flex-col gap-1">
                <div className="font-russo font-extrabold text-xl text-gray-800 w-full">
                  John Doe
                </div>
                <div>
                  <div className="font-medium text-lg text-gray-600 w-full">
                    Age: 25 years
                  </div>
                  <div className="font-medium text-lg text-gray-600 w-full">
                    Football Player
                  </div>
                </div>
              </div>

              <Link href="/athletes/info">
                <button className="bg-black rounded-full px-3 py-2 text-sm font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                  Connect
                </button>
              </Link>
            </div>
          </div>
          {/* 2nd */}
          <div className=" p-12 w-1/3 h-[26rem] bg-purple-50 shadow-xl">
            <div className="h-2/3 relative ">
              <Image
                src="/images/athlete1.jpg"
                alt="Football"
                fill={true}
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="w-full flex flex-col gap-1">
                <div className="font-russo font-extrabold text-xl text-gray-800 w-full">
                  John Doe
                </div>
                <div>
                  <div className="font-medium text-lg text-gray-600 w-full">
                    Age: 25 years
                  </div>
                  <div className="font-medium text-lg text-gray-600 w-full">
                    Football Player
                  </div>
                </div>
              </div>

              <Link href="/athletes/info">
                <button className="bg-black rounded-full px-3 py-2 text-sm font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                  Connect
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
