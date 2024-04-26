import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Athlete() {
  const router = useRouter();
  const athlete_id = router.query.id;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [interests, setInterests] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [isEdit, setIsEdit] = useState(false);
  const [showEditIcon, setShowEditIcon] = useState(false);

  const getAthleteData = async () => {
    try {
      if (athlete_id) {
        const { data } = await axios.get(
          `${
            process.env.NEXT_PUBLIC_BACKEND_URL
          }/profile/athlete/${athlete_id.toString()}`
        );

        const athleteToken = localStorage.getItem("token");
        const user = jwtDecode(athleteToken);

        if (data) {
          setFirstName(data.first_name ? data.first_name : "--");
          setLastName(data.last_name ? data.last_name : "--");
          setDescription(data.description ? data.description : "--");
          setProfession(data.profession ? data.profession : "--");
          setInterests(data.interests ? data.interests : "--");
          setEmail(user.sub);
          if (data.profle_image) {
            setPreviewImage(`data:image/jpeg;base64,${data.profile_image}`);
          }
        }
      }
    } catch (err) {
      console.log("error is", err);
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const storeAthleteData = async () => {
    try {
      if (athlete_id) {
        const formData = new FormData();
        formData.append("athlete_id", athlete_id);
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("description", description);
        formData.append("interests", interests);
        formData.append("profession", profession);
        formData.append("profile_image", selectedFile);

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/athlete`,
          formData,
          {
            "Content-Type": "multipart/form-data",
          }
        );

        toast.success(data.message, {
          position: "top-right",
        });
        setIsEdit(false);
      }
    } catch (err) {
      await getAthleteData();
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };

  const checkIfEdit = () => {
    const athleteToken = localStorage.getItem("token");
    const user = jwtDecode(athleteToken);

    console.log("user", user, athlete_id);

    if (
      user.hasOwnProperty("athlete_id") &&
      athlete_id === user.athlete_id.toString() &&
      user.role === "athlete"
    ) {
      setShowEditIcon(false);
    } else {
      setShowEditIcon(true);
    }
  };

  useEffect(() => {
    getAthleteData();
    checkIfEdit();
  }, [athlete_id]);
  return (
    <div>
      <div className="flex items-center gap-2 p-4">
        {/* name */}
        <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
          Create Your Profile
        </div>
        <div className="border-2 border-yellow-500 w-52 h-0"></div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center w-full  gap-4">
        <div className=" flex gap-4 p-4 justify-center min-h-96 w-full">
          <div className="bg-slate-50 shadow-xl p-6 w-1/3">
            {/* profile name section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {/* name */}
                <div className="font-Russo font-extrabold text-xl tracking-wider text-yellow-500">
                  {firstName} {lastName}
                </div>
                <div className="border-2 border-yellow-500 w-52 h-0"></div>
              </div>
              {/* player type */}
              <div className="font-Russo font-extrabold text-lg tracking-wider text-slate-800">
                {profession}
              </div>

              {/* profile image */}
              <div className="w-full flex flex-col justify-center items-center">
                <div className="rounded-full w-40 h-40 border-2 border-slate-500 relative">
                  <Image
                    className="rounded-full w-40 h-40"
                    src={
                      previewImage ? previewImage : "/images/blank-photo.jpg"
                    }
                    alt="no-profile"
                    fill={true}
                    style={{
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                </div>
                {isEdit && <input type="file" onChange={handleFileChange} />}
              </div>
            </div>
            {/* edit icon */}
            <div className="w-full flex justify-center items-center gap-6 my-8">
              <div className="w-11/12 pl-12 text-center font-Russo font-extrabold text-lg tracking-wider text-slate-800">
                Details
              </div>
              {isEdit || showEditIcon ? (
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div>
                  <div>Last Name</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div>
                  <div>Email</div>
                  <input
                    type="email"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    value={email}
                    editable={false}
                  />
                </div>
                <div>
                  <div>About Me</div>
                  <textarea
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    maxLength={1000}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div>
                  <div>Profession</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setProfession(e.target.value)}
                    value={profession}
                  />
                </div>
                <div>
                  <div>Interests</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setInterests(e.target.value)}
                    value={interests}
                  />
                </div>

                <div className="w-full flex justify-center items-center  gap-4 py-4">
                  <button
                    className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                    onClick={storeAthleteData}
                  >
                    Save Details
                  </button>
                  <button
                    className="bg-red-500 rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                    onClick={async () => {
                      setIsEdit(false);
                      await getAthleteData();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-8">
                <div>
                  <div className="font-bold">First Name</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {firstName}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Last Name</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {lastName}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {email}
                  </div>
                </div>
                <div>
                  <div className="font-bold">About Me</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {description}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Profession</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {profession}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Interests</div>
                  <div className="text-md tracking-wider text-slate-700">
                    {interests}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
