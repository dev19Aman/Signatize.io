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

const Name = " CHRIS MONROE";
const Company = " Online marketer, JE marketing";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/d9b239a4-6fe1-4385-9627-7c62fc34c472/-/crop/91x88/14,4/-/preview/img.png";
const Template430 = () => {
  const { youtubeUrl, email } = useSelector((state) => state.counter);
  const { fontsize, colors } = useSelector((state) => state.design);
  return (
    <div>
      <div style={{ margin: "auto", marginTop: "2%" }}>
        <table style={{ padding: "0 5px 0 0", float: "left" }}>
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
        <table style={{ float: "left", marginLeft: "10px", marginTop: "40px" }}>
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
                                  fontSize: "17.0px",
                                  fontStyle: "normal",
                                  lineHeight: "19px",
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Arial Black, Gadget, sans-serif",
                                      fontSize: "19.0px",
                                      fontStyle: "normal",
                                      lineHeight: "21px",
                                      fontWeight: 700,
                                      color: "#2b5ab5",
                                      display: "inline",
                                      float: "left",
                                      padding: "6px 0",
                                      borderBottom: "4px solid #222222",
                                    }}
                                  >
                                    <Namecom Name={Name} />
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
                                  fontWeight: 700,
                                  padding: 0,
                                }}
                              >
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily:
                                        "Arial Black, Gadget, sans-serif",
                                      fontSize: "17.0px",
                                      fontStyle: "normal",
                                      lineHeight: "19px",
                                      fontWeight: 400,
                                      color: "#222222",
                                      display: "inline",
                                      paddingTop: "5px",
                                      float: "left",
                                    }}
                                  >
                                    <CompanyComp Company={Company} />
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
          </tbody>
        </table>
        <table style={{ margin: "30px 0 0 13px", float: "left" }}>
          <tbody>
            <tr>
              <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
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
                          color: "#FFFFFF",
                          WebkitTextFillColor: "#FFFFFF",
                        }}
                      >
                        {" "}
                        <a
                          href=""
                          target="_blank"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                            color: "#FFFFFF",
                            WebkitTextFillColor: "#FFFFFF",
                          }}
                        >
                          {" "}
                          <font
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "#FFFFFF",
                              WebkitTextFillColor: "#2b5ab5",
                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            {" "}
                            P{" "}
                          </font>{" "}
                        </a>{" "}
                      </td>
                      <td
                        style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                        width={5}
                      />
                      <td
                        style={{
                          colorScheme: "light only",
                          color: "black",
                          fontFamily: "Arial",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        <a
                          href="tel:212-931-0000"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                            color: "black",
                          }}
                        >
                          {" "}
                          <font
                            data-acs="phone"
                            style={{
                              lineHeight: "1.2",
                              color: "black",
                              WebkitTextFillColor: colors,
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            {" "}
                            <PhoneComp />
                          </font>{" "}
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
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
                          colorScheme: "light only",
                          fontFamily: "Arial",
                          fontWeight: "bold",
                          fontSize: "12px",
                          color: "#FFFFFF",
                          WebkitTextFillColor: "#FFFFFF",
                        }}
                      >
                        {" "}
                        <a
                          href=""
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                            color: "#FFFFFF",
                            WebkitTextFillColor: "#FFFFFF",
                          }}
                        >
                          {" "}
                          <font
                            style={{
                              lineHeight: "1.2",
                              color: "#FFFFFF",
                              WebkitTextFillColor: "#2b5ab5",
                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            {" "}
                            W{" "}
                          </font>{" "}
                        </a>{" "}
                      </td>
                      <td
                        style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                        width={5}
                      />
                      <td
                        style={{
                          colorScheme: "light only",
                          color: "black",

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
                            color: "black",
                            WebkitTextFillColor: "black",
                          }}
                        >
                          {" "}
                          <font
                            data-acs="website"
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "black",
                              WebkitTextFillColor: colors,
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            {" "}
                            <WebsiteComp Website={Website} />
                          </font>{" "}
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
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
                          color: "#FFFFFF",
                          WebkitTextFillColor: "#FFFFFF",
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
                            color: "#FFFFFF",
                            WebkitTextFillColor: "#FFFFFF",
                          }}
                        >
                          {" "}
                          <font
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "#FFFFFF",
                              WebkitTextFillColor: "#2b5ab5",
                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            {" "}
                            E{" "}
                          </font>{" "}
                        </a>{" "}
                      </td>
                      <td
                        style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                        width={5}
                      />
                      <td
                        style={{
                          colorScheme: "light only",
                          color: "black",

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
                            color: "black",
                          }}
                        >
                          {" "}
                          <font
                            data-acs="email"
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "black",
                              WebkitTextFillColor: colors,
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            {" "}
                            <EmailComp />
                          </font>{" "}
                        </a>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style={{ lineHeight: "0%", paddingBottom: "6px" }}>
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
                          color: "#FFFFFF",
                          WebkitTextFillColor: "#FFFFFF",
                        }}
                      >
                        {" "}
                        <a
                          href="#"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                            color: "#FFFFFF",
                            WebkitTextFillColor: "#FFFFFF",
                          }}
                        >
                          {" "}
                          <font
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "#FFFFFF",
                              WebkitTextFillColor: "#2b5ab5",
                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            {" "}
                            A{" "}
                          </font>{" "}
                        </a>{" "}
                      </td>
                      <td
                        style={{ width: "5px", fontSize: "1pt", lineHeight: 0 }}
                        width={5}
                      />
                      <td
                        style={{
                          colorScheme: "light only",
                          color: "black",

                          fontFamily: "Arial",
                          fontSize: "12px",
                        }}
                      >
                        {" "}
                        <a
                          href="#"
                          style={{
                            colorScheme: "light only",
                            textDecoration: "none",
                            fontSize: "12px",
                            fontFamily: "Arial",
                            color: "black",
                          }}
                        >
                          {" "}
                          <font
                            data-acs="address"
                            style={{
                              colorScheme: "light only",
                              lineHeight: "1.2",
                              color: "black",
                              WebkitTextFillColor: colors,
                              fontFamily: "Arial",
                              whiteSpace: "nowrap",
                              fontSize: "12px",
                            }}
                          >
                            {" "}
                            <AddressComp Address={Address} />
                          </font>{" "}
                        </a>{" "}
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

export default Template430;
