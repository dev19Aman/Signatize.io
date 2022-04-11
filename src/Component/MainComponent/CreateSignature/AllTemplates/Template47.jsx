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
const Name = "Tanya Bisskut";
const Company = "Tim Chivali  CHIEF PROGRAMMER AT TALK.IO";
const Website = "www.gimm.io";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/af518326-7879-4372-90ba-a437a38f5564/img.png";

const Template47 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <div style={{ margin: "auto", marginTop: "2%" }}>
      <table
        style={{
          borderRight: "2px solid #bdbdbd",
          padding: "0 15px",
          float: "left",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontFamily: "Calibri, Helvetica, sans-serif",
                fontSize: "15.0px",
                fontStyle: "normal",
                lineHeight: "17px",
                fontWeight: 400,
                color: "#000000",
                display: "inline",
                marginBottom: "10px",
                float: "left",
              }}
            >
              <SignoffComp />
            </td>
          </tr>
          <tr>
            <td>
              <ImgComp img={img} />
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "9.0px",
                fontStyle: "normal",
                lineHeight: "10px",
                fontWeight: "normal",
                color: "#777777",
              }}
            >
              <a
                href
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "9.0px",
                  fontStyle: "normal",
                  lineHeight: "10px",
                  fontWeight: "normal",
                  color: "#777777",
                  marginTop: "10px",
                  float: "left",
                }}
              >
                <SignatureComp />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ float: "left", marginLeft: "10px" }}>
        <tbody>
          <tr>
            <td>
              <span style={{ color: "#005491", fontWeight: "bold" }}>
                {" "}
                <Namecom Name={Name} />
              </span>
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontSize: "13px",
                letterSpacing: "0px",
                fontWeight: "bold",
                color: "#646464",
                marginBottom: "5px",
                float: "left",
              }}
            >
              {" "}
              <CompanyComp Company={Company} />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
                      <table
                        className="ws-tpl-phone"
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          lineHeight: "14px",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
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
                              </a>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
                      <table
                        className="ws-tpl-website"
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          lineHeight: "14px",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: "0 6px" }}>
                              {" "}
                              <span
                                style={{
                                  colorScheme: "light only",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                  color: "#212121",
                                  verticalAlign: "2px",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                {" "}
                                |{" "}
                              </span>{" "}
                            </td>
                            <td
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              <a
                                href=""
                                style={{
                                  colorScheme: "light only",
                                  textDecoration: "none",
                                  fontSize: "12px",
                                  fontFamily: "Arial",
                                }}
                              >
                                {" "}
                                <span
                                  data-acs="website"
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
                                  <WebsiteComp Website={Website} />
                                </span>{" "}
                              </a>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
                      <table
                        className="ws-tpl-email"
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          lineHeight: "14px",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: "0 6px" }}>
                              {" "}
                              <span
                                style={{
                                  colorScheme: "light only",
                                  fontFamily: "Arial",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                  color: "#212121",
                                  verticalAlign: "2px",
                                  fontSize:
                                    fontsize === 1
                                      ? "15px"
                                      : `${fontsize / 5 + 15}px`,
                                }}
                              >
                                {" "}
                                |{" "}
                              </span>{" "}
                            </td>
                            <td
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
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
                                {" "}
                                <span
                                  data-acs="email"
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
                              </a>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
                      <table
                        className="ws-tpl-address"
                        cellPadding={0}
                        cellSpacing={0}
                        style={{
                          lineHeight: "14px",
                          fontSize: "12px",
                          fontFamily: "Arial",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                colorScheme: "light only",
                                fontFamily: "Arial",
                                fontSize: "12px",
                              }}
                            >
                              {" "}
                              <a
                                href=""
                                style={{
                                  colorScheme: "light only",
                                  textDecoration: "none",
                                  fontSize: "12px",
                                  fontFamily: "Arial",
                                }}
                              >
                                {" "}
                                <span
                                  data-acs="address"
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
                                  <AddressComp Address={Address} />
                                </span>{" "}
                              </a>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        <tbody>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <SocialComp />
          </div>
        </tbody>
      </table>
      <table style={{ float: "left", width: "100%", marginTop: "10px" }}>
        <tbody>
          <tr>
            <td style={{ float: "left" }}>
              <VideoComp />

              <div style={{ float: youtubeUrl ? "right" : "left" }}>
                <div className="grid grid-cols-2 gap-1">
                  <WedgitsSocialComp />
                </div>
              </div>
            </td>
            <td style={{ float: "left" }}>
              <span
                style={{ fontSize: "16px", margin: "5px 0 0 0", float: "left" }}
              >
                <QuoteComp />
              </span>
              <p
                style={{
                  fontSize: "15PX",
                  float: "left",
                  margin: "10px 0 0 0",
                }}
              >
                <Disclamer />
              </p>
              <a
                href="#"
                style={{
                  float: "left",
                  color: "#000",
                  margin: "13px 0 0 0",
                  fontSize: "17px",
                  padding: "8px 18px 8px 18px",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                <VideoConfComp />
              </a>

              <CTAComp />
            </td>
            <td style={{ float: "left" }}>
              <p
                style={{
                  color: "#2b9a2b",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                <GreenMsgComp />
              </p>
              <BannerComp />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Template47;
