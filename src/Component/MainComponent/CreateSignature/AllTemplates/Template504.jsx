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
  SignatureComp,
  SignoffComp,
} from ".";

const Name = "";
const Company = "";
const Website = "";
const Address = "";
const Phone = "";
const img = "";
const Template504 = () => {
  const { youtubeUrl, videoconf, quoteTitle, greenMessage } = useSelector(
    (state) => state.counter
  );
  const { colors, fontsize, fontFamily, lineHeight, borderRight, borderColor } =
    useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  return (
    <div>
    <table>
      <tbody>
        <tr>
          <td style={{
            //   paddingRight: '20px',
        }}>
              <div style={{marginLeft:"10px"}}>

          {images === null ? null : (
                    <span
                      style={{
                        fontFamily: "Dynalight, cursive",
                        fontSize: "15px",
                        fontStyle: "normal",
                        lineHeight: "17px",
                        fontWeight: 400,
                        color: "#000000",
                        display: "inline",
                      }}
                    >
                      <SignoffComp />
                    </span>
              )}
              </div>
                    <div>{images === null ? null : <ImgComp />}</div>

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
          </td>
          <td>
            <div style={{
                // paddingLeft: '15px',
                paddingRight:"20px",
        }}>
              <div>
                <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
                <CompanyComp Company={Company} />

                </span>
              </div>
              <div>
                <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '17px', fontStyle: 'normal', lineHeight: '19px', fontWeight: 700, color: '#64C8DC', display: 'inline'}}>
                <Namecom Name={Name} />

                </span>
              </div>
              <div>
              {address === "" ? null : (
                    <span
                      style={{
                        fontFamily: `${fontFamily}`,
                        fontSize:
                          fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                        color: colors===''? '#64C8DC':`${colors}`,
                      }}
                    >
                      {" "}
                      A
                    </span>
                  )}
                <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
                  
              <AddressComp />
                  </span>
              </div>
              <div>
                <span style={{color: '#64C8DC'}}>
                {phonenumber === "" ? null : " |"}
                </span>
                <span>
                {phonenumber === "" ? null : (
                      <span
                        style={{
                          fontFamily: `${fontFamily}`,
                          fontSize:
                            fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                            color: colors===''? '#64C8DC':`${colors}`,


                        }}
                      >
                        {" "}
                        P.
                      </span>
                    )}
                  <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
                <PhoneComp />

                  </span>
                  <span style={{color: '#64C8DC'}}>
                  {mobilenumber === "" ? null : " |"}
                  </span>

                  {mobilenumber === "" ? null : (
                      <span
                        style={{
                          fontFamily: `${fontFamily}`,
                          fontSize:
                            fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                            color: colors===''? '#64C8DC':`${colors}`,


                        }}
                      >
                        {" "}
                        M.
                      </span>
                    )}
                  <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
                  <MobileComp />
                  </span>
                </span>
                <span style={{color: '#64C8DC'}}>
                  {email === "" ? null : " |"}

                </span>
              </div>
              <div>
              {email === "" ? null : (
                    <span
                      style={{
                        fontFamily: `${fontFamily}`,
                        fontSize:
                          fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                          color: colors===''? '#64C8DC':`${colors}`,


                      }}
                    >
                    E.
                    </span>
                  )}
                <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
              <EmailComp />

                </span>
              </div>
              <div>
                <span style={{color: '#64C8DC'}}>
                  {website === "" ? null : " |"}

                </span>
                {website === "" ? null : (
                    <span
                      style={{
                        fontFamily: `${fontFamily}`,
                        fontSize:
                          fontsize === 1 ? "14px" : `${fontsize / 5 + 14}px`,
                          color: colors===''? '#64C8DC':`${colors}`,


                      }}
                    >
                      W.
                    </span>
                  )}
                <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline'}}>
                <WebsiteComp />
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td style={{paddingTop: '10px'}}>
            {/* <span style={{fontFamily: 'Calibri, Helvetica, sans-serif', fontSize: '15px', fontStyle: 'normal', lineHeight: '17px', fontWeight: 400, color: '#000000', display: 'inline', padding: '10px 0px'}}>Latest Work</span> */}
            <div style={{padding: '10px 0px'}}> 
            <span
                    style={{
                      display: "flex",
                      padding: "4px 0px",
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
    <table>
        <tbody>
          <tr>
            <td>
              <table style={{ float: "left" }}>
                <tbody>
                  <tr
                    style={{
                      display: "grid",
                      float: "left",
                    }}
                  >
                    <td
                      style={{ marginTop: youtubeUrl === "" ? null : "15px" }}
                    >
                      <VideoComp />
                    </td>
                    <td style={{ marginTop: "12px" }}>
                      <WedgitsSocialComp />
                    </td>
                    <td
                      style={{
                        display: quoteTitle === null ? "none" : "block",
                        marginTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "16px",
                        }}
                      >
                        <QuoteComp />
                      </div>
                    </td>
                    <td style={{ marginTop: "4px" }}>
                      <Disclamer />
                    </td>
                    <td
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {videoconf === "" ? null : (
                        <span
                          style={{
                            float: "left",
                            // margin: " 14px 0 0 0",
                            fontSize: "17px",
                            background: videoconf === "" ? null : "gray",
                            padding: "8px 18px ",
                            borderRadius: "4px",
                            textDecoration: "none",
                            marginTop: "10px",
                          }}
                        >
                          <VideoConfComp />
                        </span>
                      )}
                      {/* &nbsp; */}
                      <span
                        style={{
                          textDecoration: "none",
                          float: "left",
                          // margin: " 13px 0 0 0",
                          paddingLeft: videoconf === "" ? null : "7px",
                          marginTop: videoconf === "" ? null : "10px",

                          // background: videoconf === "" ? null : "gray",
                        }}
                      >
                        <CTAComp />
                      </span>
                    </td>
                    <td
                      style={{
                        float: "left",
                      }}
                    >
                      {greenMessage === "" ? null : (
                        <p
                          style={{
                            fontSize: "13px",
                            marginTop: "12px",
                          }}
                        >
                          <GreenMsgComp />
                        </p>
                      )}
                      <div style={{ marginTop: "12px" }}>
                        <BannerComp />
                      </div>
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

export default Template504;
