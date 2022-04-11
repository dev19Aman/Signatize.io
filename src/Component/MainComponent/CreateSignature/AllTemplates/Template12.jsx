import React, { useEffect, useState } from "react";
import "./DesignFonts.css";
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

const Template12 = () => {
  const { youtubeUrl, videoconf, quoteTitle, greenMessage } = useSelector(
    (state) => state.counter
  );
  const { colors, fontsize, fontFamily, lineHeight, borderRight, borderColor } =
    useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "17px",
                            fontStyle: "normal",
                            lineHeight: "19px",
                            fontWeight: 700,
                            color: "#45668E",
                            display: "inline",
                          }}
                        >
                          <Namecom Name={Name} />
                        </span>
                      </div>
                      <div style={{ paddingTop: "0px", paddingBottom: "4px" }}>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "15px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 700,
                            color: "#45668E",
                            display: "inline",
                          }}
                        >
                          <CompanyComp Company={Company} />
                        </span>
                      </div>
                      <div>
                        <a
                          href=""
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          <span
                            data-acs="phone"
                            style={{
                              lineHeight: "1.2",
                              colorScheme: "light only",
                              color: "#45668E",
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            <span
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                                fontSize: "12px",
                                color: "#45668E",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {phonenumber === "" ? null : "P"}
                            </span>
                            <PhoneComp />
                          </span>
                        </a>
                        &nbsp;
                        <a
                          href=""
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          <span
                            data-acs="website"
                            style={{
                              lineHeight: "1.2",
                              colorScheme: "light only",
                              color: "#45668E",
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            <span
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                                fontSize: "12px",
                                color: "#45668E",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {website === "" ? null : "  W"}
                            </span>{" "}
                            <WebsiteComp />
                          </span>
                        </a>
                        &nbsp;
                        <a
                          href=""
                          target="_blank"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          <span
                            data-acs="email"
                            style={{
                              lineHeight: "1.2",
                              colorScheme: "light only",
                              color: "#45668E",
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            <span
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                                fontSize: "12px",
                                color: "#45668E",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {email === "" ? null : "E"}
                            </span>{" "}
                            <EmailComp />
                          </span>
                        </a>
                      </div>
                      <div style={{ paddingTop: "5px" }}>
                        <a
                          href=""
                          target="_blank"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          <span
                            data-acs="address"
                            style={{
                              lineHeight: "1.2",
                              colorScheme: "light only",
                              color: "#45668E",
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            <span
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontWeight: "bold",
                                fontSize: "12px",
                                color: "#45668E",
                                fontSize:
                                  fontsize === 1
                                    ? "14px"
                                    : `${fontsize / 5 + 14}px`,
                                color: `${colors}`,
                              }}
                            >
                              {address === "" ? null : "A"}
                            </span>{" "}
                            <AddressComp />
                          </span>
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          wordSpacing: "2px",
                          paddingTop: "23px",
                        }}
                      >
                        <SocialComp />
                      </div>
                    </td>
                    <td style={{ paddingLeft: "10px" }}>
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
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
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
                      marginTop: "8px",
                    }}
                  >
                    <td
                      style={{ marginTop: youtubeUrl === "" ? null : "15px" }}
                    >
                      <VideoComp />
                    </td>
                    <td style={{ marginTop: "10px" }}>
                      <WedgitsSocialComp />
                    </td>
                    <td
                      style={{
                        display: quoteTitle === null ? "none" : "block",
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
                    <td>
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
                            marginTop: "6px",
                          }}
                        >
                          <VideoConfComp />
                        </span>
                      )}
                      {/* &nbsp; */}
                      <span
                        style={{
                          marginTop: "6px",
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
                      }}
                    >
                      {greenMessage === "" ? null : (
                        <p style={{ marginTop: "12px" }}>
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
  );
};

export default Template12;
