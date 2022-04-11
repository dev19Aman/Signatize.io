import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const VideoComp = () => {
  const { youtubeLinkdesc, youtubeTitle, youtubeUrl, youtubeLink } =
    useSelector((state) => state.counter);
  return (
    <>
      <span>
        {youtubeUrl ? (
          <>
            <div
              style={{
                maxWidth: "200px",
                float: "left",
                margin: "0 8px 0 0",
              }}
            >
              <a href={youtubeUrl}>
                <img height="70px" width="90px" src={youtubeLink} />
              </a>
              <div
                // className="text-xs font-semibold  overflow-hid den"
                style={{
                  maxWidth: "90px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  overflow: "hidden",
                }}
              >
                {youtubeTitle}
              </div>
            </div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                margin: 0,
                width: youtubeLinkdesc ? "275px" : "",
                float: "left",
                textDecoration: "none",
              }}
            >
              {youtubeLinkdesc ? youtubeLinkdesc.substr(0, 300) + "..." : ""}
            </p>
          </>
        ) : (
          ""
        )}
      </span>
    </>
  );
};

export default VideoComp;
