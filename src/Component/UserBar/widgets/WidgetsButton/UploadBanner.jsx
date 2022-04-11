import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getBannerImg, getBannerLink } from "redux/CounterSlice";
import { useSelector } from "react-redux";
import UserModal from "../../General/UserModal";
import axios from "axios";

const UploadBanner = () => {
  const { bannerImg } = useSelector((state) => state.counter);
  const { bannerLink } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   const filePreview = URL.createObjectURL(e.target.files[0]);
  //   dispatch(getBannerImg(filePreview));
  //   e.target.value = null;
  //   return false;
  // };
  const handleChange = (e) => {
    const data = new FormData();
    data.append("user_id", localStorage.getItem("id"));
    data.append("image", e.target.files[0]);
    axios
      .post("https://app.signatize.io/api/image_upload", data)
      .then((res) => {
        console.log(res);
        dispatch(getBannerImg(res.data.data.image));
      })
      .catch((error) => {
        console.log(error);
      });

    // dispatch(getImages(e.target.files[0].name));
  };
  const handleFileUplaodFromURL = (e) => {
    dispatch(getBannerImg(e.target.value));
  };
  const removeBanner = () => {
    dispatch(getBannerImg(null));
  };

  return (
    <>
      <article>
        <hr />
        <div className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          {/* <h1 className="text-2xl font-semibold">Upload my banner</h1> */}
          <h1 className="text-lg font-semibold">
            Upload your banner (JPG, PNG,GIF)
          </h1>
          <h1 className="text-md font-semibold text-gray-400">
            For best image quality, we recommend to use up to 520px width
          </h1>
          {bannerImg === null ? null : (
            <button
              onClick={removeBanner}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
            >
              remove{" "}
            </button>
          )}
          <section className="grid gap-3 mt-4 justify-items-center mb-5 border-4 border-dotted bg-gray-100 px-5 py-4 ">
            <button className="font-bold image-upload  py-2 px-8 rounded inline-flex gap-3 text-white bg-blue-400">
              <label
                for="file-input"
                className="cursor-pointer flex items-center gap-4"
              >
                <MdCloudUpload fontSize="30" />
                <span className="text-xl">Choose file to upload</span>
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  placeholder="upload-images"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </button>
          </section>
          {/* BANNER URL */}
          <section className=" justify-items-center mb-5 ">
            <div className="flex items-center gap-1 ">
              <h1>Banner URL</h1>
              <input
                className="appearance-none block w-60 bg-gray-100  text-black border  border-gray-200 text-sm
                rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={bannerLink}
                placeholder="https://"
                onChange={(e) => dispatch(getBannerLink(e.target.value))}
              />
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default UploadBanner;
