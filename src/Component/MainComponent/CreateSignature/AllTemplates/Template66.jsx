import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {
  Namecom,
  CompanyComp,
  PhoneComp,
  SocialComp,
  VideoComp,
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
const Template66 = () => {
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
                      <td>
                        <div>
                          {/* <div>
                            <span
                              style="
                                font-family: Tahoma, Geneva, sans-serif;
                                font-size: 32px;
                                font-style: normal;
                                line-height: 24px;
                                font-weight: 700;
                                color: #000000;
                                display: inline;
                              "
                              >Tim Chivali
                            </span>
                          </div> */}
                          <div
                            style={{
                              borderCollapse: "collapse",
                              fontFamily: "Tahoma, Geneva, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "16px",
                              fontWeight: 700,
                              padding: "3px 0px",
                            }}
                          >
                            <zs-remove>
                              <span>
                                <Namecom Name={Name} />
                                &nbsp;
                              </span>
                            </zs-remove>
                          </div>
                          <div>
                            <div style={{ padding: "3px 0px" }}>
                              <span
                                style={{
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  lineHeight: "16px",
                                  fontWeight: 400,
                                  color: "#8b8b8b",
                                  display: "inline",
                                }}
                              >
                                <CompanyComp Company={Company} />
                                &nbsp;
                              </span>
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
                                {/* <span
                                  data-acs="phone"
                                  style="
                                    font-family: Tahoma, Geneva, sans-serif;
                                    font-size: 13px;
                                    font-style: normal;
                                    line-height: 15px;
                                    font-weight: 700;
                                    color: #000000;
                                    display: inline;
                                  "
                                >
                                  +1 (316) 182 1645
                                </span> */}
                              </a>
                            </div>
                            <div>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    lineHeight: "16px",
                                    fontWeight: 400,
                                    color: "#8b8b8b",
                                    display: "inline",
                                  }}
                                >
                                  <PhoneComp />
                                  &nbsp;
                                </span>
                              </zs-remove>
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
                      <td style={{ paddingLeft: "20px", paddingTop: "10px" }}>
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

                        {/* <div>
                      <span>
                        <a
                          href=""
                          style="
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 9px;
                            font-style: normal;
                            line-height: 10px;
                            font-weight: normal;
                            color: #777777;
                          "
                          >Get your own signature
                        </a>
                      </span>
                    </div> */}
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

export default Template66;
