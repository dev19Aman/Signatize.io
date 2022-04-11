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

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
const Template475 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
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
                              color: "#df3883",
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
                        <tr>
                          <td style={{ lineHeight: 0 }}>
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
                                            )}{" "}
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
                                </tr>
                                <tr>
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
                                </tr>
                                <tr>
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
                                            )}{" "}
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
                                            }}
                                          >
                                            {" "}
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
                      </div>
                      <div>
                        <tr>
                          <td style={{ paddingTop: "12px" }}>
                            <table
                              className="ws-tpl-social"
                              cellPadding={0}
                              cellSpacing={0}
                              style={{ width: "100%" }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  // padding: "8px 0px",
                                  // marginTop: "5px",
                                }}
                              >
                                <SocialComp />
                              </span>
                            </table>
                          </td>
                        </tr>
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

export default Template475;
