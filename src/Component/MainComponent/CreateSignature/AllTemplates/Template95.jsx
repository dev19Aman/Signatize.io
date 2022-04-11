import React, { useEffect, useState } from "react";
// import "./DesignFonts.css"
import { useSelector } from "react-redux";
import {
  Namecom,
  CompanyComp,
  PhoneComp,
  MobileComp,
  AddressComp,
  WebsiteComp,
  EmailComp,
  SocialComp,
  VideoComp,
  ConfrenceBtn,
  WedgitsSocialComp,
  QuoteComp,
  Disclamer,
  VideoConfComp,
  CTAComp,
  GreenMsgComp,
  BannerComp,
  ImgComp,
  SignoffComp,
  SignatureComp,
} from ".";

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
// "https://y5t6h9a6.stackpathcdn.com/79318bf3-8738-4bae-9f3d-fb4921563044/img.png";
const Template95 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { colors, fontsize, fontFamily, lineHeight, borderRight, borderColor } =
    useSelector((state) => state.design);
  const {
    phonenumber,
    company,
    mobilenumber,
    website,
    address,
    images,
    email,
  } = useSelector((state) => state.general);

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingRight: "10px",
                          borderRight:
                            images === null ? null : "4px solid #62ca3e",
                        }}
                      >
                        <div style={{ paddingBottom: "10px" }}>
                          {images === null ? null : (
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400,
                                color: "#000000",
                                padding: "10px 0px",
                                display: "inline",
                              }}
                            >
                              <SignoffComp />
                            </span>
                          )}
                        </div>
                        <div>{images === null ? null : <ImgComp />}</div>

                        <div>
                          <span
                            style={{
                              fontFamily: "Arial, Helvetica, sans-serif",
                              fontSize: "9px",
                              fontStyle: "normal",
                              lineHeight: "10px",
                              fontWeight: "normal",
                              color: "#777777",
                            }}
                          >
                            {images === null ? null : <SignatureComp />}
                          </span>
                        </div>
                      </td>
                      <td style={{ paddingLeft: "15px" }}>
                        <div
                          style={{
                            // position: "absolute",
                            top: "10px",
                          }}
                        >
                          <div>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "18.0px",
                                  fontStyle: "normal",
                                  lineHeight: "20px",
                                  fontWeight: 700,
                                  color: "#62ca3e",
                                  display: "inline",
                                }}
                              >
                                <Namecom Name={Name} />
                                &nbsp;
                              </span>
                            </zs-remove>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "18.0px",
                                  fontStyle: "normal",
                                  lineHeight: "20px",
                                  fontWeight: 700,
                                  color: "#7d0d6f",
                                  display: "inline",
                                }}
                              >
                                <CompanyComp Company={Company} />
                                &nbsp;
                              </span>
                            </zs-remove>
                          </div>
                          <div>
                            <div>
                              {/* <span
                            style="
                              font-size: 14px;
                              font-style: normal;
                              line-height: 16px;
                              font-weight: 700;
                              color: #ff0000;
                              display: inline;
                              font-family: Arial
                            "
                          >
                            P &nbsp;</span> */}
                              <zs-remove>
                                <span
                                  className="ng-binding ng-scope"
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#62ca3e",
                                    display: "inline",
                                    fontSize:
                                      fontsize === 1
                                        ? "14px"
                                        : `${fontsize / 5 + 14}px`,
                                    color: `${colors}`,
                                  }}
                                >
                                  {email === "" ? null : "  e."}
                                </span>
                                <span
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <EmailComp />
                                  &nbsp;
                                </span>
                              </zs-remove>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#62ca3e",
                                    display: "inline",
                                    fontSize:
                                      fontsize === 1
                                        ? "14px"
                                        : `${fontsize / 5 + 14}px`,
                                    color: `${colors}`,
                                  }}
                                >
                                  {website === "" ? null : "  w. "}
                                </span>
                                <span
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <WebsiteComp />
                                  &nbsp;
                                </span>
                              </zs-remove>
                            </div>
                            <div>
                              {/* <span style="    font-size: 14.0px;
                          font-style: normal;
                          line-height: 16px;
                          font-weight: 700;
                          color: #ff0000;
                          display: inline;
                          font-family: Arial">
                              W &nbsp;
                          </span> */}
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#62ca3e",
                                    display: "inline",
                                    fontSize:
                                      fontsize === 1
                                        ? "14px"
                                        : `${fontsize / 5 + 14}px`,
                                    color: `${colors}`,
                                  }}
                                >
                                  {address === "" ? null : "a. "}
                                </span>
                                <span
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <AddressComp />
                                </span>
                              </zs-remove>
                            </div>
                          </div>
                          <div style={{ paddingTop: "20px" }}>
                            <div
                              style={{
                                display: "flex",
                                wordSpacing: "2px",
                                paddingTop: "5px",
                              }}
                            >
                              <SocialComp />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ float: "left", width: "100%", marginTop: "28px" }}>
          <tbody>
            <tr>
              <td
                style={{
                  float: "left",
                  width: "100%",
                }}
              >
                <VideoComp />
              </td>
              <td
                style={{
                  float: "left",
                  width: "100%",
                }}
              >
                <div>
                  <WedgitsSocialComp />
                </div>
              </td>

              <td style={{ float: "left", width: "100%" }}>
                <div
                  style={{
                    fontSize: "16px",
                    margin: "5px 0 0 0",
                    float: "left",
                  }}
                >
                  <QuoteComp />
                </div>
              </td>
              <td style={{ float: "left", width: "100%" }}>
                <div>
                  <p
                    style={{
                      fontSize: "15px",
                      float: "left",
                      // margin: "10px 0 0 0",
                    }}
                  >
                    <Disclamer />
                  </p>
                </div>
              </td>
              <td
                style={{
                  float: "left",
                  width: "100%",
                  gap: "2px",
                  textDecoration: "none",
                }}
              >
                <span
                  href="#"
                  style={{
                    float: "left",
                    margin: " 14px 0 0 0",
                    fontSize: "17px",
                    background: videoconf === "" ? null : "gray",
                    padding: "8px 18px ",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <VideoConfComp />
                </span>{" "}
                &nbsp;
                <span
                  style={{
                    textDecoration: "none",
                    float: "left",
                    // color: "#000",
                    margin: " 13px 0 0 0",
                    paddingLeft: "7px",

                    // background: videoconf === "" ? null : "gray",
                  }}
                >
                  <CTAComp />
                </span>
              </td>
              <td
                style={{
                  float: "left",
                  color: "green",
                  fontSize: "13px",
                  // display: "flex",
                  // gap: "2",
                  // alignItems: "center",
                  // justifyItems: "center",
                }}
              >
                <p>
                  <GreenMsgComp />
                </p>
                <BannerComp />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Template95;
