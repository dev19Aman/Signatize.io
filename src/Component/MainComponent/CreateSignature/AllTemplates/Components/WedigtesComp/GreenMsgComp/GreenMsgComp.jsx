import React from "react";
import { useSelector } from "react-redux";

const GreenMsgComp = () => {
  const { greenMessage, greenMessageImage, greenMessagePadding } = useSelector(
    (state) => state.counter
  );
  const { shape, height, marginTop } = greenMessagePadding;
  const getGreenMessageMarginTop = () => {
    if (marginTop === 0) return {};
    else return { marginTop: marginTop };
  };
  const greenMessageMarginTop = getGreenMessageMarginTop();
  return (
    <>
      <div style={greenMessageMarginTop}>
        {greenMessage && (
          <img
            style={{
              // width: "20px",
              // lineHeight: 1,
              // margin: "1px 11px 0 0",
              float: "left",
            }}
            src={greenMessageImage}
            alt=""
          />
        )}
        &nbsp;
        {greenMessage}
      </div>
    </>
  );
};

export default GreenMsgComp;
