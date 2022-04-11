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
const Template221 = () => {
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
        <table>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ paddingRight: "10px" }}>
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
                      <td
                        style={{
                          borderLeft:
                            borderRight === true
                              ? null
                              : `1px solid ${borderColor}`,
                          paddingLeft: "8px",
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "17px",
                              fontStyle: "normal",
                              lineHeight: "19px",
                              fontWeight: 700,
                              color: "#646464",
                              display: "inline",
                            }}
                          >
                            <Namecom Name={Name} />
                          </span>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 700,
                              color: "#646464",
                              display: "inline",
                            }}
                          >
                            <CompanyComp Company={Company} />
                          </span>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
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
                                color: "black",
                                fontFamily: "Arial",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                            >
                              <PhoneComp />
                            </span>
                          </a>
                          <span
                            style={{
                              colorScheme: "light only",
                              fontWeight: "bold",
                              fontSize: "12px",
                              color: "black",
                              verticalAlign: "2px",
                            }}
                          >
                            {phonenumber === "" ? null : " |"}
                          </span>
                          <a
                            href=""
                            style={{
                              colorScheme: "light only",
                              textDecoration: "none",
                              ontSize: "12px",
                              fontFamily: "Arial",
                            }}
                          >
                            <span
                              data-acs="website"
                              style={{
                                lineHeight: "1.2",
                                colorScheme: "light only",
                                color: "black",
                                fontFamily: "Arial",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              <WebsiteComp />
                            </span>
                          </a>
                          <span
                            style={{
                              colorScheme: "light only",
                              fontWeight: "bold",
                              fontSize: "12px",
                              color: "black",
                              verticalAlign: "2px",
                            }}
                          >
                            {email === "" ? null : "  |"}
                          </span>
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
                                color: "black",
                                fontFamily: "Arial",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              <EmailComp />
                            </span>
                          </a>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
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
                              data-acs="address"
                              style={{
                                lineHeight: "1.2",
                                colorScheme: "light only",
                                color: "black",
                                fontFamily: "Arial",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              <AddressComp />
                            </span>
                          </a>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            wordSpacing: "2px",
                            paddingTop: "5px",
                          }}
                        >
                          <SocialComp />
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
    </>
  );
};

export default Template221;
