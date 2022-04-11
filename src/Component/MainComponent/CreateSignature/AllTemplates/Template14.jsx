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
const Template14 = () => {
  const {
    counter,
    youtubeUrl,
    videoConferencebtn,
    videoconf,
    greenMessage,
    quoteTitle,
  } = useSelector((state) => state.counter);
  const { phonenumber, mobilenumber, website, address, images, email, name } =
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
                    </td>
                    <td>
                      <div
                        style={{
                          background: name === "" ? null : "#45668E",
                          padding: "15px 100px",
                        }}
                      >
                        <div>
                          <span
                            data-acs="title"
                            className="ws-tpl-title"
                            style={{
                              colorScheme: "light only",
                              fontSize: "12px",
                              letterSpacing: "0px",
                              color: "#ffffff",
                              fontFamily: "Arial",
                              textTransform: "initial",
                              marginLeft: "-80px",
                            }}
                          >
                            <CompanyComp Company={Company} />
                          </span>
                          {/* <span
                            style={{
                              colorScheme: "light only",
                              fontSize: "12px",
                              letterSpacing: "0px",
                              color: "#ffffff",
                              fontFamily: "Arial",
                              textTransform: "initial",
                            }}
                          >
                            JE marketing
                          </span> */}
                        </div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "17px",
                            fontStyle: "normal",
                            lineHeight: "19px",
                            fontWeight: 700,
                            color: "#fff",
                            marginLeft: "-80px",
                          }}
                        >
                          <Namecom Name={Name} />
                        </span>
                      </div>
                      <div style={{ paddingTop: "10px" }}>
                        <a
                          href="tel:212-931-0000"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          {" "}
                          <span
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
                        &nbsp;&nbsp;&nbsp;
                        <a
                          href="#"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          {" "}
                          <span
                            style={{
                              lineHeight: "1.2",
                              colorScheme: "light only",
                              color: "#212121",
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            <WebsiteComp />
                          </span>{" "}
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a
                          href="mailto:jason@je-marketing.com "
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                          }}
                        >
                          {" "}
                          <span
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
                      <div>
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
                          <AddressComp />
                        </span>
                      </div>
                      <div>
                        <div style={{ paddingTop: "15px", display: "flex" }}>
                          <SocialComp />
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

export default Template14;
