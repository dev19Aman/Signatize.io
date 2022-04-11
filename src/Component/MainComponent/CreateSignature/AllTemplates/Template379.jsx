import React from "react";

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

const Name = "  Kymberley Grace";
const Company = "   Photographer";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/f7508bb2-c046-4f08-b096-7d1b069b27cf/img.png";

const Template379 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 5px 0 0", float: "left" }}>
          <tbody>
            <tr>
              <td>
                {" "}
                <span
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: "27.0px",
                    fontStyle: "normal",
                    lineHeight: "29px",
                    fontWeight: 400,
                    color: "#535353",
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </span>{" "}
                <br />
                <span
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: "17.0px",
                    fontStyle: "italic",
                    lineHeight: "19px",
                    fontWeight: 700,
                    color: "#19abff",
                    display: "inline",
                  }}
                >
                  <CompanyComp Company={Company} />
                </span>{" "}
              </td>
            </tr>
            <tr>
              <td style={{ margin: "27px 0", float: "left" }}>
                <ImgComp img={img} />
              </td>
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
                  <SignatureComp />
                </a>
              </td>
            </tr>
            <tr>
              <td style={{ lineHeight: 0 }}>
                <table cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
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
                                          color: "#19abff",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            lineHeight: "1.2",
                                            fontSize:
                                              fontsize === 1
                                                ? "15px"
                                                : `${fontsize / 5 + 15}px`,
                                          }}
                                        >
                                          Phone
                                        </span>{" "}
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
                                          color: "#19abff",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            lineHeight: "1.2",
                                            fontSize:
                                              fontsize === 1
                                                ? "15px"
                                                : `${fontsize / 5 + 15}px`,
                                          }}
                                        >
                                          Website
                                        </span>{" "}
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
                                          href=""
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
                                            <WebsiteComp Website={Website} />
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
                                          color: "#19abff",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            lineHeight: "1.2",
                                            fontSize:
                                              fontsize === 1
                                                ? "15px"
                                                : `${fontsize / 5 + 15}px`,
                                          }}
                                        >
                                          Address
                                        </span>{" "}
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
                                          href=""
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
                                            <AddressComp Address={Address} />
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
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: "12px" }}>
                <table
                  className="ws-tpl-social"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{ width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <table border={0} cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <div
                              style={{
                                marginTop: "10px",
                              }}
                            >
                              <SocialComp />
                            </div>
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
        <table style={{ float: "left", width: "100%", marginTop: "10px" }}>
          <tbody>
            <tr>
              <td style={{ float: "left" }}>
                <VideoComp />
                <div style={{ float: youtubeUrl ? "right" : "left" }}>
                  <div className="grid grid-cols-2 gap-1">
                    <WedgitsSocialComp />
                  </div>
                </div>
              </td>
              <td style={{ float: "left" }}>
                <span
                  style={{
                    fontSize: "16px",
                    margin: "5px 0 0 0",
                    float: "left",
                  }}
                >
                  <QuoteComp />
                </span>
                <p
                  style={{
                    fontSize: "15PX",
                    float: "left",
                    margin: "10px 0 0 0",
                  }}
                >
                  <Disclamer />
                </p>
                <a
                  href="#"
                  style={{
                    float: "left",
                    color: "#000",
                    margin: "13px 0 0 0",
                    fontSize: "17px",
                    padding: "8px 18px 8px 18px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <VideoConfComp />
                </a>
                <CTAComp />
              </td>
              <td style={{ float: "left" }}>
                <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
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

export default Template379;
