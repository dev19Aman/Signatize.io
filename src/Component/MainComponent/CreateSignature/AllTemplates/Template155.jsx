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
const Template155 = () => {
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
                        <div
                          style={
                            {
                              //  paddingBottom: "10px"
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
                                display: "inline",
                              }}
                            >
                              <SignoffComp />
                            </span>
                          )}
                        </div>
                        <div style={{ top: "10px" }}>
                          <div>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "28px",
                                  fontStyle: "normal",
                                  lineHeight: "30px",
                                  fontWeight: 700,
                                  color: "#4a4a4a",
                                  display: "inline",
                                }}
                              >
                                <Namecom Name={Name} />
                              </span>
                            </zs-remove>
                          </div>
                          <div
                            style={
                              {
                                //  paddingBottom: "8px",
                                // paddingTop: "10px",
                              }
                            }
                          >
                            <zs-remove>
                              <span
                                className="ng-binding ng-scope"
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "19px",
                                  fontStyle: "italic",
                                  lineHeight: "21px",
                                  fontWeight: 700,
                                  color: "#4951c5",
                                  display: "inline",
                                }}
                              >
                                <CompanyComp Company={Company} />
                              </span>
                            </zs-remove>
                          </div>
                          {/* <div style={{ paddingBottom: "15px" }}>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "19px",
                                  fontStyle: "normal",
                                  lineHeight: "21px",
                                  fontWeight: 400,
                                  color: "#4a4a4a",
                                  display: "inline",
                                }}
                              >
                                CHP Minerals
                              </span>
                            </zs-remove>
                          </div> */}
                          <div>
                            <div style={{ paddingBottom: "5px" }}>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "15px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 700,
                                    color: "#4a4a4a",
                                    display: "inline",
                                  }}
                                >
                                  {mobilenumber === "" ? null : " Mobile "}
                                </span>
                                <span
                                  style={{
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "15px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#4a4a4a",
                                    display: "inline",
                                  }}
                                >
                                  <MobileComp />
                                </span>
                              </zs-remove>
                            </div>
                          </div>
                          <div>
                            <div style={{ paddingBottom: "5px" }}>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "15px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 700,
                                    color: "#4a4a4a",
                                    display: "inline",
                                  }}
                                >
                                  {phonenumber === "" ? null : "Office "}
                                </span>
                                <span
                                  style={{
                                    fontFamily: "Arial, Helvetica, sans-serif",
                                    fontSize: "15px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#4a4a4a",
                                    display: "inline",
                                  }}
                                >
                                  <PhoneComp />
                                </span>
                              </zs-remove>
                            </div>
                          </div>
                          <div>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "15px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 700,
                                  color: "#4a4a4a",
                                  display: "inline",
                                }}
                              >
                                {website === "" ? null : "Website "}
                              </span>
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "15px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 400,
                                  color: "#4a4a4a",
                                  display: "inline",
                                }}
                              >
                                <WebsiteComp />
                              </span>
                            </zs-remove>
                          </div>
                          <div style={{ paddingTop: "20px" }}>
                            <zs-remove>
                              <span
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif",
                                  fontSize: "15px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 400,
                                  color: "#4a4a4a",
                                  display: "inline",
                                }}
                              >
                                <AddressComp />
                              </span>
                            </zs-remove>
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
                          <div>
                            <zs-remove
                              rel="nofollow"
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
                            </zs-remove>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{
                          paddingLeft: "20px",
                          borderLeft: "6px solid #ff0000",
                          border: "100px",
                          paddingBottom: "40px",
                        }}
                      >
                        <div style={{ paddingBottom: "10px" }} />
                        <div
                          style={{
                            borderLeft:
                              images === null ? null : "1px solid lightgray",
                            paddingLeft: "20px",
                          }}
                        >
                          {images === null ? null : <ImgComp />}
                        </div>
                        <div>
                          {/* <span>
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
                      </span> */}
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
    </div>
  );
};

export default Template155;
