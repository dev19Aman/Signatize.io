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
const Template141 = () => {
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
                            paddingBottom: "50px",
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
                            style={
                              {
                                //  position: "absolute",
                                // top: "10px",
                              }
                            }
                          >
                            <div>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily:
                                      '"Trebuchet MS", Helvetica, sans-serif',
                                    fontSize: "24px",
                                    fontStyle: "normal",
                                    lineHeight: "26px",
                                    fontWeight: 400,
                                    color: "#2d77ff",
                                    display: "inline",
                                  }}
                                >
                                  <Namecom Name={Name} />
                                </span>
                              </zs-remove>
                            </div>
                            <div style={{ padding: "2px 0px" }}>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily:
                                      '"Trebuchet MS", Helvetica, sans-serif',
                                    fontSize: "21px",
                                    fontStyle: "italic",
                                    lineHeight: "23px",
                                    fontWeight: 400,
                                    color: "#666666",
                                    display: "inline",
                                  }}
                                >
                                  <CompanyComp Company={Company} />
                                </span>
                              </zs-remove>
                            </div>
                            <div>
                              <div>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica,sans-serif',
                                      fontSize: "13px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                    }}
                                  >
                                    {phonenumber === "" ? null : "  T."}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica,sans-serif',
                                      fontSize: "13px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    <PhoneComp />
                                  </span>
                                </zs-remove>
                                <div>
                                  <zs-remove>
                                    <span
                                      style={{
                                        fontFamily:
                                          '"Trebuchet MS", Helvetica,sans-serif',
                                        fontSize: "13px",
                                        fontStyle: "normal",
                                        lineHeight: "15px",
                                        fontWeight: 400,
                                        color: "#2d77ff",
                                        display: "inline",
                                      }}
                                    >
                                      {mobilenumber === "" ? null : "  M."}
                                    </span>
                                    <span
                                      style={{
                                        fontFamily:
                                          '"Trebuchet MS", Helvetica,sans-serif',
                                        fontSize: "13px",
                                        fontStyle: "normal",
                                        lineHeight: "15px",
                                        fontWeight: 400,
                                        color: "#454545",
                                        display: "inline",
                                      }}
                                    >
                                      <MobileComp />
                                    </span>
                                  </zs-remove>
                                </div>
                                <div>
                                  <zs-remove>
                                    <span
                                      style={{
                                        fontFamily:
                                          '"Trebuchet MS", Helvetica,sans-serif',
                                        fontSize: "13px",
                                        fontStyle: "normal",
                                        lineHeight: "15px",
                                        fontWeight: 400,
                                        color: "#2d77ff",
                                        display: "inline",
                                      }}
                                    >
                                      {address === "" ? null : "A. "}
                                    </span>
                                    <span
                                      className="ng-binding ng-scope"
                                      style={{
                                        fontFamily:
                                          '"Trebuchet MS", Helvetica,sans-serif',
                                        fontSize: "13px",
                                        fontStyle: "normal",
                                        lineHeight: "15px",
                                        fontWeight: 400,
                                        color: "#454545",
                                        display: "inline",
                                      }}
                                    >
                                      <AddressComp />
                                    </span>
                                  </zs-remove>
                                </div>
                              </div>
                              <div
                                style={{
                                  borderBottom: "1px solid rgb(216, 216, 216)",
                                  paddingBottom: "10px",
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica,sans-serif',
                                      fontSize: "13px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#2d77ff",
                                      display: "inline",
                                    }}
                                  >
                                    {website === "" ? null : "  W. "}
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        '"Trebuchet MS", Helvetica,sans-serif',
                                      fontSize: "13px",
                                      fontStyle: "normal",
                                      lineHeight: "15px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    <WebsiteComp />
                                  </span>
                                </zs-remove>
                              </div>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
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
                        {/* <td style="position: absolute; left: 25%">
                    <div>
                      <zs-remove>
                        <img
                          class="ng-scope"
                          src="https://y5t6h9a6.stackpathcdn.com/0e213f4a-8613-4286-b36a-fb0081d4ec30/img.png"
                        />
                      </zs-remove>
                    </div>
                  </td> */}
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

export default Template141;
