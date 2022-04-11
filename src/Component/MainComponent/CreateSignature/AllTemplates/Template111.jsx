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
const Template111 = () => {
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
    <>
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
                            paddingBottom: "40px",
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
                        </td>
                        <td style={{ paddingLeft: "15px" }}>
                          <div
                            style={{
                              // position: "absolute",
                              top: "10px",
                            }}
                          >
                            <div
                              style={{
                                borderBottom:
                                  images === null ? null : "4px solid #000",
                                padding: "6px 0",
                              }}
                            >
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily:
                                      "Gadget, Arial Black, sans-serif",
                                    fontSize: "27px",
                                    fontStyle: "normal",
                                    lineHeight: "29px",
                                    fontWeight: 700,
                                    color: "#218aa6",
                                    display: "inline",
                                  }}
                                >
                                  <Namecom Name={Name} />
                                  &nbsp;
                                </span>
                              </zs-remove>
                              <span
                                style={{
                                  fontFamily: "Gadget, Arial Black, sans-serif",
                                  fontSize: "16px",
                                  fontStyle: "italic",
                                  lineHeight: "18px",
                                  fontWeight: 700,
                                  color: "#333333",
                                  display: "inline",
                                }}
                              >
                                <CompanyComp Company={Company} />
                                &nbsp;
                              </span>
                            </div>
                            <div>
                              <div style={{ padding: "15px 0" }}>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      lineHeight: "18px",
                                      fontWeight: 400,
                                      color: "#218aa6",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "14px"
                                          : `${fontsize / 5 + 14}px`,
                                      color: `${colors}`,
                                    }}
                                  >
                                    {phonenumber === "" ? null : "  P"}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      lineHeight: "18px",
                                      fontWeight: 400,
                                      color: "#333333",
                                      display: "inline",
                                    }}
                                  >
                                    <PhoneComp />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      lineHeight: "18px",
                                      fontWeight: 400,
                                      color: "#218aa6",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "14px"
                                          : `${fontsize / 5 + 14}px`,
                                      color: `${colors}`,
                                    }}
                                  >
                                    {mobilenumber === "" ? null : "  M"}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      lineHeight: "18px",
                                      fontWeight: 400,
                                      color: "#333333",
                                      display: "inline",
                                    }}
                                  >
                                    <MobileComp />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <div>
                                  <zs-remove>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "#218aa6",
                                        display: "inline",
                                        fontSize:
                                          fontsize === 1
                                            ? "14px"
                                            : `${fontsize / 5 + 14}px`,
                                        color: `${colors}`,
                                      }}
                                    >
                                      {website === "" ? null : "  W "}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "#333333",
                                        display: "inline",
                                      }}
                                    >
                                      <WebsiteComp />
                                      &nbsp;
                                    </span>
                                  </zs-remove>
                                  <zs-remove>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "red",
                                        display: "inline",
                                        fontSize:
                                          fontsize === 1
                                            ? "14px"
                                            : `${fontsize / 5 + 14}px`,
                                        color: `${colors}`,
                                      }}
                                    >
                                      {email === "" ? null : "  E "}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "#333333",
                                        display: "inline",
                                      }}
                                    >
                                      <EmailComp />
                                      &nbsp;
                                    </span>
                                  </zs-remove>
                                </div>
                                <div>
                                  <zs-remove>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "#218aa6",
                                        display: "inline",
                                        fontSize:
                                          fontsize === 1
                                            ? "14px"
                                            : `${fontsize / 5 + 14}px`,
                                        color: `${colors}`,
                                      }}
                                    >
                                      {address === "" ? null : "A "}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily:
                                          "Calibri, Helvetica, sans-serif",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        lineHeight: "18px",
                                        fontWeight: 400,
                                        color: "#333333",
                                        display: "inline",
                                      }}
                                    >
                                      <AddressComp />
                                    </span>
                                  </zs-remove>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span
                                style={{
                                  display: "flex",
                                  padding: "8px 0px",
                                  marginTop: "5px",
                                }}
                              >
                                <SocialComp />
                              </span>
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
                    // display: "flex",
                    // alignItems: "center",
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
    </>
  );
};

export default Template111;
