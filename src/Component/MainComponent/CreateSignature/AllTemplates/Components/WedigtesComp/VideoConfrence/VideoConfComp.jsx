import React from "react";
import { useSelector } from "react-redux";

const VideoConfComp = () => {
  const { ctaButton, videoConferenceInfo, videoconf } = useSelector(
    (state) => state.counter
  );

  const getButtonShape = () => {
    if (shape === 0) return {};
    else return { fontSize: shape };
  };
  const getButtonMarginTop = () => {
    if (marginTop === 0) return {};
    else return { marginTop: marginTop };
  };

  const getButtonHeigth = () => {
    if (height === 0) return {};
    else return { height: height };
  };

  const { color, text, url, type, size } = ctaButton;
  const { videoUrl, VideoIcon, videoText, shape, height, marginTop } =
    videoConferenceInfo;

  const videoButtonShape = getButtonShape();
  const videoButtonHeigth = getButtonHeigth();
  const videoMarginTop = getButtonMarginTop();

  const videoButtonstyles = {
    ...videoButtonShape,
    ...videoButtonHeigth,
    ...videoMarginTop,
  };

  return (
    <>
      {videoconf === "" ? (
        ""
      ) : (
        <span>
          {videoText === "" ? (
            <div style={videoButtonstyles}>
              <span>{videoconf}</span>
            </div>
          ) : (
            videoText && (
              <a rel="noreferrer" href={videoUrl} target="_blank">
                <div style={videoButtonstyles}>
                  <span style={{ textDecoration: "none" }}>{videoText}</span>
                </div>
              </a>
            )
          )}
        </span>
      )}
    </>
  );
};

export default VideoConfComp;
