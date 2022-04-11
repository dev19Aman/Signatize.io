import React from "react";
import { useSelector } from "react-redux";
import { buttonColor } from "Utils/Constant";

const Disclamer = () => {
  const { disclaimer, salesEvent, salesEventImage } = useSelector(
    (state) => state.counter
  );
  const { saleTitle, saleText, salelink, saleColor, salesFontSize } =
    salesEvent;
  const { gray, red, blue, skyblue, pink, yellow, green } = buttonColor;

  var salesEventColor = "";
  if (saleColor === gray) {
    salesEventColor = "#161927";
  } else if (saleColor === red) {
    salesEventColor = "red";
  } else if (saleColor === blue) {
    salesEventColor = "blue";
  } else if (saleColor === skyblue) {
    salesEventColor = "#7B4BA0";
  } else if (saleColor === pink) {
    salesEventColor = "pink";
  } else if (saleColor === yellow) {
    salesEventColor = "#9B7C23";
  } else if (saleColor === green) {
    salesEventColor = "green";
  } else {
    salesEventColor = saleColor;
  }
  const getSalesEventFontSize = () => {
    if (salesFontSize === 0) return {};
    else return { fontSize: salesFontSize };
  };

  return (
    <>
      <div style={{ lineHeight: "18px" }}>{disclaimer}</div>
      {salelink === "" ? (
        <section
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <img src={salesEventImage} alt="" />
          <div style={{ marginLeft: salesEventColor === null ? null : "5px" }}>
            <span
              style={{
                fontWeight: "bold",
                color: salesEventColor,
                fontSize: salesFontSize,
              }}
              // style={fontSizeStyling}
            >
              {saleTitle}
            </span>{" "}
            <span
              style={{
                color: salesEventColor,
                fontSize: salesFontSize,
              }}
            >
              {saleText}
            </span>
          </div>
        </section>
      ) : (
        <a href={salelink} target="_blank">
          <section
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <img src={salesEventImage} alt="" />
            <div
              style={{ marginLeft: salesEventColor === null ? null : "5px" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: salesEventColor,
                  fontSize: salesFontSize,
                }}
              >
                {saleTitle}
              </span>{" "}
              <span
                style={{
                  color: salesEventColor,
                  fontSize: salesFontSize,
                }}
              >
                {saleText}
              </span>
            </div>
          </section>
        </a>
      )}
    </>
  );
};

export default Disclamer;
