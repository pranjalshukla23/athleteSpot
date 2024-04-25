import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoFootball } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineCancel } from "react-icons/md";

export default function Athlete() {
  const [clubs, setClubs] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [showTrialPopup, setShowTrialPopup] = useState(false);
  const [trialPosts, setTrialPosts] = useState([]);
  const [appliedTrials, setAppliedTrials] = useState([]);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  function convertDateFormat(dateString) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Split the date string into year, month, and day
    const [year, monthIndex, day] = dateString.split("-");

    // Create a Date object
    const date = new Date(year, monthIndex - 1, day);

    // Get the month name from the months array
    const monthName = months[date.getMonth()];

    // Format the date in "Month Date" format
    const formattedDate = `${monthName} ${day}`;

    return formattedDate;
  }

  const getClubs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/clubs`
      );
      if (data.length > 0) {
        const clubsArr = data.map((club) => ({
          clubName: club.club_name,
          clubType: club.club_type,
          description: club.description,
          achievements:
            club.achievements.length > 0 ? club.achievements.join(",") : "--",
        }));
        setClubs(clubsArr);
      }
    } catch (err) {
      console.log("error is", err);
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };
  const getTrialsPost = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/trials`
      );
      if (data.length > 0) {
        const trialsArr = data.map((trial) => ({
          trialId: trial.trial_id,
          clubName: trial.club_name,
          trialName: trial.trial_name,
          sports: trial.sports,
          trialDate: convertDateFormat(trial.trial_date),
        }));
        setTrialPosts(trialsArr);
      }
    } catch (err) {
      console.log("error is", err);
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };

  const applyTrial = async (trialId) => {
    try {
      console.log("trial posts", trialPosts);
      console.log("trialId", trialId);
      const athleteToken = localStorage.getItem("token");
      const athlete = jwtDecode(athleteToken);
      const trialData = {
        athlete_id: athlete.athlete_id,
      };
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/apply/${trialId.toString()}`,
        trialData
      );
      const appliedTrialsArr = trialPosts.filter((t) => t.trialId === trialId);
      setAppliedTrials(appliedTrialsArr);
      toast.success("You have applied to trial successfully", {
        position: "top-right",
      });
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };

  const isAppliedTrial = (trialId) => {
    const appliedTrialsArr = appliedTrials.filter((t) => t.trialId === trialId);
    return appliedTrialsArr.length > 0;
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);

    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      setUploadedVideoUrl(reader.result);
      const newVideos = [...uploadedVideos];
      setUploadedVideos([...newVideos, reader.result]);
    };
    reader.readAsDataURL(file);

    setShowTrialPopup(false);
    setUploadedVideoUrl("");
    setSelectedVideo(null);
  };

  useEffect(() => {
    getClubs();
    getTrialsPost();
  }, []);

  return (
    <div>
      {showTrialPopup && (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-start p-4 bg-slate-100 opacity-100 z-30 ">
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
                    Career Highlights
                  </div>
                  <div className="border-2 border-yellow-500 w-60 h-0"></div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div>
                    <div className="my-2 font-bold text-lg">Upload Videos</div>

                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                    {uploadedVideoUrl && (
                      <div>
                        <p>Uploaded Video:</p>
                        <video controls>
                          <source
                            src={uploadedVideoUrl}
                            type={selectedVideo.type}
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex flex-col  justify-center items-center  gap-4 py-4">
                    <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Create a post
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center ">
          {/* 1st */}
          <div className="flex items-center w-1/2 h-20 p-2 bg-slate-50 shadow-xl gap-2">
            <div className="w-3/4 border-2 border-slate-200 bg-white rounded-md px-2 py-2">
              <input
                placeholder="Upload your career highlights"
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
      {/* Feeds */}
      <div>
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Career Highlights Feeds
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 pl-12 flex-wrap w-full justify-start items-center ">
          {uploadedVideos.map((video, index) => (
            <video
              controls
              key={index}
              autoPlay
              className="h-52 w-50 border-4 border-slate-300 shadow-lg rounded-md"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
      {/* clubs */}
      <div>
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Top Clubs
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center">
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`p-12 w-1/3 h-5/6 ${
                index % 2 === 0 ? "bg-slate-50" : "bg-purple-50"
              } shadow-xl`}
            >
              <div className="flex items-center gap-2"></div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4">
                  {/* <IoFootball className="w-20 h-20" /> */}
                  <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                    <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                      {club.clubName}
                    </div>
                    <div className="font-russo font-extrabold text-md text-gray-800 w-full">
                      {club.clubType}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <div>
                    <div className="font-medium text-lg  text-gray-600 w-full">
                      {club.description}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg italic text-gray-600 w-full">
                      {club.achievements}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* trials */}
      <div>
        <div className="flex gap-8 p-4 flex-wrap w-full pl-12 justify-start items-center">
          <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
            Top Picks For Trials
          </div>
          <div className="border-2 border-yellow-500 w-96 h-0"></div>
        </div>
        <div className="flex gap-8 p-4 flex-wrap w-full justify-center items-center">
          {trialPosts.map((trial, index) => (
            <div
              key={index}
              className={`p-12 w-1/3 h-5/6 ${
                index % 2 === 0 ? "bg-slate-50" : "bg-purple-50"
              } shadow-xl`}
            >
              <div className="flex items-center gap-2"></div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <IoFootball className="w-20 h-20" />
                  <div className="flex flex-col gap-1 justify-start items-start w-1/4">
                    <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800">
                      {trial.trialDate}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <div className="font-russo font-extrabold text-3xl text-gray-800 w-full">
                    {trial.trialName}
                  </div>
                  <div>
                    <div className="font-medium text-xl text-gray-600 w-full">
                      {trial.clubName}
                    </div>
                  </div>
                </div>
                {isAppliedTrial(trial.trialId) ? (
                  <div className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 disabled text-center">
                    Applied
                  </div>
                ) : (
                  <button
                    className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer"
                    onClick={() => {
                      applyTrial(trial.trialId);
                    }}
                  >
                    Apply
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
