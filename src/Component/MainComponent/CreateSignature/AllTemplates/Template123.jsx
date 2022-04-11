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
  SignatureComp,
  SignoffComp,
} from ".";

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
const Template123 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize, colors } = useSelector((state) => state.design);
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
                    <td style={{ paddingRight: "10px" }}>
                      <div style={{ paddingBottom: "15px" }}>
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
                              fontSize: "12px",
                              letterSpacing: "0px",
                              fontWeight: "bold",
                              color: "#444",
                              marginBottom: "5px",
                              float: "left",
                            }}
                          >
                            <CompanyComp Company={Company} />
                          </span>
                        </div>
                        &nbsp;
                        <div
                          style={{
                            background: phonenumber === "" ? null : "#45668E",
                            padding: "20px",
                            minWidth: "300px",
                          }}
                        >
                          <div>
                            <a
                              href=""
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: "#FFFFFF",
                              }}
                            >
                              {" "}
                              <font
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,
                                }}
                              >
                                {" "}
                                {phonenumber === "" ? null : "  P"}
                              </font>{" "}
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
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                data-acs="phone"
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,
                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <PhoneComp />
                              </font>{" "}
                            </a>
                          </div>
                          <div style={{ paddingTop: "7px" }}>
                            <a
                              href=""
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,
                                }}
                              >
                                {" "}
                                {website === "" ? null : "  W "}
                              </font>{" "}
                            </a>
                            &nbsp;
                            <a
                              href="http://www.je-marketing.com"
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                data-acs="website"
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,

                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <WebsiteComp />
                              </font>{" "}
                            </a>
                          </div>
                          <div style={{ paddingTop: "7px" }}>
                            <a
                              href=""
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,
                                }}
                              >
                                {" "}
                                {email === "" ? null : "  E "}
                              </font>{" "}
                            </a>
                            &nbsp;
                            <a
                              href="mailto:jason@je-marketing.com "
                              target="_blank"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                data-acs="email"
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,

                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <EmailComp />
                              </font>{" "}
                            </a>
                          </div>
                          <div
                            style={{ paddingTop: "6px", paddingBottom: "5px" }}
                          >
                            <a
                              href="#"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,
                                }}
                              >
                                {" "}
                                {address === "" ? null : "A "}
                              </font>{" "}
                            </a>
                            &nbsp;
                            <a
                              href="#"
                              style={{
                                colorScheme: "light only",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontFamily: "Arial",
                                color: "#FFFFFF",
                                WebkitTextFillColor: colors,
                              }}
                            >
                              {" "}
                              <font
                                data-acs="address"
                                style={{
                                  colorScheme: "light only",
                                  lineHeight: "1.2",
                                  color: "#FFFFFF",
                                  WebkitTextFillColor: colors,

                                  fontFamily: "Arial",
                                  whiteSpace: "nowrap",
                                  fontSize: "12px",
                                }}
                              >
                                {" "}
                                <AddressComp />
                              </font>{" "}
                            </a>
                          </div>
                          <div style={{ paddingTop: "10px", display: "flex" }}>
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
              <table>
                <tbody>
                  <tr>
                    <td>
                      <table
                        style={{
                          float: "left",
                          width: "100%",
                          marginTop: "28px",
                        }}
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

export default Template123;
