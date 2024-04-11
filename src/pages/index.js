import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-96 flex p-4">
      {/* text section */}
      <div className="w-1/2 h-full border-r-8 border-yellow-500 flex flex-col justify-center items-center">
      <Image src="/images/logo.png" width={300} height={200} alt="logo" />
      {/* text */}
      <div className="font-Russo text-xl text-gray-500 flex">Empowering &nbsp; <div className="font-bold text-black">
      Athletes. &nbsp; </div>  Connecting &nbsp; <div className="font-bold text-black"> Dreams. &nbsp;</div> Welcome to &nbsp; <div className="font-bold text-black">  AthleteSpot!</div></div>

      {/* CTAS */}
      <div className=" flex gap-8 items-center mt-8">
            <button className="bg-black rounded-full px-3 py-2 text-md font-bold hover:bg-yellow-500">
              Become a Talent
            </button>
            <button className="bg-black rounded-full px-3 py-2 text-md font-bold hover:bg-yellow-500">
              Become a Recruiter
            </button>
          </div>
      </div>
     {/* video section */}
     <div className="opacity-70 h-full w-1/2">
     <video src="videos/soccer-video.mp4" autoPlay loop muted className="h-full "/>
     </div>
    
    </div>
  );
}
