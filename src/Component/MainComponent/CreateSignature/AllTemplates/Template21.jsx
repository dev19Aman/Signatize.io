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
const Template21 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
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
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <table style={{ padding: "0 5px 0 0", float: "left" }}>
                  <tbody>
                    <tr>
                      {images === null ? null : (
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
                      )}
                    </tr>
                    <tr>
                      <td>{images === null ? null : <ImgComp />}</td>
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
                          {images === null ? null : <SignatureComp />}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ float: "left", marginLeft: "10px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <span
                          style={{
                            color: "#45668E",
                            fontWeight: "bold",
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <Namecom Name={Name} />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0px",
                          fontWeight: "bold",
                          color: "#444",
                          marginBottom: "5px",
                          float: "left",
                        }}
                      >
                        {" "}
                        <CompanyComp Company={Company} />
                      </td>
                    </tr>
                  </tbody>
                  <tbody
                    style={{
                      borderTop: images === null ? null : "1px solid #BDBDBD",

                      float: "left",
                      borderBottom:
                        images === null ? null : "1px solid #BDBDBD",
                      padding: "13px 0 4px 0",
                    }}
                  >
                    <tr>
                      <td>
                        <table cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  lineHeight: "0%",
                                  paddingBottom: "6px",
                                }}
                              >
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
                                          fontWeight: "bold",
                                          fontSize: "12px",
                                          color: "#45668E",
                                        }}
                                      >
                                        {" "}
                                        {phonenumber === "" ? null : (
                                          <img
                                            src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                                            style={{
                                              verticalAlign: "-2px",
                                              lineHeight: "1.2",
                                            }}
                                          />
                                        )}
                                      </td>

                                      <td
                                        style={{
                                          width: "5px",
                                          fontSize: "1pt",
                                          lineHeight: 0,
                                        }}
                                        width={5}
                                      >
                                        &nbsp;
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
                              <td
                                style={{
                                  lineHeight: "0%",
                                  paddingBottom: "6px",
                                }}
                              >
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
                                            fontFamily: "Arial",
                                            fontWeight: "bold",
                                            fontSize: "12px",
                                            color: "#212121",
                                          }}
                                        >
                                          {" "}
                                        </span>{" "}
                                      </td>
                                      <td
                                        style={{
                                          colorScheme: "light only",
                                          fontFamily: "Arial",
                                          fontWeight: "bold",
                                          fontSize: "12px",
                                          color: "#45668E",
                                        }}
                                      >
                                        {website === "" ? null : (
                                          <img
                                            src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                                            style={{
                                              verticalAlign: "-2px",
                                              lineHeight: "1.2",
                                            }}
                                          />
                                        )}
                                      </td>
                                      <td
                                        style={{
                                          width: "5px",
                                          fontSize: "1pt",
                                          lineHeight: 0,
                                        }}
                                        width={5}
                                      >
                                        &nbsp;
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
                                          href="http://www.je-marketing.com"
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
                                            <WebsiteComp />
                                          </span>{" "}
                                        </a>{" "}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td
                                style={{
                                  lineHeight: "0%",
                                  paddingBottom: "6px",
                                }}
                              >
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
                                          }}
                                        >
                                          {" "}
                                        </span>{" "}
                                      </td>
                                      <td
                                        style={{
                                          colorScheme: "light only",
                                          fontFamily: "Arial",
                                          fontWeight: "bold",
                                          fontSize: "12px",
                                          color: "#45668E",
                                        }}
                                      >
                                        {" "}
                                        {email === "" ? null : (
                                          <img
                                            src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                                            style={{
                                              verticalAlign: "-2px",
                                              lineHeight: "1.2",
                                            }}
                                          />
                                        )}
                                      </td>
                                      <td
                                        style={{
                                          width: "5px",
                                          fontSize: "1pt",
                                          lineHeight: 0,
                                        }}
                                        width={5}
                                      >
                                        &nbsp;
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
                                          href="mailto:jason@je-marketing.com "
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
                              <td
                                style={{
                                  lineHeight: "0%",
                                  paddingBottom: "6px",
                                }}
                              >
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
                                          fontWeight: "bold",
                                          fontSize: "12px",
                                          color: "#45668E",
                                          paddingTop: "9px",
                                        }}
                                      >
                                        {address === "" ? null : (
                                          <img
                                            src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                                            style={{
                                              verticalAlign: "-2px",
                                              lineHeight: "1.2",
                                            }}
                                          />
                                        )}
                                      </td>
                                      <td
                                        style={{
                                          width: "5px",
                                          fontSize: "1pt",
                                          lineHeight: 0,
                                        }}
                                        width={5}
                                      >
                                        &nbsp;
                                      </td>
                                      <td
                                        style={{
                                          colorScheme: "light only",
                                          fontFamily: "Arial",
                                          fontSize: "12px",
                                          paddingTop: "5px", // add aditional on my own
                                        }}
                                      >
                                        {" "}
                                        <a
                                          href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
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
                    <tr style={{ float: "left", paddingTop: "5px" }}>
                      <td style={{ paddingRight: "3px", display: "flex" }}>
                        <SocialComp />
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
    </>
  );
};

export default Template21;
