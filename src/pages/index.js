import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full h-96 flex p-4 mb-12 gap-4">
        {/* text section */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <Image src="/images/logo.png" width={300} height={200} alt="logo" />
          {/* text */}
          <div className="font-Russo text-xl text-gray-500 flex">
            Empowering &nbsp;{" "}
            <div className="font-bold text-black">Athletes. &nbsp; </div>{" "}
            Connecting &nbsp;{" "}
            <div className="font-bold text-black"> Dreams. &nbsp;</div> Welcome
            to &nbsp; <div className="font-bold text-black"> AthleteSpot!</div>
          </div>

          {/* CTAS */}
          <div className=" flex gap-8 items-center mt-8">
            <Link href="/signup/athlete">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500">
                Become a Talent
              </button>
            </Link>
            <Link href="/signup/club">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500">
                Become a Recruiter
              </button>
            </Link>
          </div>
        </div>
        {/* video section */}
        <div className="opacity-80 h-full w-1/2 ">
          <video
            src="videos/football_video.mp4"
            autoPlay
            loop
            muted
            className="h-full border-t-8 border-b-8 border-yellow-500"
          />
        </div>
      </div>
      {/* for players */}
      <div className=" flex gap-4 p-4">
        {/* left side */}
        <div>
          <Image
            src="/images/students_training.jpg"
            width={1000}
            height={400}
            alt="training"
          />
        </div>
        {/* right side */}
        <div className=" p-12 w-3/4 bg-slate-50 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
              For Players
            </div>
            <div className="border-2 border-yellow-500 w-96 h-0"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800 py-4">
              The place to be for young Footballers
            </div>
            <div className="font-medium text-xl text-gray-800 w-3/4">
              We serve as a dynamic platform dedicated to discovering and
              nurturing the next generation of sports superstars.
            </div>
            <Link href="/athletes/info">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* for clubs and partners */}
      <div className=" flex gap-4 p-4">
        {/* left side */}
        <div>
          <Image
            src="/images/club.jpg"
            width={1000}
            height={400}
            alt="training"
          />
        </div>
        {/* right side */}
        <div className="bg-slate-50 shadow-xl p-12 w-3/4">
          <div className="flex items-center gap-2">
            <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
              For Clubs & Partners
            </div>
            <div className="border-2 border-yellow-500 w-96 h-0"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="font-Russo font-extrabold text-4xl tracking-wider text-gray-800 py-4">
              Join the pack
            </div>
            <div className="font-medium text-xl text-gray-800 w-3/4">
              We strive to elevate emerging sports by acting as a powerful
              marketing platform for new clubs, contributing to the broader
              growth and recognition of diverse athletic pursuits
            </div>
            <Link href="/clubs/info">
              <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-40 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
