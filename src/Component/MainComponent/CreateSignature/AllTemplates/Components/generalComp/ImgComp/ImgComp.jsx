import React from "react";
import { useSelector } from "react-redux";
import { imageType } from "Utils/Constant";
const ImgComp = ({ img }) => {
  const { general, design } = useSelector((state) => state);

  const { imgSize, imgShape, imageAnimationDesign, imageLink, imageAnimation } =
    design;
  const { images } = general;
  const { grayscale, blur, brightness, contrast, hue_rotate, invert } =
    imageType;

  var imageFilter = "";
  if (imageAnimationDesign === grayscale) {
    imageFilter = "grayscale(100%)";
  } else if (imageAnimationDesign === blur) {
    imageFilter = "blur(3px)";
  } else if (imageAnimationDesign === brightness) {
    imageFilter = "brightness(2)";
  } else if (imageAnimationDesign === contrast) {
    imageFilter = "contrast(2)";
  } else if (imageAnimationDesign === hue_rotate) {
    imageFilter = "hue-rotate(180deg)";
  } else if (imageAnimationDesign === invert) {
    imageFilter = "invert(100%)";
  }

  return (
    <>
      <span>
        {imageLink ? (
          <a href={imageLink} target="_blank">
            <img
              src={images === "" ? null : images}
              // className={` ${imageAnimationDesign}`}
              style={{
                // margin: 10,
                height: imgSize ? `${imgSize + 40}px` : "80px",
                width: imgSize ? `${imgSize + 40}px` : "80px",
                borderRadius: `${imgShape}% `,
                // transition: "ease-in-out .4s",
                // filter: "invert(100%)",
                filter: imageFilter,
              }}
            />
          </a>
        ) : (
          <img
            src={images === "" ? null : images}
            // className={` ${imageAnimationDesign}`}
            style={{
              // margin: 10,
              height: imgSize ? `${imgSize + 40}px` : "80px",
              width: imgSize ? `${imgSize + 40}px` : "80px",
              borderRadius: `${imgShape}% `,
              // transition: "ease-in-out .4s",
              // filter: "invert(100%)",
              filter: imageFilter,
            }}
          />
        )}
      </span>
    </>
  );
};

export default ImgComp;
