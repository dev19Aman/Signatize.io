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

const Name = "    Brick Tamland";
const Company = "  KVWN Channel 4";
const Website = "www.je-marketing.com";
const Address = "    15 River Dr, San Diego CA 22434";
const img =
  "https://y5t6h9a6.stackpathcdn.com/952f94f9-e665-4b9a-9713-b9233a46bc99/img.png";

const Template217 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  return (
    <>
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
          </tbody>
        </table>
        <table style={{ float: "left", marginLeft: "10px" }}>
          <tbody>
            <tr>
              <td style={{ padding: 0 }}>
                <tr></tr>
                <table
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
                          fontSize: "30.0px",
                          fontStyle: "normal",
                          lineHeight: "32px",
                          fontWeight: 400,
                          padding: 0,
                        }}
                      >
                        <zs-remove>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "30.0px",
                              fontStyle: "normal",
                              lineHeight: "32px",
                              fontWeight: 400,
                              color: "#282828",
                              display: "inline",
                            }}
                          >
                            <Namecom Name={Name} />
                          </span>
                        </zs-remove>
                      </td>
                    </tr>
                    <tr style={{}}>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          fontFamily: "Calibri, Helvetica, sans-serif",
                          fontSize: "21.0px",
                          fontStyle: "normal",
                          lineHeight: "23px",
                          fontWeight: 700,
                          padding: 0,
                        }}
                      >
                        <zs-remove>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "21.0px",
                              fontStyle: "normal",
                              lineHeight: "23px",
                              fontWeight: 700,
                              color: "#282828",
                              display: "inline",
                            }}
                          >
                            <CompanyComp Company={Company} />
                          </span>
                        </zs-remove>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          borderCollapse: "collapse",
                          paddingBottom: "8px",
                          height: "8px",
                        }}
                      ></td>
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
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "14.0px",
                              fontStyle: "normal",
                              lineHeight: "16px",
                              fontWeight: 400,
                              color: "#5e4036",
                              display: "inline",

                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            Mobile:
                          </span>

                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15.0px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#282828",
                              display: "inline",
                            }}
                          >
                            <MobileComp />
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
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15.0px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#5e4036",
                              display: "inline",

                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            Web:
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15.0px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#282828",
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
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15.0px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#5e4036",
                              display: "inline",

                              fontSize:
                                fontsize === 1
                                  ? "15px"
                                  : `${fontsize / 5 + 15}px`,
                            }}
                          >
                            Address:
                          </span>
                          <span
                            style={{
                              fontFamily: "Calibri, Helvetica, sans-serif",
                              fontSize: "15.0px",
                              fontStyle: "normal",
                              lineHeight: "17px",
                              fontWeight: 400,
                              color: "#282828",
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
                  </tbody>
                </table>
              </td>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingRight: "8px",
                  width: "8px",
                }}
              ></td>
              <td
                style={{
                  borderCollapse: "collapse",
                  backgroundColor: "#000000",
                  width: "3px",
                  verticalAlign: "super",
                  padding: 0,
                }}
              ></td>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingRight: "8px",
                  width: "8px",
                }}
              ></td>
              <td style={{ padding: 0 }}>
                <table
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
                    <SocialComp />
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
    </>
  );
};

export default Template217;
