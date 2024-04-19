import Image from "next/image";

export default function Athletes() {
  return (
    <div>
      <div className="w-full h-96 flex p-2">
        {/* text section */}
        <div className="w-full h-full  flex flex-col justify-center items-center">
          <Image src="/images/logo.png" width={300} height={200} alt="logo" />

          <div className="capitalize text-black font-Russo font-extrabold text-4xl tracking-widest border-b-4 border-b-yellow-500 py-2 ">
          Clubs & Partners
          </div>
        </div>
      </div>
      {/* for players */}
      <div className=" flex gap-4 p-4">
        {/* left side */}
        <div>
          <Image
            src="/images/club_info.jpg"
            width={1000}
            height={400}
            alt="club"
          />
        </div>
        {/* right side */}
        <div className=" p-12 w-3/4 bg-slate-50 shadow-xl">
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
            <div className="font-medium text-lg text-gray-800 w-3/4">
              Many talented athletes struggle to get noticed by clubs and
              coaches, especially if they don't have access to extensive
              networks. AthleteSpot addresses this by providing a global
              platform for talents to showcase their abilities.
            </div>

            <div className="font-medium text-lg text-gray-800 w-3/4">
              AthleteSpot Sports Hub is an online platform designed to bridge
              the gap between emerging sports talents and clubs/coaches seeking
              new players. The platform serves as a centralized hub where
              athletes can showcase their skills and achievements, while clubs
              and coaches can efficiently discover, evaluate, and connect with
              potential talents
            </div>

            <div className="font-medium text-lg text-gray-800 w-3/4">
              AthleteSpot aims to revolutionize the multi-billion-dollar sports
              industry by serving as a dynamic platform dedicated to discovering
              and nurturing the next generation of sports superstars. With its
              expansive global reach, the platform becomes a pivotal player in
              fostering talent development, offering support to young athletes
              from their school and college years through to the culmination of
              their sports journeys. Beyond merely identifying and training
              athletes, AthleteSpot strives to elevate emerging sports by
              acting as a powerful marketing platform for new clubs,
              contributing to the broader growth and recognition of diverse
              athletic pursuits.
            </div>
            <button className="bg-black rounded-full w-1/2 px-3 py-2 text-md font-bold text-white hover:bg-yellow-500">
              Become a Recruiter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
