// import React from "react";
// import { useSelector } from "react-redux";
// import ImageComp from "../../ImageComp";
// import stackover from "../../images/stackover.png";
// import youtube from "../../images/youtubes.png";
// import insta from "../../images/insta.png";

// const SocialComp = () => {
//   const {
//     facebooklinks,
//     twitterlinks,
//     linkedInLinklinks,
//     instalinks,
//     Stackoverflowlinks,
//     Youtubelink,
//     custemlink,
//   } = useSelector((state) => state.social);

//   const { lineHeight } = useSelector((state) => state.design);
//   // const socialImages = useSelector((state) => state.counter.socialImages);
//   const socialImages = useSelector((state) => state.social.socialImages);

//   return (
//     <>
//       <tr style={{ float: "left" }}>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.facebook.com/${facebooklinks}`}>
//             {
//               facebooklinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05facebook.gif" />
//             }
//           </a>
//         </td>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.twitter.com/${twitterlinks}`}>
//             {
//               twitterlinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/twitter/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05twitter.gif" />
//             }
//           </a>
//         </td>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.linkedin.com/${linkedInLinklinks}`}>
//             {
//               linkedInLinklinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/linkedin/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
//             }
//           </a>
//         </td>
//         {/* <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.twitter.com/${Stackoverflowlinks}`}>
//             {
//               Stackoverflowlinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/stackoverflow/3b5998/40/0/transparent.png" />
//               ) : null
//               // <img src={stackover} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td>

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.linkedin.com/${Youtubelink}`}>
//             {
//               Youtubelink !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/youtube/3b5998/40/0/transparent.png" />
//               ) : null
//               // <img src={youtube} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td>

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.google.com/${instalinks}`}>
//             {
//               instalinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/instagram/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src={insta} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td> */}

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.google.com/${custemlink}`}>
//             {custemlink !== "" ? (
//               <img
//                 src={socialImages === "" ? null : socialImages}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ) : // <img src={insta} style={{ width: "25px", height: "25px" }} />
//             null}
//           </a>
//         </td>
//       </tr>
//     </>
//   );
// };

// export default SocialComp;

import React from "react";
import { useSelector } from "react-redux";
import ImageComp from "../../ImageComp";

const SocialComp = () => {
  const {
    facebooklinks,
    twitterlinks,
    linkedInLinklinks,
    instalinks,
    Stackoverflowlinks,
    Youtubelink,
    custemlink,
    pintrest,
    raddit,
  } = useSelector((state) => state.social);

  const { lineHeight } = useSelector((state) => state.design);
  // const socialImages = useSelector((state) => state.counter.socialImages);
  const socialImages = useSelector((state) => state.social.socialImages);

  return (
    <>
      {/* <span style={{}}> */}
      <a href={`http://www.facebook.com/${facebooklinks}`} target="_blank">
        {
          facebooklinks !== "" ? (
            // <ImageComp src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/30/0/transparent.png" />
            <ImageComp src="data:image/jpeg;base64,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" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05facebook.gif" />
        }
      </a>
      <a
        href={`http://www.twitter.com/${twitterlinks}`}
        target="_blank"
        style={{ marginLeft: "5px" }}
      >
        {
          twitterlinks !== "" ? (
            // <ImageComp src="https://cdn.gifo.wisestamp.com/social/twitter/3b5998/30/0/transparent.png" />
            <ImageComp src="data:image/jpeg;base64,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" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05twitter.gif" />
        }
      </a>

      <a
        href={`http://www.linkedin.com/${linkedInLinklinks}`}
        target="_blank"
        style={{ marginLeft: "5px" }}
      >
        {
          linkedInLinklinks !== "" ? (
            // <ImageComp src="https://cdn.gifo.wisestamp.com/social/linkedin/3b5998/30/0/transparent.png" />
            <ImageComp src="data:image/jpeg;base64,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" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
        }
      </a>
      <a
        href={`http://www.instagram.com/${instalinks}`}
        target="_blank"
        style={{ marginLeft: "5px" }}
      >
        {
          instalinks !== "" ? (
            // <ImageComp src="https://cdn.gifo.wisestamp.com/social/linkedin/3b5998/30/0/transparent.png" />
            <ImageComp src="data:image/jpeg;base64,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" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
        }
      </a>

      <a
        href={`http://www.pintrest.com/${pintrest}`}
        target="_blank"
        style={{ marginLeft: "5px" }}
      >
        {
          pintrest !== "" ? (
            // <ImageComp src="http://localhost:3000/static/media/pintrest.c0bf18f9.png" />
            <ImageComp src="https://app.signatize.io/icon/pinterest.png" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif"/>
        }
      </a>

      <a
        href={`http://www.raddit.com/${raddit}`}
        target="_blank"
        style={{ marginLeft: "5px" }}
      >
        {
          raddit !== "" ? (
            // <ImageComp src="http://localhost:3000/static/media/raddit.174467ce.png" />
            <ImageComp src="https://app.signatize.io/icon/reddit.png" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
        }
      </a>

      <a
        href={`http://www.google.com/${custemlink}`}
        style={{ marginLeft: "5px", textDecoration: "none" }}
      >
        {custemlink !== "" ? (
          <img
            src={socialImages === "" ? " " : socialImages}
            style={{
              width: socialImages === "" ? null : "32px",
              height: socialImages === "" ? null : "32px",
            }}
          />
        ) : // <img src={insta} style={{ width: "25px", height: "25px" }} />
        null}
      </a>
      {/* <a
        href={`http://www.google.com/${custemlink}`}
        style={{ marginLeft: "5px", textDecoration: "none" }}
      >
        {custemlink !== "" ? (
          <img
            src={socialImages === "" ? null : socialImages}
            style={{ width: "32px", height: "32px" }}
          />
        ) : // <img src={insta} style={{ width: "25px", height: "25px" }} />
        null}
      </a> */}
      {/* </span> */}
    </>
  );
};

export default SocialComp;
