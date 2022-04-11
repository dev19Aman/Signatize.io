import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBannerImg, getBannerLink } from "../../../../redux/CounterSlice";
import axios from "axios";
import { baseUrl } from "../../../../services/BaseUrl";
import { getBanner } from "redux/bannerSlice";
import { useSelector } from "react-redux";
import ReactImageAppear from "react-image-appear";
import Loading from "Pages/Login/Loading";

const PredesignedBanner = () => {
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.banner);
  const { bannerImg } = useSelector((state) => state.counter);
  const { bannerLink } = useSelector((state) => state.counter);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/get_banners_list").then((res) => {
        console.log(res.data);
        dispatch(getBanner(res.data.data));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeBanner = () => {
    dispatch(getBannerImg(null));
  };

  const handleFileUplaodFromURL = (e) => {
    dispatch(getBannerImg(e.target.value));
  };
  return (
    <>
      <article>
        <hr />
        <div className="grid gap-2 w-full items-center justify-items-start mt-5 ">
          <div className="flex  w-full gap-24">
            <h1 className="2xl:text-lg ml-6 text-md font-semibold">
              Choose your banner
            </h1>
            {bannerImg === null ? null : (
              <button
                onClick={removeBanner}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                remove{" "}
              </button>
            )}
          </div>
          <section className="grid w-11/12 mx-auto gap-3 mt-2 justify-items-center mb-2">
            {banner.length > 0 ? (
              banner.map((v, i) => (
                <ReactImageAppear
                  key={i}
                  src={v.image}
                  onClick={() => dispatch(getBannerImg(v.image))}
                  alt="banner"
                  className="bg-cover w-80 h-16"
                />
              ))
            ) : (
              <div className="w-16 mx-auto ">
                <Loading type="ThreeDots" color="#777" width={60} height={40} />
              </div>
            )}
          </section>
          {/* BANNER URL */}
          <section className="grid w-10/12 mx-auto gap-3 mt-2 justify-items-center mb-5">
            <div className="flex items-center gap-1 ">
              <h1>Banner URL</h1>
              <input
                className="appearance-none block w-56 bg-gray-100  text-black border  border-gray-200 text-sm
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

export default PredesignedBanner;
