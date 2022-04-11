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
import VideoConference from "Component/UserBar/widgets/WidgetsButton/VideoConference";
const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
const Template7 = () => {
  const { youtubeUrl, videoconf, quoteTitle, greenMessage } = useSelector(
    (state) => state.counter
  );
  const { fontsize } = useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);

  return (
    <div>
      <table className="mt-3">
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td style={{ paddingRight: "10px" }}>
                      <div
                        style={
                          {
                            // paddingBottom: "0px"
                            // paddingBottom: "15px"
                          }
                        }
                      >
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
                      <div style={{ paddingBottom: "15px" }}>
                        {images === null ? null : <ImgComp />}
                      </div>
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
                    <td
                      style={{
                        // paddingLeft: "10px",
                        paddingBottom: "70px",
                      }}
                    >
                      <div>
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
                        <div style={{ paddingBottom: "4px" }}>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 700,
                              color: "#444444",
                              display: "inline",
                            }}
                          >
                            <CompanyComp Company={Company} />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style={{ top: "12px" }}>
                      <div
                        style={{
                          // position: "absolute",
                          top: "18px",
                          paddingTop: "20px",
                          // left: "21%",
                          paddingLeft: "10px",
                        }}
                      >
                        <div>
                          <div style={{ display: "flex" }}>
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {phonenumber === "" ? null : (
                                <img
                                  src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                                  style={{
                                    verticalAlign: "-2px",
                                    lineHeight: "1.2",
                                  }}
                                />
                              )}
                            </a>
                            &nbsp;
                            <a
                              href="tel:212-931-0000"
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {" "}
                              <span
                                data-acs="phone"
                                style={{
                                  lineHeight: "1.2",
                                  colorScheme: "light only",
                                  color: "#212121",
                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <PhoneComp />
                              </span>{" "}
                            </a>
                            &nbsp;
                          </div>
                          <div
                            style={{
                              // paddingTop: "7px",
                              display: "flex",
                            }}
                          >
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {website === "" ? null : (
                                <img
                                  src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                                  style={{
                                    verticalAlign: "-2px",
                                    lineHeight: "1.2",
                                  }}
                                />
                              )}
                            </a>
                            &nbsp;
                            <a
                              href="tel:212-931-0000"
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {" "}
                              <span
                                data-acs="phone"
                                style={{
                                  lineHeight: "1.2",
                                  colorScheme: "light only",
                                  color: "#212121",
                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <WebsiteComp />
                              </span>{" "}
                            </a>
                            &nbsp;
                          </div>
                          <div
                            style={{
                              paddingTop: "px",
                              display: "flex",
                            }}
                          >
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {email === "" ? null : (
                                <img
                                  src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                                  style={{
                                    verticalAlign: "-2px",
                                    lineHeight: "1.2",
                                  }}
                                />
                              )}
                            </a>
                            &nbsp;
                            <a
                              href="tel:212-931-0000"
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {" "}
                              <span
                                data-acs="phone"
                                style={{
                                  lineHeight: "1.2",
                                  colorScheme: "light only",
                                  color: "#212121",
                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <EmailComp />
                              </span>{" "}
                            </a>
                          </div>
                          <div
                            style={{
                              // paddingTop: "6px",
                              paddingBottom: "5px",
                              display: "flex",
                            }}
                          >
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {address === "" ? null : (
                                <img
                                  src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                                  style={{
                                    verticalAlign: "-2px",
                                    lineHeight: "1.2",
                                  }}
                                />
                              )}
                            </a>
                            &nbsp;
                            <a
                              href="tel:212-931-0000"
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                              }}
                            >
                              {" "}
                              <span
                                data-acs="phone"
                                style={{
                                  lineHeight: "1.2",
                                  colorScheme: "light only",
                                  color: "#212121",
                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <AddressComp />
                              </span>{" "}
                            </a>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              wordSpacing: "2px",
                              paddingTop: "10px",
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

export default Template7;
