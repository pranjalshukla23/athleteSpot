import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useRouter } from "next/router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

export default function Club() {
  const router = useRouter();
  const club_id = router.query.id;
  const [isEdit, setIsEdit] = useState(false);
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [clubType, setClubType] = useState("");
  const [achivements, setAchivements] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showEditIcon, setShowEditIcon] = useState(false);

  const getClubData = async () => {
    try {
      if (club_id) {
        const { data } = await axios.get(
          `${
            process.env.NEXT_PUBLIC_BACKEND_URL
          }/profile/club/${club_id.toString()}`
        );

        const clubToken = localStorage.getItem("token");

        const user = jwtDecode(clubToken);

        if (data) {
          setClubName(data["club_name"]);
          setClubType(data.club_type ? data.club_type : "--");
          setDescription(data.description ? data.description : "--");
          setAchivements(data.achievements ? data.achievements : "--");
          setEmail(user.sub);
          if (data.profile_image) {
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

  const storeClubData = async () => {
    try {
      if (club_id) {
        const clubToken = localStorage.getItem("token");
        const user = jwtDecode(clubToken);
        console.log("club is", user);
        const formData = new FormData();
        formData.append("club_id", club_id);
        formData.append("club_name", clubName);
        formData.append("club_type", clubType);
        formData.append("description", description);
        formData.append("achievements", achivements.split(","));
        formData.append("profile_image", selectedFile);
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/club`,
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
      await getClubData();
      toast.error(err.message, {
        position: "top-right",
      });
    }
  };
  const checkIfEdit = () => {
    const athleteToken = localStorage.getItem("token");
    const user = jwtDecode(athleteToken);

    console.log("user is", user);
    console.log("club id", club_id);

    if (
      user.hasOwnProperty("club_id") &&
      club_id === user.club_id.toString() &&
      user.role === "club"
    ) {
      setShowEditIcon(false);
    } else {
      setShowEditIcon(true);
    }
  };

  useEffect(() => {
    getClubData();
    checkIfEdit();
  }, [club_id]);
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
                  {clubName}
                </div>
                <div className="border-2 border-yellow-500 w-52 h-0"></div>
              </div>
              {/* player type */}
              <div className="font-Russo font-extrabold text-lg tracking-wider text-slate-800">
                {clubType}
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
                  <div>Club Name</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setClubName(e.target.value)}
                    value={clubName}
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
                  <div>Description</div>
                  <textarea
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    maxLength={1000}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div>
                  <div>Club Type</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setClubType(e.target.value)}
                    value={clubType}
                  />
                </div>
                <div>
                  <div>Achivements</div>
                  <input
                    type="text"
                    className="border-2 border-slate-300 w-full px-2 py-1 rounded-md"
                    onChange={(e) => setAchivements(e.target.value)}
                    value={achivements}
                  />
                </div>

                <div className="w-full flex justify-center items-center  gap-4 py-4">
                  <button
                    className="bg-black rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                    onClick={storeClubData}
                  >
                    Save Details
                  </button>
                  <button
                    className="bg-red-500 rounded-full px-3 py-2 text-md font-bold text-white hover:bg-orange-500 w-60 cursor-pointer"
                    onClick={async () => {
                      setIsEdit(false);
                      await getClubData();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-8">
                <div>
                  <div className="font-bold">Club Name</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {clubName}
                  </div>
                </div>

                <div>
                  <div className="font-bold">Email</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    fcbarcelona@gmail.com
                  </div>
                </div>
                <div>
                  <div className="font-bold">Description</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {description}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Club Type</div>
                  <div className=" text-md tracking-wider text-slate-700">
                    {clubType}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Achivements</div>
                  <div className="text-md tracking-wider text-slate-700">
                    {achivements}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
