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
const Template2 = () => {
  const { youtubeUrl, videoconf, quoteTitle, greenMessage } = useSelector(
    (state) => state.counter
  );
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
        <table className="mt-3">
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: "45px" }}>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "17px",
                              fontStyle: "normal",
                              lineHeight: "19px",
                              fontWeight: 700 /*color: '#008bb8', */,
                              display: "inline",
                            }}
                          >
                            <Namecom Name={Name} />
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "15px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 700,
                            color: "#000000",
                            display: "inline",
                          }}
                        >
                          <CompanyComp Company={Company} />
                        </span>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400 /*color: '#008bb8', */,
                              display: "inline",
                              fontSize:
                                fontsize === 1
                                  ? "14px"
                                  : `${fontsize / 5 + 14}px`,
                              color: `${colors}`,
                            }}
                          >
                            {phonenumber === "" ? null : "  P."}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#000000",
                            }}
                          >
                            <PhoneComp />
                            {/* &nbsp; */}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400 /*color: '#008bb8', */,
                              display: "inline",
                              marginLeft: phonenumber === "" ? null : "5px",
                              fontSize:
                                fontsize === 1
                                  ? "14px"
                                  : `${fontsize / 5 + 14}px`,
                              color: `${colors}`,
                            }}
                          >
                            {mobilenumber === "" ? null : "  M."}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#000000",
                              display: "inline",
                            }}
                          >
                            <MobileComp />
                            &nbsp;
                          </span>
                          <div>
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400 /*color: '#008bb8', */,
                                display: "inline",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {website === "" ? null : "  W. "}
                            </span>
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400,
                                color: "#000000",
                                display: "inline",
                              }}
                            >
                              <WebsiteComp />
                            </span>
                          </div>
                          <div>
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400 /* color: '#008bb8', */,
                                display: "inline",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {address === "" ? null : "A. "}
                            </span>
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "15px",
                                fontStyle: "normal",
                                lineHeight: "17px",
                                fontWeight: 400,
                                color: "#000000",
                                display: "inline",
                              }}
                            >
                              <AddressComp />
                            </span>
                          </div>
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
                      </td>
                      <td
                        style={{
                          borderLeft:
                            borderRight === true
                              ? null
                              : `1px solid ${borderColor}`,
                          paddingLeft: "15px",
                        }}
                      >
                        <div style={{ paddingTop: "10px" }}>
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
                                textDecoration: "none",
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
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ORIGINAL TABLE  */}
        {/* <table>
          <tbody>
            <tr>
              <td>
                <table
                  style={{ float: "left", width: "100%", marginTop: "28px" }}
                >
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
                          // width: "100%",
                        }}
                      >
                        <div>
                          <WedgitsSocialComp />
                        </div>
                      </td>
                      <td
                        style={{
                          float: "left",
                          width: "100%",
                          display: quoteTitle === null ? "none" : "block",
                        }}
                      >
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
                      <td
                        style={{
                          float: "left",
                          width: "100%",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              // fontSize: "15px",
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
                          // gap: "2px",
                          textDecoration: "none",
                        }}
                      >
                        {videoconf === "" ? null : (
                          <span
                            href="#"
                            style={{
                              float: "left",
                              // margin: " 14px 0 0 0",
                              fontSize: "17px",
                              background: videoconf === "" ? null : "gray",
                              padding: "8px 18px ",
                              borderRadius: "4px",
                              textDecoration: "none",
                            }}
                          >
                            <VideoConfComp />
                          </span>
                        )}
                        &nbsp;
                        <span
                          style={{
                            textDecoration: "none",
                            float: "left",
                            // margin: " 13px 0 0 0",
                            paddingLeft: videoconf === "" ? null : "7px",
                            // background: videoconf === "" ? null : "gray",
                          }}
                        >
                          <CTAComp />
                        </span>
                      </td>
                      <td
                        style={{
                          float: "left",
                          fontSize: "13px",
                          // backgroundColor: "green",
                          // display: "flex",
                          // gap: "2",
                          // alignItems: "center",
                          // justifyItems: "center",
                        }}
                      >
                        {greenMessage === "" ? null : (
                          <p>
                            <GreenMsgComp />
                          </p>
                        )}
                        <BannerComp />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table> */}

        <table>
          <tbody>
            <tr>
              <td>
                <table style={{ float: "left" }}>
                  <tbody>
                    <tr
                      style={{
                        display: "grid",
                        float: "left",
                      }}
                    >
                      <td
                        style={{ marginTop: youtubeUrl === "" ? null : "15px" }}
                      >
                        <VideoComp />
                      </td>
                      <td style={{ marginTop: "12px" }}>
                        <WedgitsSocialComp />
                      </td>
                      <td
                        style={{
                          display: quoteTitle === null ? "none" : "block",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "16px",
                          }}
                        >
                          <QuoteComp />
                        </div>
                      </td>
                      <td style={{ marginTop: "4px" }}>
                        <Disclamer />
                      </td>
                      <td
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        {videoconf === "" ? null : (
                          <span
                            style={{
                              float: "left",
                              // margin: " 14px 0 0 0",
                              fontSize: "17px",
                              background: videoconf === "" ? null : "gray",
                              padding: "8px 18px ",
                              borderRadius: "4px",
                              textDecoration: "none",
                              marginTop: "10px",
                            }}
                          >
                            <VideoConfComp />
                          </span>
                        )}
                        {/* &nbsp; */}
                        <span
                          style={{
                            textDecoration: "none",
                            float: "left",
                            // margin: " 13px 0 0 0",
                            paddingLeft: videoconf === "" ? null : "7px",
                            marginTop: videoconf === "" ? null : "10px",

                            // background: videoconf === "" ? null : "gray",
                          }}
                        >
                          <CTAComp />
                        </span>
                      </td>
                      <td
                        style={{
                          float: "left",
                        }}
                      >
                        {greenMessage === "" ? null : (
                          <p
                            style={{
                              fontSize: "13px",
                              marginTop: "12px",
                            }}
                          >
                            <GreenMsgComp />
                          </p>
                        )}
                        <div style={{ marginTop: "12px" }}>
                          <BannerComp />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Template2;
