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

const Template106 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
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
              <div style={{ display: "flex" }}>
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
                      borderBottom: Name === null ? null : "4px solid #FF0000",
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
                      color: "#FF0000",
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
                      color: "#FF0000",
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
                      color: "#FF0000",
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
    </div>
  );
};

export default Template106;
