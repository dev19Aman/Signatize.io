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
const Template51 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  // const { fontsize } = useSelector((state) => state.design);
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
                                fontFamily: "Tahoma, Geneva, sans-serif",
                                fontSize: "32px",
                                fontStyle: "normal",
                                lineHeight: "24px",
                                fontWeight: 700,
                                color: "#000000",
                                display: "inline",
                              }}
                            >
                              <Namecom Name={Name} />
                            </span>
                          </div>
                          <div
                            style={{
                              paddingBottom: "10px",
                              // paddingTop: "10px",
                              borderBottom:
                                images === null ? null : "2px solid #e6e6e6",
                            }}
                          >
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Tahoma, Geneva, sans-serif",
                                  fontSize: "13px",
                                  fontStyle: "normal",
                                  lineHeight: "15px",
                                  fontWeight: 700,
                                  color: "#4e4e4e",
                                  display: "inline",
                                }}
                              >
                                <CompanyComp Company={Company} />
                                &nbsp;
                              </span>
                            </zs-remove>
                          </div>
                          <div>
                            <div>
                              {phonenumber === "" ? null : (
                                <span
                                  style={{
                                    fontFamily: `${fontFamily}`,
                                    fontSize:
                                      fontsize === 1
                                        ? "14px"
                                        : `${fontsize / 5 + 14}px`,
                                    color: `${colors}`,
                                  }}
                                >
                                  {" "}
                                  Phone.
                                </span>
                              )}
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
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    lineHeight: "15px",
                                    fontWeight: 700,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <PhoneComp />
                                </span>
                              </a>
                            </div>
                            <div>
                              <zs-remove>
                                {mobilenumber === "" ? null : (
                                  <span
                                    style={{
                                      fontFamily: `${fontFamily}`,
                                      fontSize:
                                        fontsize === 1
                                          ? "14px"
                                          : `${fontsize / 5 + 14}px`,
                                      color: `${colors}`,
                                    }}
                                  >
                                    {" "}
                                    Mobile.
                                  </span>
                                )}
                                <span
                                  className="ng-binding ng-scope"
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    lineHeight: "15px",
                                    fontWeight: 700,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <MobileComp />
                                </span>
                              </zs-remove>
                            </div>
                            <div>
                              <zs-remove>
                                {email === "" ? null : (
                                  <span
                                    style={{
                                      fontFamily: `${fontFamily}`,
                                      fontSize:
                                        fontsize === 1
                                          ? "14px"
                                          : `${fontsize / 5 + 14}px`,
                                      color: `${colors}`,
                                    }}
                                  >
                                    {" "}
                                    Email.{" "}
                                  </span>
                                )}
                                <span
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    lineHeight: "15px",
                                    fontWeight: 700,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <EmailComp />
                                </span>
                              </zs-remove>
                            </div>
                            <div>
                              <zs-remove>
                                {address === "" ? null : (
                                  <span
                                    style={{
                                      fontFamily: `${fontFamily}`,
                                      fontSize:
                                        fontsize === 1
                                          ? "14px"
                                          : `${fontsize / 5 + 14}px`,
                                      color: `${colors}`,
                                    }}
                                  >
                                    {" "}
                                    address{" "}
                                  </span>
                                )}
                                <span
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    lineHeight: "15px",
                                    fontWeight: 700,
                                    color: "#000000",
                                    display: "inline",
                                  }}
                                >
                                  <AddressComp />
                                </span>
                              </zs-remove>
                            </div>
                          </div>
                          <span
                            style={{
                              display: "flex",
                              padding: "8px 0px",
                              marginTop: "5px",
                              marginLeft: "8px",
                              // gap: "6px",
                              // gridTemplateColumns: "repeat(3, 1fr)",
                              // gap: "30px 20px",
                              // display: "grid",
                              // gridAutoFlow: "column",
                            }}
                          >
                            <SocialComp />
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
                          // gap: "2px",
                          textDecoration: "none",
                        }}
                      >
                        {videoconf === "" ? null : (
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
                          </span>
                        )}
                        &nbsp;
                        <span
                          style={{
                            textDecoration: "none",
                            float: "left",
                            // color: "#000",
                            margin: " 13px 0 0 0",
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
      </div>
    </div>
  );
};

export default Template51;
