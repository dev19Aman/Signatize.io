import React from "react";
import fb from "Images/Button Images/fb-button.png";
import insta from "Images/Button Images/ing-button (1).png";
// import social2 from "../widgetsImage/instagram_v1_shape1_b.png";
import social2 from "../../../../../../UserBar/widgets/widgetsImage/instagram_v1_shape1_b.png";

import twitter from "Images/Button Images/twitter-button.png";
import pinterest from "Images/Button Images/pinterest-button.png";
import linkedin from "Images/Button Images/linkedin-button.png";
import yt from "Images/Button Images/yt-button.png";
import { useSelector } from "react-redux";

const WedgitsSocialComp = () => {
  const {
    facebookLink,
    instagramLink,
    twitterLink,
    pinterestLink,
    linkedInLink,
    youtubeSocial,

    socialSettings,
  } = useSelector((state) => state.counter);

  return (
    <>
      <span className="flex">
        {facebookLink === "" ? (
          ""
        ) : (
          <a
            href={
              facebookLink.slice(0, 8) === "https://" ||
              facebookLink.slice(0, 7) === "http://"
                ? facebookLink
                : `https://${facebookLink}`
            }
          >
            <img src={fb} style={socialSettings} alt="" width="30px" />
          </a>
        )}
        {/* &nbsp; */}
        {instagramLink === "" ? null : (
          <a
            href={
              instagramLink.slice(0, 8) === "https://" ||
              instagramLink.slice(0, 7) === "http://"
                ? instagramLink
                : `https://${instagramLink}`
            }
          >
            <img src={social2} style={socialSettings} alt="" width="30px" />
          </a>
        )}
        {/* &nbsp; */}
        {twitterLink === "" ? null : (
          <a
            href={
              twitterLink.slice(0, 8) === "https://" ||
              twitterLink.slice(0, 7) === "http://"
                ? twitterLink
                : `https://${twitterLink}`
            }
          >
            <img src={twitter} style={socialSettings} alt="" width="30px" />
          </a>
        )}
        {/* &nbsp; */}
        {pinterestLink === "" ? null : (
          <a
            href={
              pinterestLink.slice(0, 8) === "https://" ||
              pinterestLink.slice(0, 7) === "http://"
                ? pinterestLink
                : `https://${pinterestLink}`
            }
          >
            <img src={pinterest} style={socialSettings} alt="" width="30px" />
          </a>
        )}
        {/* &nbsp; */}
        {linkedInLink === "" ? null : (
          <a
            href={
              linkedInLink.slice(0, 8) === "https://" ||
              linkedInLink.slice(0, 7) === "http://"
                ? linkedInLink
                : `https://${linkedInLink}`
            }
          >
            <img src={linkedin} style={socialSettings} alt="" width="30px" />
          </a>
        )}
        {/* &nbsp; */}
        {youtubeSocial === "" ? null : (
          <a
            href={
              youtubeSocial.slice(0, 8) === "https://" ||
              youtubeSocial.slice(0, 7) === "http://"
                ? youtubeSocial
                : `https://${youtubeSocial}`
            }
          >
            <img src={yt} style={socialSettings} alt="" width="30px" />
          </a>
        )}
      </span>
    </>
  );
};

export default WedgitsSocialComp;
