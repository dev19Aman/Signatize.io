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

const Name = " KAYLA WILLIAMS";
const Company = "    Graphic Designer";
const Website = "www.gimm.io";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/25cfa68a-0142-4d9d-a59b-cf17157f5e07/img.png";

const Template170 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);

  return (
    <>
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ paddingRight: "10px" }}>
                          <div style={{ paddingBottom: "10px" }}>
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
                              Kind Regards,
                            </span>
                          </div>
                          <div>
                            <img src="https://y5t6h9a6.stackpathcdn.com/25cfa68a-0142-4d9d-a59b-cf17157f5e07/img.png" />
                          </div>
                          <div>
                            {/* <span>
                        <a
                          href=""
                          style="
                            font-family: Arial, Helvetica, sans-serif;
                            font-size: 9px;
                            font-style: normal;
                            line-height: 10px;
                            font-weight: normal;
                            color: #777777;
                          "
                          >Get your own signature
                        </a>
                      </span> */}
                          </div>
                        </td>
                        <td style={{ paddingLeft: "8px" }}>
                          <div
                            style={{
                              //  position: "absolute",
                              top: "10px",
                            }}
                          >
                            <div>
                              <zs-remove>
                                <span
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "22.0px",
                                    fontStyle: "normal",
                                    lineHeight: "24px",
                                    fontWeight: 700,
                                    color: "#454545",
                                    display: "inline",
                                  }}
                                >
                                  KAYLA WILLIAMS
                                </span>
                              </zs-remove>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                              <zs-remove>
                                <span
                                  className="ng-binding ng-scope"
                                  style={{
                                    fontFamily: "Tahoma, Geneva, sans-serif",
                                    fontSize: "15.0px",
                                    fontStyle: "normal",
                                    lineHeight: "17px",
                                    fontWeight: 400,
                                    color: "#f25e30",
                                    display: "inline",
                                  }}
                                >
                                  Graphic Designer
                                </span>
                              </zs-remove>
                            </div>
                            <div>
                              <zs-remove>
                                <img src="https://y5t6h9a6.stackpathcdn.com/39d9a226-d265-4040-bc94-b032d99dd719/img.png" />
                              </zs-remove>
                            </div>
                            <div>
                              <div
                                style={{ padding: "5px 0", display: "flex" }}
                              >
                                <zs-remove>
                                  <img src="https://y5t6h9a6.stackpathcdn.com/7c4a23f0-de40-410c-b7df-89477add52e0/img.png" />
                                </zs-remove>
                                &nbsp;
                                <zs-remove>
                                  <span
                                    className="ng-binding ng-scope"
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    972-379-5154
                                  </span>
                                </zs-remove>
                              </div>
                              <div
                                style={{ padding: "5px 0", display: "flex" }}
                              >
                                <zs-remove className="mt-2">
                                  <img src="https://y5t6h9a6.stackpathcdn.com/39f70a22-cae2-45dd-b2a1-ae008217d0c3/img.png" />
                                </zs-remove>
                                &nbsp;
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    469-960-1035
                                  </span>
                                </zs-remove>
                              </div>
                              <div style={{ display: "flex" }}>
                                <zs-remove>
                                  <img src="https://y5t6h9a6.stackpathcdn.com/83668641-bc16-4a9d-8b4b-c63b615c3e9c/img.png" />
                                </zs-remove>
                                &nbsp;
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    kayla.williams@idesign.com
                                  </span>
                                </zs-remove>
                              </div>
                              <div style={{ display: "flex" }}>
                                <zs-remove>
                                  <img src="https://y5t6h9a6.stackpathcdn.com/fc7101bc-74d7-4602-aea7-2b1f3f8517fd/img.png" />
                                </zs-remove>
                                &nbsp;
                                <zs-remove>
                                  <span
                                    style={{
                                      fontFamily: "Tahoma, Geneva, sans-serif",
                                      fontSize: "14.0px",
                                      fontStyle: "normal",
                                      lineHeight: "16px",
                                      fontWeight: 400,
                                      color: "#454545",
                                      display: "inline",
                                    }}
                                  >
                                    908 Whisper Circle, Plano, TX 75074
                                  </span>
                                </zs-remove>
                              </div>
                            </div>
                            <div style={{ paddingTop: "15px" }}>
                              <span>
                                <a href="#">
                                  <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/native/03facebook.gif" />
                                </a>
                                &nbsp;
                                <a href="#">
                                  <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/native/03twitter.gif" />
                                </a>
                                &nbsp;
                                <a href="#">
                                  <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/native/03instagram.gif" />
                                </a>
                                &nbsp;
                                <a href="#">
                                  <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/native/03website.gif" />
                                </a>
                              </span>
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
          <table style={{ width: "40%", marginTop: "30px" }}>
            <tbody>
              <tr>
                <td>
                  <div>
                    <img src="images/men.jpg" />
                  </div>
                </td>
                <td style={{ position: "relative", left: "-10px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      margin: 0,
                      width: "275px",
                      float: "left",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </td>
                <td style={{ position: "relative", left: "-54px" }}>
                  <div style={{ paddingLeft: "-100px" }}>
                    <div>
                      <a
                        href="#"
                        style={{
                          background: "#4267b2",
                          color: "#fff",
                          float: "left",
                          textDecoration: "none",
                          padding: "8px 14px 9px 19px",
                          width: "74px",
                        }}
                      >
                        Facebook
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        style={{
                          background:
                            "linear-gradient(  to bottom,#9900ff 0%,#f16632 100%)",
                          float: "left",
                          color: "#fff",
                          textDecoration: "none",
                          padding: "8px 14px 9px 19px",
                          width: "74px",
                        }}
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table style={{ width: "40%" }}>
            <tbody>
              <tr>
                <td>
                  <span
                    style={{
                      fontSize: "16px",
                      margin: "5px 0 0 0",
                      float: "left",
                    }}
                  >
                    William Shakespeare quote......
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        float: "left",
                        margin: "10px 0 0 0",
                      }}
                    >
                      IMPORTANT: Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
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
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
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
                  </div>
                  <div>
                    <img src="images/banner.png" alt="" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Template170;
