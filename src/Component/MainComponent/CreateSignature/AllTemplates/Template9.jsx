import React from "react";

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

const Template9 = () => {
  const { youtubeUrl, videoconf, greenMessage, quoteTitle } = useSelector(
    (state) => state.counter
  );
  const { colors, fontsize, fontFamily, lineHeight, borderRight, borderColor } =
    useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  return (
    <div style={{ margin: "auto" }}>
      <table>
        <tbody>
          <tr>
            <td style={{ paddingRight: "10px" }}>
              <div>
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
              &nbsp;
              <div>{images === null ? null : <ImgComp />}</div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <SocialComp />
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
            <td>
              <div style={{ paddingLeft: "20px" }}>
                <div style={{ paddingBottom: "15px" }}>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "30.0px",
                      fontStyle: "normal",
                      lineHeight: "32px",
                      fontWeight: 700,
                      color: "#000000",
                      borderBottom: Name === null ? null : "4px solid #005491",
                    }}
                  >
                    <Namecom Name={Name} />
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica,  sans-serif",
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#005491",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                      color: `${colors}`,
                    }}
                  >
                    {phonenumber === "" ? null : "  P."}
                  </span>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica,   sans-serif",
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#000000",
                      display: "inline",
                    }}
                  >
                    <PhoneComp />
                  </span>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#005491",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                      color: `${colors}`,
                    }}
                  >
                    {website === "" ? null : "  W. "}
                  </span>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
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
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#005491",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                      color: `${colors}`,
                    }}
                  >
                    {address === "" ? null : "A."}
                  </span>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "18.0px",
                      fontStyle: "normal",
                      lineHeight: "20px",
                      fontWeight: 700,
                      color: "#000000",
                      display: "inline",
                    }}
                  >
                    {" "}
                    <AddressComp />
                  </span>
                </div>
              </div>
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

export default Template9;
