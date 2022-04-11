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
const Template380 = () => {
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
    <>
      <table>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Crimson+Pro:wght@200&family=Glory:wght@100&family=Karantina:wght@300&family=Patrick+Hand&family=Staatliches&display=swap"
          rel="stylesheet"
        /> */}
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td
                      style={{
                        paddingRight: "10px",
                      }}
                    >
                      <div
                        style={{
                          borderRight:
                            borderRight === true
                              ? null
                              : `1px solid ${borderColor}`,
                        }}
                      >
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
                              marginRight: "5px",
                            }}
                          >
                            {images === null ? null : <SignatureComp />}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        paddingLeft: "8px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            color: "#008bb8",
                            display: "inline",
                          }}
                        >
                          <Namecom Name={Name} />
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "Calibri, Helvetica, sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 700,
                          color: "#000000",
                          display: "inline",
                        }}
                      >
                        <CompanyComp Company={Company} />
                      </span>
                      <div>
                        <span
                          style={{
                            // fontFamily: "Calibri, Helvetica, sans-serif",
                            // fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#008bb8",
                            // display: "inline",
                          }}
                        >
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
                        </span>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000000",
                          }}
                        >
                          <PhoneComp />
                        </span>
                        {/* &nbsp; */}
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#008bb8",
                            marginLeft: phonenumber === "" ? null : "5px",
                            // display: "inline",
                            // position:"relative",
                            // left:"10px"
                          }}
                        >
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
                        </span>
                        <span
                          style={{
                            fontFamily: "Calibri, Helvetica, sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            lineHeight: "17px",
                            fontWeight: 400,
                            color: "#000000",
                            display: "inline",
                          }}
                        >
                          <MobileComp />
                          &nbsp;
                        </span>
                        <div>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#008bb8",
                              display: "inline",
                            }}
                          >
                            {website === "" ? null : (
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
                                Web.{" "}
                              </span>
                            )}
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
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
                              fontSize: "14px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#008bb8",
                              display: "inline",
                            }}
                          >
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
                          </span>
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
                            <AddressComp />
                          </span>
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

      {/* <table>
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
                        backgroundColor: "blue",
                        width: "100%",
                      }}
                    >
                      <VideoComp />
                    </td>
                    <td
                      style={{
                        float: "left",
                        backgroundColor: "red",
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
                      <div>
                        <p
                          style={{
                            fontSize: "15px",
                            float: "left",
                            margin: "10px 0 0 0",
                          }}
                        >
                          <Disclamer />
                        </p>
                      </div>

                      <a
                        href="#"
                        style={{
                          float: "left",
                          color: "#000",
                          margin: "13px 0 0 0",
                          fontSize: "17px",
                          background: "gray",
                          padding: "8px 18px 8px 18px",
                          borderRadius: "4px",
                          textDecoration: "none",
                        }}
                      >
                        <i
                          className="fa fa-video-camera"
                          aria-hidden="true"
                          style={{
                            lineHeight: 1,
                            fontSize: "13px",
                            margin: "0 6px 0 0",
                          }}
                        ></i>
                        meet me!
                      </a>
                    </td>
                    <td style={{ float: "left" }}>
                      <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
                        <img
                          src="images/mail.png"
                          alt=""
                          style={{
                            width: "20px",
                            lineHeight: 1,
                            margin: "1px 11px 0 0",
                            float: "left",
                          }}
                        />
                        Please consider the environment before priting this
                        e-mail!
                      </p>
                      <img src="images/banner.png" alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table> */}

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
    </>
  );
};
export default Template380;
