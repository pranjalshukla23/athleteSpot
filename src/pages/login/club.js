import Image from "next/image";
import Link from "next/link";

export default function clubs() {
  return (
    <div className="mt-6 flex flex-col justify-center items-center w-full gap-4">
      <Image src="/images/logo.png" width={200} height={200} alt="logo" />
      <div className=" flex gap-4 p-4 justify-center min-h-96 w-full">
        <div className="bg-slate-50 shadow-xl p-6 w-1/3">
          <div className="flex items-center gap-2">
            <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
              Login as club
            </div>
            <div className="border-2 border-yellow-500 w-60 h-0"></div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <div>Email:</div>
              <input
                type="email"
                className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
              />
            </div>
            <div>
              <div>Password:</div>
              <input
                type="password"
                className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
              />
            </div>
            <div className="w-full flex flex-col  justify-center items-center  gap-4 py-4">
              <Link href="/clubs/info">
                <button className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer">
                  Login
                </button>
              </Link>
              <div>
                <div className="flex gap-2">
                  <div className="text-gray-500">Don't have an account?</div>
                  <Link
                    className="text-blue-500 hover:text-blue-800"
                    href="/signup/club"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
