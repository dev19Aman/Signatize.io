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
import { FaLeaf } from "react-icons/fa";

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";

const Template46 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize, colors } = useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  const { facebooklinks } = useSelector((state) => state.social);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center", lineHeight: "1.2" }}>
                      {" "}
                      <span
                        className="ws-tpl-name"
                        style={{
                          fontFamily: "Arial",
                          textTransform: "initial",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        <span
                          data-acs="name"
                          style={{
                            color: "#45668E",
                            fontSize: "18.0px",
                            colorScheme: "light",
                          }}
                        >
                          {" "}
                          <Namecom Name={Name} />
                        </span>{" "}
                      </span>
                      <br />{" "}
                      <span
                        data-acs="title"
                        className="ws-tpl-title"
                        style={{
                          fontSize: "12px",
                          letterSpacing: "0px",
                          fontFamily: "Arial",
                          textTransform: "initial",
                          fontWeight: "bold",
                          color: "#333",
                          colorScheme: "light",
                        }}
                      >
                        {" "}
                        <CompanyComp Company={Company} />
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style={{ width: "65px", padding: 0 }}>
                      {images === null ? null : <ImgComp />}
                    </td>
                  </tr>
                  <td align="center" style={{ width: "65px", padding: 0 }}>
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
                  </td>
                  <tr>
                    <td
                      style={{
                        verticalAlign: "top",
                        textAlign: "center",
                        lineHeight: "0%",
                        fontSize: "1pt",
                        padding: "20px",
                        backgroundColor: images === null ? null : "#45668E",
                        color: "#fff",
                      }}
                      valign="top"
                    >
                      <table
                        cellPadding={0}
                        cellSpacing={0}
                        style={{ color: "#fff" }}
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td style={{ lineHeight: 0 }}>
                              <table cellPadding={0} cellSpacing={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <table
                                        cellPadding={0}
                                        cellSpacing={0}
                                        align="center"
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
                                                align="center"
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
                                                        padding: "0 4px 0 0",
                                                        colorScheme:
                                                          "light only",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: "12px",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontSize:
                                                              fontsize === 1
                                                                ? "14px"
                                                                : `${
                                                                    fontsize /
                                                                      5 +
                                                                    14
                                                                  }px`,
                                                            color: `${colors}`,
                                                          }}
                                                        >
                                                          {" "}
                                                          {phonenumber === ""
                                                            ? null
                                                            : "  P"}
                                                        </font>{" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "5px",
                                                        fontSize: "1pt",
                                                        lineHeight: 0,
                                                      }}
                                                      width={5}
                                                    />
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                        fontFamily: "Arial",
                                                        fontSize: "12px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href="tel:212-931-0000"
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          data-acs="phone"
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontFamily: "Arial",
                                                            whiteSpace:
                                                              "nowrap",
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
                                                align="center"
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
                                                        colorScheme:
                                                          "light only",
                                                        padding: "0 6px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontFamily: "Arial",
                                                          fontWeight: "bold",
                                                          fontSize: "12px",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            "#FFFFFF",
                                                        }}
                                                      >
                                                        {" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: "12px",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            padding:
                                                              "0 4px 0 0",
                                                            fontSize:
                                                              fontsize === 1
                                                                ? "14px"
                                                                : `${
                                                                    fontsize /
                                                                      5 +
                                                                    14
                                                                  }px`,
                                                            color: `${colors}`,
                                                          }}
                                                        >
                                                          {" "}
                                                          {website === ""
                                                            ? null
                                                            : "  W "}
                                                        </font>{" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "5px",
                                                        fontSize: "1pt",
                                                        lineHeight: 0,
                                                      }}
                                                      width={5}
                                                    />
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                        fontFamily: "Arial",
                                                        fontSize: "12px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          data-acs="website"
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontFamily: "Arial",
                                                            whiteSpace:
                                                              "nowrap",
                                                            fontSize: "12px",
                                                          }}
                                                        >
                                                          {" "}
                                                          <WebsiteComp />
                                                        </font>{" "}
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
                                                align="center"
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
                                                        colorScheme:
                                                          "light only",
                                                        padding: "0 6px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontFamily: "Arial",
                                                          fontWeight: "bold",
                                                          fontSize: "12px",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            "#FFFFFF",
                                                        }}
                                                      >
                                                        {" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: "12px",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            padding:
                                                              "0 4px 0 0",
                                                            fontSize:
                                                              fontsize === 1
                                                                ? "14px"
                                                                : `${
                                                                    fontsize /
                                                                      5 +
                                                                    14
                                                                  }px`,
                                                            color: `${colors}`,
                                                          }}
                                                        >
                                                          {" "}
                                                          {email === ""
                                                            ? null
                                                            : "E "}
                                                        </font>{" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "5px",
                                                        fontSize: "1pt",
                                                        lineHeight: 0,
                                                      }}
                                                      width={5}
                                                    />
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                        fontFamily: "Arial",
                                                        fontSize: "12px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href="mailto:jason@je-marketing.com "
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          data-acs="email"
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontFamily: "Arial",
                                                            whiteSpace:
                                                              "nowrap",
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
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        cellPadding={0}
                                        cellSpacing={0}
                                        align="center"
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
                                                className="ws-tpl-address"
                                                cellPadding={0}
                                                cellSpacing={0}
                                                align="center"
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
                                                        colorScheme:
                                                          "light only",
                                                        fontFamily: "Arial",
                                                        fontWeight: "bold",
                                                        fontSize: "12px",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          "#FFFFFF",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href=""
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontSize:
                                                              fontsize === 1
                                                                ? "14px"
                                                                : `${
                                                                    fontsize /
                                                                      5 +
                                                                    14
                                                                  }px`,
                                                            color: `${colors}`,
                                                          }}
                                                        >
                                                          {" "}
                                                          {address === ""
                                                            ? null
                                                            : "A"}
                                                        </font>{" "}
                                                      </a>{" "}
                                                    </td>
                                                    <td
                                                      style={{
                                                        width: "5px",
                                                        fontSize: "1pt",
                                                        lineHeight: 0,
                                                      }}
                                                      width={5}
                                                    />
                                                    <td
                                                      style={{
                                                        colorScheme:
                                                          "light only",
                                                        color: "#FFFFFF",
                                                        WebkitTextFillColor:
                                                          colors,
                                                        fontFamily: "Arial",
                                                        fontSize: "12px",
                                                      }}
                                                    >
                                                      {" "}
                                                      <a
                                                        href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
                                                        target="_blank"
                                                        style={{
                                                          colorScheme:
                                                            "light only",
                                                          textDecoration:
                                                            "none",
                                                          fontSize: "12px",
                                                          fontFamily: "Arial",
                                                          color: "#FFFFFF",
                                                          WebkitTextFillColor:
                                                            colors,
                                                        }}
                                                      >
                                                        {" "}
                                                        <font
                                                          data-acs="address"
                                                          style={{
                                                            colorScheme:
                                                              "light only",
                                                            lineHeight: "1.2",
                                                            color: "#FFFFFF",
                                                            WebkitTextFillColor:
                                                              colors,
                                                            fontFamily: "Arial",
                                                            whiteSpace:
                                                              "nowrap",
                                                            fontSize: "12px",
                                                          }}
                                                        >
                                                          {" "}
                                                          <AddressComp />
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="center"
                              style={{
                                textAlign: "center",
                                paddingTop: "12px",
                                lineHeight: "0%",
                                fontSize: "1pt",
                              }}
                            >
                              <table
                                className="ws-tpl-social"
                                cellPadding={0}
                                cellSpacing={0}
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style={{ textAlign: "center" }}
                                    >
                                      <table
                                        border={0}
                                        cellPadding={0}
                                        cellSpacing={0}
                                      >
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

export default Template46;
