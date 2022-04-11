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
const Template81 = () => {
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
                        style={{ paddingRight: "10px", paddingBottom: "50px" }}
                      >
                        <div
                          style={
                            {
                              // paddingBottom: "10px"
                            }
                          }
                        >
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
                      <td style={{ paddingLeft: "8px" }}>
                        <div
                          style={{
                            // position: "absolute",
                            top: "10px",
                          }}
                        >
                          <div>
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "30.0px",
                                fontStyle: "normal",
                                lineHeight: "32px",
                                fontWeight: 700,
                                color: "#454545",
                                display: "inline",
                              }}
                            >
                              <Namecom Name={Name} />
                            </span>
                          </div>
                          <div
                            style={{
                              paddingBottom: "12px",
                              //  paddingTop: "2px"
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Calibri, Helvetica, sans-serif",
                                fontSize: "18.0px",
                                fontStyle: "normal",
                                lineHeight: "20px",
                                fontWeight: 700,
                                color: "#eb5757",
                                display: "inline",
                              }}
                            >
                              <CompanyComp Company={Company} />
                            </span>
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
                                <span
                                  data-acs="phone"
                                  style={{
                                    fontFamily:
                                      "Calibri, Helvetica, sans-serif",
                                    fontSize: "14.0px",
                                    fontStyle: "normal",
                                    lineHeight: "16px",
                                    fontWeight: 400,
                                    color: "#454545",
                                    display: "inline",
                                  }}
                                >
                                  <PhoneComp />
                                </span>
                              </a>
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
                              <a
                                href
                                data-acs="website"
                                style={{
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  color: "#454545",
                                  display: "inline",
                                  textDecoration: "none",
                                }}
                              >
                                <EmailComp />
                              </a>
                            </div>
                            <div>
                              {/* <span style="font-size: 14.0px;
                           font-style: normal;
                           line-height: 16px;
                           font-weight: 700;
                           color: #ff0000;
                           display: inline;
                           font-family: Arial ">
                               E &nbsp;
                           </span> */}
                              <a
                                href
                                data-acs="email"
                                style={{
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "14.0px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  color: "#454545",
                                  display: "inline",
                                  textDecoration: "none",
                                }}
                              >
                                <WebsiteComp />
                              </a>
                            </div>
                          </div>
                          <div style={{ paddingTop: "15px" }}>
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

export default Template81;
