// import React from "react";
// import { buttonType, buttonSize } from "Utils/Constant";
// import { useSelector } from "react-redux";

// const CTAComp = () => {
//   const { ctaButton, videoConferenceInfo } = useSelector(
//     (state) => state.counter
//   );

//   const { color, text, url, type, size } = ctaButton;
//   const { videoUrl, VideoIcon, videoText, shape, height, marginTop } =
//     videoConferenceInfo;

//   const { full, light, link } = buttonType;
//   const { small, medium, large } = buttonSize;

//   // get the button size
//   const getButtonSize = () => {
//     if (size === small) {
//       const xsText = {
//         fontSize: "10px",
//       };
//       return xsText;
//     } else if (size === medium) {
//       const smText = {
//         fontSize: "20px",
//       };
//       return smText;
//     } else if (size === large) {
//       const lgText = {
//         fontSize: "40px",
//       };
//       return lgText;
//     }
//   };

//   // this function to get button type
//   const getButtontype = () => {
//     if (type === full) {
//       return `${color} hover:bg-blue-700 text-white font-bold  ${getButtonSize()} py-2 px-4 m-3 rounded`;
//     } else if (type === light) {
//       return `{bg-transparent ${color.replace(
//         "bg",
//         "text"
//       )} font-semibold  ${getButtonSize()} py-2 px-4 m-3 border  ${color.replace(
//         "bg",
//         "border"
//       )}  rounded}`;
//     } else if (type === link) {
//       return `{bg-transparent  ${color.replace(
//         "bg",
//         "text"
//       )} font-semibold ${getButtonSize()} py-2 px-4 m-3 rounded}`;
//     }
//   };

//   return (
//     <div>
//       {text ? (
//         <a href={url} rel="noreferrer" target="_blank">
//           <button className={getButtontype()}>{text}</button>
//         </a>
//       ) : null}
//     </div>
//   );
// };

// export default CTAComp;

import React from "react";
import { buttonSize, buttonColor, buttonType } from "Utils/Constant";
import { useSelector } from "react-redux";
// import "./CtaElement.css";
const CTAComp = () => {
  const { ctaButton, videoConferenceInfo } = useSelector(
    (state) => state.counter
  );

  const { color, text, url, type, size } = ctaButton;
  const { small, medium, large } = buttonSize;
  const { gray, red, blue, skyblue, pink, yellow, green } = buttonColor;
  const { full, light, link } = buttonType;

  // ALL COLORS FOR LIGHTTYPE BUTTON
  const colorGray = {
    color: "#374151",
    border: "2px solid #374151",
  };
  const colorRed = {
    color: "#b91c1c",
    border: "2px solid #b91c1c",
  };
  const colorBLue = {
    color: "#1d4ed8",
    border: "2px solid #1d4ed8",
  };
  const colorPink = {
    color: "#db2777",
    border: "2px solid #db2777",
  };
  const colorSkyBlue = {
    color: "#60a5fa",
    border: "2px solid #60a5fa",
  };
  const colorYellow = {
    color: "#d97706",
    border: "2px solid #d97706",
  };
  const colorGreen = {
    color: "#059669",
    border: "2px solid #059669",
  };
  const colorCustom = {
    color: color,
    border: `2px solid ${color}`,
  };
  // ALL FONT SIZES
  const fontSmall = {
    fontSize: "12px",
  };
  const fontMedium = {
    fontSize: "18px",
  };
  const fontLarge = {
    fontSize: "24px",
  };

  // FUNCTION FOR BUTTON
  const getButtonSize = () => {
    if (size === small) return fontSmall;
    else if (size === medium) return fontMedium;
    else if (size === large) return fontLarge;
  };
  const allButtonSize = getButtonSize();
  //FUNCTION FOR COLOR
  var getButtonColor = () => {
    if (color === gray) return colorGray;
    else if (color === red) return colorRed;
    else if (color === blue) return colorBLue;
    else if (color === pink) return colorPink;
    else if (color === skyblue) return colorSkyBlue;
    else if (color === yellow) return colorYellow;
    else if (color === green) return colorGreen;
    else return colorCustom;
  };
  const allButtonColor = getButtonColor();

  // ALL BACKGROUND COLOR FOR FULLTYPE
  const backGroundGray = {
    background: "#374151",
  };
  const backGroundRed = {
    background: "#b91c1c",
  };
  const backGroundBlue = {
    background: "#1d4ed8",
  };
  const backGroundPink = {
    background: "#db2777",
  };
  const backGroundSkyblue = {
    background: "#60a5fa",
  };
  const backGroundYellow = {
    background: "#d97706",
  };
  const backGroundGreen = {
    backgroundColor: "#059669",
  };
  const backGroundCustom = {
    backgroundColor: color,
  };
  // function for BACKGROUND COLOR
  const getBackgroundColor = () => {
    if (color === gray) return backGroundGray;
    else if (color === red) return backGroundRed;
    else if (color === blue) return backGroundBlue;
    else if (color === pink) return backGroundPink;
    else if (color === skyblue) return backGroundSkyblue;
    else if (color === yellow) return backGroundYellow;
    else if (color === green) return backGroundGreen;
    else return backGroundCustom;
  };
  const allButtonTypeBackground = getBackgroundColor();
  // ALL BACKGROUND COLOR FOR LINKTYPE
  const linkGray = {
    color: "#374151",
  };
  const linkRed = {
    color: "#b91c1c",
  };
  const linkBLue = {
    color: "#1d4ed8",
  };
  const linkPink = {
    color: "#db2777",
  };
  const linkSkyblue = {
    color: "#60a5fa",
  };
  const linkYellow = {
    color: "#d97706",
  };
  const linkGreen = {
    color: "#059669",
  };
  const getLinkColor = () => {
    if (color === gray) return linkGray;
    else if (color === red) return linkRed;
    else if (color === blue) return linkBLue;
    else if (color === pink) return linkPink;
    else if (color === skyblue) return linkSkyblue;
    else if (color === yellow) return linkYellow;
    else if (color === green) return linkGreen;
  };
  const allLinkColor = getLinkColor();
  // ALL BUTTON TYPE STYLINGS
  const fullType = {
    font: "bold",
    color: "white",
    border: "2px solid ",
    borderRadius: "5px",
    padding: "2px 5px ",
    textDecoration: "none",
  };
  const lightType = {
    font: "bold",
    borderRadius: "5px",
    background: "transparent",
    padding: "2px 5px ",
    textDecoration: "none",
  };
  const linkType = {
    font: "bold",
    border: "none",
    background: "none",
    textDecoration: "none",
  };
  // FUNCTION FOR BUTTON TYPE
  const getButtonType = () => {
    if (type === full)
      return { ...fullType, ...allButtonTypeBackground, ...allButtonSize };
    else if (type === light)
      return { ...lightType, ...allButtonColor, ...allButtonSize };
    else if (type === link)
      return { ...linkType, ...allButtonSize, ...allLinkColor };
  };
  return (
    <>
      <div>
        {text ? (
          <a href={url} target="_blank">
            <button style={getButtonType()}>
              <span style={{ textDecoration: "none" }}>{text}</span>
            </button>
          </a>
        ) : null}
      </div>
      <div></div>
    </>
  );
};

export default CTAComp;
