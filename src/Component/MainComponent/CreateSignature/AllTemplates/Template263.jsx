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

const Name = "SDaSIMON WALKER";
const Company = " CEO";
const Website = "www.je-marketing.com";
const Address = "Level 12, 69 Example Street, WA 6029";
const img =
  "https://y5t6h9a6.stackpathcdn.com/ad616eeb-5273-46d0-acee-b48abbdaae1b/img.png";

const Template263 = () => {
  const { youtubeUrl } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
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
                <span
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    fontSize: "27.0px",
                    fontStyle: "normal",
                    float: "left",
                    width: "100%",
                    lineHeight: "29px",
                    fontWeight: 400,
                    color: "#535353",
                    display: "inline",
                  }}
                >
                  <Namecom Name={Name} />
                </span>
                <span
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    float: "left",
                    width: "100%",
                    margin: "10px 0 20px 0",
                    fontSize: "20.0px",
                    fontStyle: "normal",
                    lineHeight: "22px",
                    fontWeight: 700,
                    color: "#3589eb",
                    display: "inline",
                  }}
                >
                  <CompanyComp Company={Company} />
                </span>
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
            <tr
              ng-repeat="table in $ctrl.tables"
              className="zs-1 zs-17"
              style={{}}
            >
              <td
                ng-attr-style="{{$ctrl.defaultTDpadding}}"
                style={{ padding: 0 }}
              >
                <table
                  ng-attr-style="{{$ctrl.tableStyle()}}"
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
                      {/* LOGO SECTION and vertical section borders */}
                      {/* ngRepeat: logoSection in table.logoSections */}
                      <td
                        ng-attr-style="{{$ctrl.defaultTDpadding}}"
                        style={{ padding: 0 }}
                      >
                        <table
                          ng-attr-style="{{$ctrl.tableStyle()}}"
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
                            {/* ngRepeat: row in table.rows */}
                            <tr
                              ng-repeat="row in table.rows"
                              className="ng-scope"
                            >
                              <td
                                ng-attr-style="{{$ctrl.defaultTDpadding}}"
                                style={{ padding: 0 }}
                              >
                                {/* EACH ROW */}
                                <table
                                  ng-attr-style="{{$ctrl.tableStyle()}}"
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
                                      {/* EACH SECTION and vertical section borders */}
                                      {/* ngRepeat: section in row.sections */}
                                      {/* ngIf: $ctrl.showSection(section) */}
                                      <td
                                        ng-repeat="section in row.sections"
                                        ng-attr-style="{{$ctrl.tdStyle(section)}}"
                                        ng-if="$ctrl.showSection(section)"
                                        ng-mouseover="$ctrl.highlightSectionSpacer(section)"
                                        ng-mouseleave="$ctrl.hideThing('highlighter')"
                                        ng-class="{'zs-preview-highlight':$ctrl.isThingShown('highlighter', 'section' + section.style.section_area)}"
                                        ng-click="$ctrl.goToVerticalSection(section)"
                                        className="ng-scope"
                                        role="button"
                                        tabIndex={0}
                                        style={{ padding: 0 }}
                                      >
                                        <table
                                          style={{
                                            fontFamily:
                                              "Arial,Helvetica,sans-serif",
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

export default Template263;
