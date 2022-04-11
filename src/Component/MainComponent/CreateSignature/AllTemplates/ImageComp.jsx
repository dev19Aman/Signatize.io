import React from "react";
import { useSelector } from "react-redux";

const ImageComp = ({ src }) => {
  const { spacings, styleChangeA, styleChangeB, lineHeight } = useSelector(
    (state) => state.design
  );
  return (
    <>
      <img
        src={src}
        style={{
          width: spacings === 1 ? "32px" : `${spacings + 32}px`,
          height: spacings === 1 ? "32px" : `${spacings + 32}px`,
          backgroundColor: styleChangeA,
          border: styleChangeB,
          lineHeight: lineHeight,
        }}
      />
    </>
  );
};

export default ImageComp;
