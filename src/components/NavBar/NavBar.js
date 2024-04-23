import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("here...");
    const token = localStorage.getItem("token");
    setIsLoggedIn(token != null);
  }, []);
  return (
    <nav className=" bg-black-800 px-4 flex justify-between items-center border-b-2 border-b-gray-100">
      <div className=" flex gap-8 items-center font-Russo text-slate-700  text-xl font-extrabold">
        <Image src="/images/logo.png" width={150} height={150} alt="logo" />
        <div className="flex gap-12">
          <div className="cursor-pointer hover:text-black">
            <Link href="/">Home </Link>
          </div>
          <div className="cursor-pointer hover:text-black">
            <Link href="/about-us">About Us</Link>
          </div>
        </div>
      </div>
      {isLoggedIn ? (
        <div
          className="rounded-full w-8 h-8 border-2 border-black flex justify-center items-center cursor-pointer hover:bg-slate-200"
          onClick={() => {
            const role = localStorage.getItem("user_role");
            console.log(role);
            router.push(`/profile/${role === "athlete" ? "athlete" : "club"}`);
          }}
        >
          <FaRegUser />
        </div>
      ) : (
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
      )}
    </nav>
  );
}
