import React from "react";
import { useSelector } from "react-redux";

const SignoffComp = ({ src }) => {
  const { signofftext, signofffontStyle, signoffColors, signofffontSize } =
    useSelector((state) => state.counter);

  var fontStyle = "";
  var fontStyleI = "";

  if (signofffontStyle === "Georgia") {
    fontStyle = "Georgia, 'Times New Roman', Times, serif";
  } else if (signofffontStyle === "Impact") {
    fontStyle = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  } else if (signofffontStyle === "cursive") {
    fontStyle = "cursive";
  } else if (signofffontStyle === "fantasy") {
    fontStyle = "fantasy";
  } else if (signofffontStyle === "Courier") {
    fontStyle = "'Courier New', Courier, monospace";
  } else if (signofffontStyle === "Gill") {
    fontStyle =
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
  } else if (signofffontStyle === "italic") {
    fontStyleI = "italic";
  }
  return (
    <div style={{ paddingBottom: "10px" }}>
      <span
        style={{
          // fontFamily: signofffontStyle,
          fontFamily: fontStyle,
          fontStyle: fontStyleI,
          color: signoffColors,
          fontSize: signofffontSize,
          paddingRight: "10px",
        }}
      >
        {signofftext}
      </span>
    </div>
  );
};

export default SignoffComp;
