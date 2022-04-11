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

const Name = "Jason Erickson";
const Company = "  DENNIS BIGGS  UX / UI DESIGNER";
const Website = "www.je-marketing.com";
const Address = "1 Example St, Town WA 6301";
const img =
  "https://y5t6h9a6.stackpathcdn.com/1dad30f1-a735-43b2-b296-b9967b8fa299/img.png";

const Template201 = () => {
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
          <tbody>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
                  fontSize: "27.0px",
                  fontStyle: "normal",
                  lineHeight: "29px",
                  fontWeight: 700,
                  padding: 0,
                }}
              >
                <zs-remove>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "27.0px",
                      fontStyle: "normal",
                      lineHeight: "29px",
                      fontWeight: 700,
                      color: "#007fe6",
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
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
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
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "17.0px",
                      fontStyle: "normal",
                      lineHeight: "19px",
                      fontWeight: 700,
                      color: "#333333",
                      display: "inline",
                    }}
                  ></span>
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
                  backgroundColor: "#007fe6",
                  height: "3px",
                  padding: 0,
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingBottom: "13px",
                  height: "13px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
                  fontSize: "14.0px",
                  fontStyle: "normal",
                  lineHeight: "16px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <zs-remove>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#007fe6",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    P.
                  </span>
                  <span
                    className="ng-binding ng-scope"
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#2e2e2e",
                      display: "inline",
                    }}
                  >
                    <PhoneComp />
                  </span>
                </zs-remove>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingBottom: "2px",
                  height: "2px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
                  fontSize: "14.0px",
                  fontStyle: "normal",
                  lineHeight: "16px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <zs-remove>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#007fe6",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    M.
                  </span>
                  <span
                    className="ng-binding ng-scope"
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#2e2e2e",
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
                  paddingBottom: "2px",
                  height: "2px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
                  fontSize: "14.0px",
                  fontStyle: "normal",
                  lineHeight: "16px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <zs-remove>
                  <span
                    className="ng-binding ng-scope"
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#007fe6",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    E.
                  </span>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#2e2e2e",
                      display: "inline",
                    }}
                  >
                    <EmailComp />
                  </span>
                </zs-remove>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  paddingBottom: "2px",
                  height: "2px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  borderCollapse: "collapse",
                  fontFamily: 'Palatino, "Palatino Linotype", serif',
                  fontSize: "14.0px",
                  fontStyle: "normal",
                  lineHeight: "16px",
                  fontWeight: 400,
                  padding: 0,
                }}
              >
                <zs-remove>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#007fe6",
                      display: "inline",
                      fontSize:
                        fontsize === 1 ? "15px" : `${fontsize / 5 + 15}px`,
                    }}
                  >
                    A.
                  </span>
                  <span
                    style={{
                      fontFamily: 'Palatino, "Palatino Linotype", serif',
                      fontSize: "14.0px",
                      fontStyle: "normal",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#2e2e2e",
                      display: "inline",
                    }}
                  >
                    <AddressComp Address={Address} />
                  </span>
                </zs-remove>
              </td>
            </tr>
            <tr
              style={{
                borderCollapse: "collapse",
                paddingBottom: "13px",
                height: "13px",
              }}
            ></tr>
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

export default Template201;
