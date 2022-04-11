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
const Template440 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  const socialImages = useSelector((state) => state.social.socialImages);

  return (
    <table>
      <table>
        <tbody>
          <tr>
            <td style={{ padding: "0 5px 0 0", float: "left" }}>
              <div style={{}}>
                {images === null ? null : (
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "15px",
                      fontStyle: "normal",
                      lineHeight: "17px",
                      fontWeight: 400,
                      color: "#000000",
                      padding: "0px 0px",
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
            <td style={{ paddingLeft: "10px" }}>
              <div style={{ top: "10px" }}>
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0px",
                      fontWeight: "bold",
                      color: "#2b5ab5",
                    }}
                  >
                    <CompanyComp Company={Company} />
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "15px",
                      fontStyle: "normal",
                      lineHeight: "15px",
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    <Namecom Name={Name} />
                  </span>
                </div>
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
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
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
                  </div>
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
                      {website === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
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
                  </div>
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
                      {email === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
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
                      {address === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
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
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ paddingTop: "30px", width: "520px" }}>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: images === null ? null : "#2b5ab5",
                padding: "12px 6px",
                lineHeight: "0%",
              }}
            >
              <table
                cellPadding={0}
                cellSpacing={0}
                style={{ lineHeight: "1.2", float: "right" }}
                align="right"
              >
                <tbody>
                  <tr>
                    <td>
                      <table border={0} cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td
                              align="left"
                              style={{
                                paddingRight: "6px",
                                textAlign: "center",
                                paddingTop: 0,
                                display: "flex",
                              }}
                            >
                              {" "}
                              <SocialComp />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div style={{ height: "1px!important" }} />
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
    </table>
  );
};

export default Template440;
