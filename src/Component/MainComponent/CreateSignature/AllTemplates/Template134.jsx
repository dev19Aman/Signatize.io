// import React, { useEffect, useState } from "react";
// import "./DesignFonts.css";
// import { useSelector } from "react-redux";
// import {
//   Namecom,
//   CompanyComp,
//   PhoneComp,
//   MobileComp,
//   AddressComp,
//   WebsiteComp,
//   EmailComp,
//   SocialComp,
//   VideoComp,
//   ConfrenceBtn,
//   WedgitsSocialComp,
//   QuoteComp,
//   Disclamer,
//   VideoConfComp,
//   CTAComp,
//   GreenMsgComp,
//   BannerComp,
//   ImgComp,
//   SignatureComp,
//   SignoffComp,
// } from ".";

// const Name = "";
// const Company = "";
// const Website = "";
// const Address = "";
// const Phone = "";
// const img = "";
// const Template134 = () => {
//   const { youtubeUrl } = useSelector((state) => state.counter);
//   const { fontsize } = useSelector((state) => state.design);
//   const { phonenumber, mobilenumber, website, address, images, email } =
//     useSelector((state) => state.general);
//   const { facebooklinks } = useSelector((state) => state.social);
//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td style={{ paddingRight: "10px" }}>
//                       <div style={{ paddingBottom: "15px" }}>
//                         <span
//                           style={{
//                             fontFamily: "Calibri, Helvetica, sans-serif",
//                             fontSize: "15px",
//                             fontStyle: "normal",
//                             lineHeight: "17px",
//                             fontWeight: 400,
//                             color: "#000000",
//                             padding: "10px 0px",
//                             display: "inline",
//                           }}
//                         >
//                           Kind Regards,
//                         </span>
//                       </div>
//                       <div style={{ paddingBottom: "15px" }}>
//                         <img
//                           src="https://d1n2mpfyq0bf3x.cloudfront.net/06171157455d7f23f4dbacb348854341/default-sig-photo.jpg#logo"
//                           height={65}
//                           width={65}
//                           style={{
//                             width: "65px",
//                             verticalAlign: "initial",
//                             borderRadius: "50%",
//                             mozBorderRadius: "50%",
//                             khtmlBorderRadius: "50%",
//                             oBorderRadius: "50%",
//                             webkitBorderRadius: "50%",
//                             msBorderRadius: "50%",
//                             display: "block",
//                             height: "65px",
//                           }}
//                         />
//                       </div>
//                       {/* <div>
//                                 <span>
//                                     <a href="" style="font-family: Arial, Helvetica, sans-serif;
//                                         font-size: 9px;
//                                         font-style: normal;
//                                         line-height: 10px;
//                                         font-weight: normal;
//                                         color: #777777;
//                                         ">Get your own signature
//                                     </a>
//                                 </span>
//                             </div> */}
//                     </td>
//                     <td style={{ paddingLeft: "10px" }}>
//                       <table style={{ float: "left", marginLeft: "10px" }}>
//                         <tbody>
//                           <tr>
//                             <td style={{ paddingBottom: "12px" }}>
//                               {" "}
//                               <span
//                                 className="ws-tpl-title"
//                                 style={{
//                                   fontSize: "13.200000000000001px",
//                                   letterSpacing: "0px",
//                                   fontFamily: "Arial",
//                                   textTransform: "initial",
//                                   fontWeight: "bold",
//                                   color: "#666",
//                                 }}
//                                 data-acs="title"
//                               >
//                                 {" "}
//                                 Online marketer,{" "}
//                               </span>{" "}
//                               <span
//                                 className="ws-tpl-company"
//                                 style={{
//                                   fontSize: "13.200000000000001px",
//                                   letterSpacing: "0px",
//                                   fontFamily: "Arial",
//                                   textTransform: "initial",
//                                   fontWeight: "bold",
//                                   color: "#666",
//                                 }}
//                                 data-acs="company"
//                               >
//                                 {" "}
//                                 JE marketing{" "}
//                               </span>{" "}
//                               <br />
//                               <span
//                                 className="ws-tpl-name"
//                                 style={{
//                                   fontFamily: "Arial",
//                                   fontSize: "15.600000000000001px",
//                                   color: "#313131",
//                                   textTransform: "initial",
//                                   fontWeight: "bold",
//                                 }}
//                                 data-acs="name"
//                               >
//                                 {" "}
//                                 Jason Erickson{" "}
//                               </span>{" "}
//                             </td>
//                           </tr>
//                         </tbody>
//                         <tbody style={{ margin: "4px 0 0 0", float: "left" }}>
//                           <tr>
//                             <td
//                               style={{ lineHeight: "0%", paddingBottom: "6px" }}
//                             >
//                               <table
//                                 className="ws-tpl-phone"
//                                 cellPadding={0}
//                                 cellSpacing={0}
//                                 style={{
//                                   lineHeight: "14px",
//                                   fontSize: "12px",
//                                   fontFamily: "Arial",
//                                 }}
//                               >
//                                 <tbody>
//                                   <tr>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontWeight: "bold",
//                                         fontSize: "12px",
//                                         color: "#45668E",
//                                       }}
//                                     >
//                                       {" "}
//                                       <img
//                                         src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
//                                         style={{
//                                           verticalAlign: "-2px",
//                                           lineHeight: "1.2",
//                                         }}
//                                       />{" "}
//                                     </td>
//                                     <td
//                                       style={{
//                                         width: "5px",
//                                         fontSize: "1pt",
//                                         lineHeight: 0,
//                                       }}
//                                       width={5}
//                                     >
//                                       &nbsp;
//                                     </td>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontSize: "12px",
//                                       }}
//                                     >
//                                       {" "}
//                                       <a
//                                         href="tel:212-931-0000"
//                                         target="_blank"
//                                         style={{
//                                           colorScheme: "light only",
//                                           textDecoration: "none",
//                                           fontSize: "12px",
//                                           fontFamily: "Arial",
//                                         }}
//                                       >
//                                         {" "}
//                                         <span
//                                           data-acs="phone"
//                                           style={{
//                                             lineHeight: "1.2",
//                                             colorScheme: "light only",
//                                             color: "#212121",
//                                             fontFamily: "Arial",
//                                             whiteSpace: "nowrap",
//                                             fontSize: "12px",
//                                           }}
//                                         >
//                                           {" "}
//                                           212-931-0000{" "}
//                                         </span>{" "}
//                                       </a>{" "}
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td
//                               style={{ lineHeight: "0%", paddingBottom: "6px" }}
//                             >
//                               <table
//                                 className="ws-tpl-website"
//                                 cellPadding={0}
//                                 cellSpacing={0}
//                                 style={{
//                                   lineHeight: "14px",
//                                   fontSize: "12px",
//                                   fontFamily: "Arial",
//                                 }}
//                               >
//                                 <tbody>
//                                   <tr>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontWeight: "bold",
//                                         fontSize: "12px",
//                                         color: "#45668E",
//                                       }}
//                                     >
//                                       {" "}
//                                       <img
//                                         src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
//                                         style={{
//                                           verticalAlign: "-2px",
//                                           lineHeight: "1.2",
//                                         }}
//                                       />{" "}
//                                     </td>
//                                     <td
//                                       style={{
//                                         width: "5px",
//                                         fontSize: "1pt",
//                                         lineHeight: 0,
//                                       }}
//                                       width={5}
//                                     >
//                                       &nbsp;
//                                     </td>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontSize: "12px",
//                                       }}
//                                     >
//                                       {" "}
//                                       <a
//                                         href="http://www.je-marketing.com"
//                                         target="_blank"
//                                         style={{
//                                           colorScheme: "light only",
//                                           textDecoration: "none",
//                                           fontSize: "12px",
//                                           fontFamily: "Arial",
//                                         }}
//                                       >
//                                         {" "}
//                                         <span
//                                           data-acs="website"
//                                           style={{
//                                             lineHeight: "1.2",
//                                             colorScheme: "light only",
//                                             color: "#212121",
//                                             fontFamily: "Arial",
//                                             whiteSpace: "nowrap",
//                                             fontSize: "12px",
//                                           }}
//                                         >
//                                           {" "}
//                                           www.je-marketing.com{" "}
//                                         </span>{" "}
//                                       </a>{" "}
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td
//                               style={{ lineHeight: "0%", paddingBottom: "6px" }}
//                             >
//                               <table
//                                 className="ws-tpl-email"
//                                 cellPadding={0}
//                                 cellSpacing={0}
//                                 style={{
//                                   lineHeight: "14px",
//                                   fontSize: "12px",
//                                   fontFamily: "Arial",
//                                 }}
//                               >
//                                 <tbody>
//                                   <tr>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontWeight: "bold",
//                                         fontSize: "12px",
//                                         color: "#45668E",
//                                       }}
//                                     >
//                                       {" "}
//                                       <img
//                                         src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
//                                         style={{
//                                           verticalAlign: "-2px",
//                                           lineHeight: "1.2",
//                                         }}
//                                       />{" "}
//                                     </td>
//                                     <td
//                                       style={{
//                                         width: "5px",
//                                         fontSize: "1pt",
//                                         lineHeight: 0,
//                                       }}
//                                       width={5}
//                                     >
//                                       &nbsp;
//                                     </td>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontSize: "12px",
//                                       }}
//                                     >
//                                       {" "}
//                                       <a
//                                         href="mailto:jason@je-marketing.com "
//                                         target="_blank"
//                                         style={{
//                                           colorScheme: "light only",
//                                           textDecoration: "none",
//                                           fontSize: "12px",
//                                           fontFamily: "Arial",
//                                         }}
//                                       >
//                                         {" "}
//                                         <span
//                                           data-acs="email"
//                                           style={{
//                                             lineHeight: "1.2",
//                                             colorScheme: "light only",
//                                             color: "#212121",
//                                             fontFamily: "Arial",
//                                             whiteSpace: "nowrap",
//                                             fontSize: "12px",
//                                           }}
//                                         >
//                                           {" "}
//                                           jason@je-marketing.com{" "}
//                                         </span>{" "}
//                                       </a>{" "}
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td
//                               style={{ lineHeight: "0%", paddingBottom: "6px" }}
//                             >
//                               <table
//                                 className="ws-tpl-address"
//                                 cellPadding={0}
//                                 cellSpacing={0}
//                                 style={{
//                                   lineHeight: "14px",
//                                   fontSize: "12px",
//                                   fontFamily: "Arial",
//                                 }}
//                               >
//                                 <tbody>
//                                   <tr>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontWeight: "bold",
//                                         fontSize: "12px",
//                                         color: "#45668E",
//                                       }}
//                                     >
//                                       {" "}
//                                       <img
//                                         src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
//                                         style={{
//                                           verticalAlign: "-2px",
//                                           lineHeight: "1.2",
//                                         }}
//                                       />{" "}
//                                     </td>
//                                     <td
//                                       style={{
//                                         width: "5px",
//                                         fontSize: "1pt",
//                                         lineHeight: 0,
//                                       }}
//                                       width={5}
//                                     >
//                                       &nbsp;
//                                     </td>
//                                     <td
//                                       style={{
//                                         colorScheme: "light only",
//                                         fontFamily: "Arial",
//                                         fontSize: "12px",
//                                       }}
//                                     >
//                                       {" "}
//                                       <a
//                                         href="https://maps.google.com/?q=1937 Fieldcrest Road, NY 10011"
//                                         target="_blank"
//                                         style={{
//                                           colorScheme: "light only",
//                                           textDecoration: "none",
//                                           fontSize: "12px",
//                                           fontFamily: "Arial",
//                                         }}
//                                       >
//                                         {" "}
//                                         <span
//                                           data-acs="address"
//                                           style={{
//                                             lineHeight: "1.2",
//                                             colorScheme: "light only",
//                                             color: "#212121",
//                                             fontFamily: "Arial",
//                                             whiteSpace: "nowrap",
//                                             fontSize: "12px",
//                                           }}
//                                         >
//                                           {" "}
//                                           1937 Fieldcrest Road, NY 10011{" "}
//                                         </span>{" "}
//                                       </a>{" "}
//                                     </td>
//                                   </tr>
//                                 </tbody>
//                               </table>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <table style={{ paddingTop: "40px", width: "520px" }}>
//         <tbody>
//           <tr>
//             <td
//               style={{
//                 backgroundColor: "#45668E",
//                 padding: "12px 6px",
//                 lineHeight: "0%",
//               }}
//             >
//               <table
//                 cellPadding={0}
//                 cellSpacing={0}
//                 style={{ lineHeight: "1.2", float: "right" }}
//                 align="right"
//               >
//                 <tbody>
//                   <tr>
//                     <td>
//                       <table border={0} cellPadding={0} cellSpacing={0}>
//                         <tbody>
//                           <tr>
//                             <td
//                               align="left"
//                               style={{
//                                 paddingRight: "6px",
//                                 textAlign: "center",
//                                 paddingTop: 0,
//                               }}
//                             >
//                               {" "}
//                               <a
//                                 href="http://www.facebook.com/username"
//                                 target="_blank"
//                                 style={{
//                                   fontSize: "11px",
//                                   color: "#444",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 {" "}
//                                 <img
//                                   width={24}
//                                   height={24}
//                                   src="https://cdn.gifo.wisestamp.com/social/facebook/FFFFFF/48/circle/border.png"
//                                   style={{ float: "left", border: "none" }}
//                                   border={0}
//                                 />{" "}
//                               </a>{" "}
//                             </td>
//                             <td
//                               align="left"
//                               style={{
//                                 paddingRight: "6px",
//                                 textAlign: "center",
//                                 paddingTop: 0,
//                               }}
//                             >
//                               {" "}
//                               <a
//                                 href="http://us.linkedin.com/username"
//                                 target="_blank"
//                                 style={{
//                                   fontSize: "11px",
//                                   color: "#444",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 {" "}
//                                 <img
//                                   width={24}
//                                   height={24}
//                                   src="https://cdn.gifo.wisestamp.com/social/linkedin/FFFFFF/48/circle/border.png"
//                                   style={{ float: "left", border: "none" }}
//                                   border={0}
//                                 />{" "}
//                               </a>{" "}
//                             </td>
//                             <td
//                               align="left"
//                               style={{
//                                 paddingRight: "6px",
//                                 textAlign: "center",
//                                 paddingTop: 0,
//                               }}
//                             >
//                               {" "}
//                               <a
//                                 href="http://twitter.com/username"
//                                 target="_blank"
//                                 style={{
//                                   fontSize: "11px",
//                                   color: "#444",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 {" "}
//                                 <img
//                                   width={24}
//                                   height={24}
//                                   src="https://cdn.gifo.wisestamp.com/social/twitter/FFFFFF/48/circle/border.png"
//                                   style={{ float: "left", border: "none" }}
//                                   border={0}
//                                 />{" "}
//                               </a>{" "}
//                             </td>
//                             <td
//                               align="left"
//                               style={{
//                                 paddingRight: "6px",
//                                 textAlign: "center",
//                                 paddingTop: 0,
//                               }}
//                             >
//                               {" "}
//                               <a
//                                 href="http://instagram.com/username"
//                                 target="_blank"
//                                 style={{
//                                   fontSize: "11px",
//                                   color: "#444",
//                                   textDecoration: "none",
//                                 }}
//                               >
//                                 {" "}
//                                 <img
//                                   width={24}
//                                   height={24}
//                                   src="https://cdn.gifo.wisestamp.com/social/instagram/FFFFFF/48/circle/border.png"
//                                   style={{ float: "left", border: "none" }}
//                                   border={0}
//                                 />{" "}
//                               </a>{" "}
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                       <div style={{ height: "1px!important" }} />
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <table style={{ width: "40%", paddingTop: "50px" }}>
//         <tbody>
//           <tr>
//             <td>
//               <div>
//                 <img src="images/men.jpg" />
//               </div>
//             </td>
//             <td style={{ position: "relative", left: "-10px" }}>
//               <p
//                 style={{
//                   fontSize: "12px",
//                   fontWeight: 600,
//                   margin: 0,
//                   width: "275px",
//                   float: "left",
//                 }}
//               >
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book.
//               </p>
//             </td>
//             <td style={{ position: "relative", left: "-54px" }}>
//               <div style={{ paddingLeft: "-100px" }}>
//                 <div>
//                   <a
//                     href="#"
//                     style={{
//                       background: "#4267b2",
//                       color: "#fff",
//                       float: "left",
//                       textDecoration: "none",
//                       padding: "8px 14px 9px 19px",
//                       width: "74px",
//                     }}
//                   >
//                     Facebook
//                   </a>
//                 </div>
//                 <div>
//                   <a
//                     href="#"
//                     style={{
//                       background:
//                         "linear-gradient(to bottom,#9900ff 0%,#f16632 100%)",
//                       float: "left",
//                       color: "#fff",
//                       textDecoration: "none",
//                       padding: "8px 14px 9px 19px",
//                       width: "74px",
//                     }}
//                   >
//                     Instagram
//                   </a>
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <table style={{ width: "40%" }}>
//         <tbody>
//           <tr>
//             <td>
//               <span
//                 style={{ fontSize: "16px", margin: "5px 0 0 0", float: "left" }}
//               >
//                 William Shakespeare quote......
//               </span>
//               <div>
//                 <p
//                   style={{
//                     fontSize: "15px",
//                     float: "left",
//                     margin: "10px 0 0 0",
//                   }}
//                 >
//                   IMPORTANT: Lorem Ipsum is simply dummy text of the printing
//                   and typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s
//                 </p>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div>
//                 <a
//                   href="#"
//                   style={{
//                     float: "left",
//                     color: "#000",
//                     margin: "13px 0 0 0",
//                     fontSize: "17px",
//                     background: "gray",
//                     padding: "8px 18px 8px 18px",
//                     borderRadius: "4px",
//                     textDecoration: "none",
//                   }}
//                 >
//                   <i
//                     className="fa fa-video-camera"
//                     aria-hidden="true"
//                     style={{
//                       lineHeight: 1,
//                       fontSize: "13px",
//                       margin: "0 6px 0 0",
//                     }}
//                   ></i>
//                   meet me!
//                 </a>
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div>
//                 <p style={{ color: "#2b9a2b", fontSize: "18px" }}>
//                   <img
//                     src="images/mail.png"
//                     alt=""
//                     style={{
//                       width: "20px",
//                       lineHeight: 1,
//                       margin: "1px 11px 0 0",
//                       float: "left",
//                     }}
//                   />
//                   Please consider the environment before priting this e-mail!
//                 </p>
//               </div>
//               <div>
//                 <img src="images/banner.png" alt="banner image" />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Template134;
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
const Template134 = () => {
  const { youtubeUrl, videoconf } = useSelector((state) => state.counter);
  const { fontsize } = useSelector((state) => state.design);
  const { phonenumber, mobilenumber, website, address, images, email } =
    useSelector((state) => state.general);
  const socialImages = useSelector((state) => state.social.socialImages);

  return (
    <table>
      <table>
        <tbody>
          <tr>
            <td style={{ padding: "0 5px 0 0", float: "left" }}>
              <div style={{}}>
                {images === null ? null : (
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "15px",
                      fontStyle: "normal",
                      lineHeight: "17px",
                      fontWeight: 400,
                      color: "#000000",
                      padding: "0px 0px",
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
            </td>
            <td style={{ paddingLeft: "10px" }}>
              <div style={{ top: "10px" }}>
                <div>
                  <span
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0px",
                      fontWeight: "bold",
                      color: "#444",
                    }}
                  >
                    <CompanyComp Company={Company} />
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "Calibri, Helvetica, sans-serif",
                      fontSize: "15px",
                      fontStyle: "normal",
                      lineHeight: "15px",
                      fontWeight: 700,
                      color: "#1b2353",
                    }}
                  >
                    <Namecom Name={Name} />
                  </span>
                </div>
                <div>
                  <div style={{ display: "flex" }}>
                    <a
                      href=""
                      style={{
                        colorScheme: "light only",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Arial",
                      }}
                    >
                      {phonenumber === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-phone-3/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      )}
                    </a>
                    &nbsp;
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
                    </a>
                  </div>
                  <div style={{ display: "flex" }}>
                    <a
                      href=""
                      style={{
                        colorScheme: "light only",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Arial",
                      }}
                    >
                      {website === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-website-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      )}
                    </a>
                    &nbsp;
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
                        <WebsiteComp />
                      </span>{" "}
                    </a>
                  </div>
                  <div style={{ display: "flex" }}>
                    <a
                      href=""
                      style={{
                        colorScheme: "light only",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Arial",
                      }}
                    >
                      {email === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-email-1/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      )}
                    </a>
                    &nbsp;
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
                        <EmailComp />
                      </span>{" "}
                    </a>
                  </div>
                  <div style={{ display: "flex" }}>
                    <a
                      href=""
                      style={{
                        colorScheme: "light only",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Arial",
                      }}
                    >
                      {address === "" ? null : (
                        <img
                          src="https://cdn.gifo.wisestamp.com/social/rich-field-address-2/45668E/13/trans.png"
                          style={{ verticalAlign: "-2px", lineHeight: "1.2" }}
                        />
                      )}
                    </a>
                    &nbsp;
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
                        <AddressComp />
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table style={{ paddingTop: "30px", width: "520px" }}>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: images === null ? null : "#1b2353",
                padding: "12px 6px",
                lineHeight: "0%",
              }}
            >
              <table
                cellPadding={0}
                cellSpacing={0}
                style={{ lineHeight: "1.2", float: "right" }}
                align="right"
              >
                <tbody>
                  <tr>
                    <td>
                      <table border={0} cellPadding={0} cellSpacing={0}>
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
                      <div style={{ height: "1px!important" }} />
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
    </table>
  );
};

export default Template134;
