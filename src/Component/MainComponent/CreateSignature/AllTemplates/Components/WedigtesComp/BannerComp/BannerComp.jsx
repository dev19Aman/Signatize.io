import React from "react";
import { useSelector } from "react-redux";

const BannerComp = () => {
  const { bannerImg } = useSelector((state) => state.counter);
  const { bannerLink } = useSelector((state) => state.counter);
  return (
    <>
      {bannerLink === "" ? (
        <span
          style={{
            width: "520px",
            height: "80px",
          }}
        >
          {bannerImg ? (
            <img
              src={bannerImg}
              alt=""
              // className="mt-2 w-52 h-12 object-cover"
              style={{ objectFit: "cover", width: "520px", height: "80px" }}
            />
          ) : (
            ""
          )}
        </span>
      ) : (
        <a href={bannerLink} target="_blank">
          <span
            style={{
              width: "520px",
              height: "80px",
            }}
          >
            {bannerImg ? (
              <img
                src={bannerImg}
                alt=""
                // className="mt-2 w-52 h-12 object-cover"
                style={{ objectFit: "cover", width: "520px", height: "80px" }}
              />
            ) : (
              ""
            )}
          </span>
        </a>
      )}
    </>
  );
};

export default BannerComp;
