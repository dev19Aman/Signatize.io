import React, { useState } from "react";
import UserModal from "./UserModal";
import AnimateModal from "./AnimateModal";
import uploadIcon from "../../image/upload.png";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import "animate.css";
import {
  getName,
  getCompany,
  getPhonenumber,
  getMobilenumber,
  getWebsite,
  getEmail,
  getAddress,
  getImages,
} from "redux/generalSlice";
import Loading from "Pages/Login/Loading";
const Index = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { imageAnimationDesign } = useSelector((state) => state.design);
  const {
    name,
    company,
    phonenumber,
    mobilenumber,
    email,
    website,
    address,
    images,
  } = useSelector((state) => state.general);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [deleteImage, setDeleteImage] = useState(false);
  const handleDeleteImage = () => {
    dispatch(getImages(null));
  };
  return (
    <div
      className="overflow-x-hidden"
      style={{ paddingBottom: 10, height: "81vh" }}
    >
      <main className="flex justify-around ml-5 mt-4 mb-6 animate__animated animate__fadeInRight animate__faster ">
        <div>
          <p style={{ color: "black", fontWeight: 1000 }}>SIGNATURE GENERAL</p>
          <ul className="grid gap-4 mt-3">
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={name}
              placeholder="your name"
              onChange={(e) => dispatch(getName(e.target.value))}
            />
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => dispatch(getCompany(e.target.value))}
            />
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Phone"
              type="text"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => dispatch(getPhonenumber(e.target.value))}
            />

            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Mobile Number"
              value={mobilenumber}
              onChange={(e) => dispatch(getMobilenumber(e.target.value))}
            />
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Websites"
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => dispatch(getWebsite(e.target.value))}
            />
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(getEmail(e.target.value))}
            />
            <input
              className="shadow-sm appearance-none border rounded-lg w-72 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Address"
              type="text"
              value={address}
              placeholder="Address"
              onChange={(e) => dispatch(getAddress(e.target.value))}
            />
          </ul>
        </div>
        {/* USER BUTTON*/}
        <div>
          <button
            className="w-32 h-40 border-2 mt-9 rounded-lg"
            onClick={handleOpen}
          >
            {deleteImage ? (
              <div className=" z-10">
                <div className="w-28 h-32 mx-auto">
                  <img src={uploadIcon} alt="image" />
                </div>
              </div>
            ) : (
              <div>
                {images && (
                  <img
                    src={images}
                    alt="image"
                    className={`w-32 h-36 rounded-lg ${imageAnimationDesign}`}
                  />
                )}
              </div>
            )}
          </button>
          <UserModal open={open} handleClose={handleClose} />
          <div className="bold justify-center flex items-center gap-2 text-blue-400">
            <AnimateModal />
            <button className="text-blue-400" onClick={handleDeleteImage}>
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
