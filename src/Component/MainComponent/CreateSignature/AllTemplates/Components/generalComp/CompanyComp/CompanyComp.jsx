import React from "react";
import { useSelector } from "react-redux";

const CompanyComp = ({ Company }) => {
  const { company } = useSelector((state) => state.general);

  const { colors, fontsize, fontFamily, lineHeight } = useSelector(
    (state) => state.design
  );

  var fontStyle = "";
  var fontStyleI = "";

  if (fontFamily === "Georgia") {
    fontStyle = "Georgia, 'Times New Roman', Times, serif";
  } else if (fontFamily === "Impact") {
    fontStyle = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  } else if (fontFamily === "cursive") {
    fontStyle = "cursive";
  } else if (fontFamily === "fantasy") {
    fontStyle = "fantasy";
  } else if (fontFamily === "Courier") {
    fontStyle = "'Courier New', Courier, monospace";
  } else if (fontFamily === "Gill") {
    fontStyle =
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  } else if (fontFamily === "italic") {
    fontStyleI = "italic";
  }
  return (
    <>
      <span
        style={{
          color: colors,
          fontSize: fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
          // fontFamily: fontFamily,
          lineHeight: lineHeight,
          // fontFamily: fontStyle,
          fontFamily: fontStyle,
          fontStyle: fontStyleI,
        }}
      >
        {company === "" ? Company : company}
      </span>
    </>
  );
};

export default CompanyComp;
