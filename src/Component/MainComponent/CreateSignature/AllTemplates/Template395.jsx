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

const Name = "    Penelope James";
const Company = "  Physiotherapist";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/602d3905-f3ad-4ce7-acec-d303df7ede0d/img.png";

const Template395 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "5%", width: "60%" }}>
        <table style={{ float: "left", marginLeft: "10px", marginTop: "40px" }}>
          <tbody>
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: "Tahoma, Geneva, sans-serif",
                    fontSize: "27.0px",
                    fontStyle: "normal",
                    lineHeight: "29px",
                    fontWeight: 400,
                    color: "#535353",
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    fontFamily: "Tahoma, Geneva, sans-serif",
                    fontSize: "19.0px",
                    fontStyle: "normal",
                    lineHeight: "21px",
                    fontWeight: 700,
                    color: "#1e8453",
                    display: "inline",
                  }}
                >
                  <CompanyComp Company={Company} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          style={{
            padding: "0 15px",
            float: "left",
            marginLeft: "10px",
            marginBottom: "5px",
          }}
        >
          <tbody>
            <tr>
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
            </tr>
            <tr>
              <td>
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
          </tbody>
        </table>
        <table
          style={{
            width: "55%",
            float: "left",
            borderTop: "1px solid #000",
            padding: "7px 0",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: 0 }}>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          cellPadding={0}
                          cellSpacing={0}
                          className="ng-scope"
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "15.0px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#1e8453",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Phone.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <PhoneComp />
                                    &nbsp;
                                  </span>
                                </zs-remove>
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#1e8453",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Mobile.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <MobileComp /> &nbsp;
                                  </span>
                                </zs-remove>
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
              <td style={{ padding: 0 }}>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="ng-scope"
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "15.0px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#1e8453",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Web.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <WebsiteComp Website={Website} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  fontFamily: "Calibri, Helvetica, sans-serif",
                                  fontSize: "15.0px",
                                  fontStyle: "normal",
                                  lineHeight: "17px",
                                  fontWeight: 400,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#1e8453",
                                      display: "inline",
                                      fontSize:
                                        fontsize === 1
                                          ? "15px"
                                          : `${fontsize / 5 + 15}px`,
                                    }}
                                  >
                                    Address.
                                  </span>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Calibri, Helvetica, sans-serif",
                                      fontSize: "15.0px",
                                      fontStyle: "normal",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      color: "#000000",
                                      display: "inline",
                                    }}
                                  >
                                    <AddressComp Address={Address} />
                                  </span>
                                </zs-remove>
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "3px",
                                  height: "3px",
                                }}
                              ></td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderCollapse: "collapse",
                                  paddingBottom: "4px",
                                  height: "4px",
                                }}
                              />
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
              <td style={{ padding: 0 }}>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    fontFamily: "Arial,Helvetica,sans-serif",
                    lineHeight: "0px",
                    fontSize: "1px",
                    padding: "0px",
                    borderSpacing: "0px",
                    margin: "0px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ padding: 0 }}>
                        &gt;
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="ng-scope"
                          style={{
                            fontFamily: "Arial,Helvetica,sans-serif",
                            lineHeight: "0px",
                            fontSize: "1px",
                            padding: "0px",
                            borderSpacing: "0px",
                            margin: "0px",
                            borderCollapse: "collapse",
                          }}
                        >
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
                    margin: "20px 0 0 0",
                    fontSize: "17px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  <VideoConfComp />
                </a>

                <CTAComp />
              </td>
              <td style={{ float: "left" }}>
                <p
                  style={{
                    color: "#2b9a2b",
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
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

export default Template395;
