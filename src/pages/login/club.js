import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function Club() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = async () => {
    try {
      if (email === "" || password === "") {
        console.log("error");
        toast.error("Please fill all the fields", {
          position: "top-right",
        });
      } else {
        const clubData = {
          email,
          password,
        };

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/club`,
          clubData
        );

        // {sub: 'fcmadrid@gmail.com', club_name: 'FC Madrid', club_id: 2, role: 'club', exp: 1713906041}

        if ("token" in data) {
          localStorage.setItem("token", data.token);
          const token = data.token;
          const user = jwtDecode(token);
          console.log("decoded", user);
          router.push("/dashboard/club");
        }
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };
  return (
    <div className="mt-6 flex flex-col justify-center items-center w-full gap-4">
      {/* <Image src="/images/logo.png" width={200} height={200} alt="logo" /> */}
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
              <div>Email</div>
              <input
                type="email"
                className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div>Password</div>
              <input
                type="password"
                className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col  justify-center items-center  gap-4 py-4">
              <button
                className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                onClick={login}
              >
                Login
              </button>

              <div>
                <div className="flex gap-2">
                  <div className="text-gray-500">
                    Don&apos;t have an account?
                  </div>
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
      <ToastContainer />
    </div>
  );
}
