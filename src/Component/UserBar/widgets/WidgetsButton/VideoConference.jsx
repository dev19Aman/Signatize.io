import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { FaVideo } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { SiGooglehangoutsmeet } from "react-icons/si";
import { TiWeatherSnow } from "react-icons/ti";
import { SiGotomeeting } from "react-icons/";

import { useDispatch, useSelector } from "react-redux";
import AppleIcon from "@material-ui/icons/Apple";
import {
  getVideoConference,
  getvideoConferencebtn,
  getVideoconf,
} from "../../../../redux/CounterSlice";
const VideoConference = () => {
  const [toggleTab, setToggleTab] = useState(0);
  const handleToggle = (index) => {
    setToggleTab(index);
  };
  const { videoConferenceInfo, videoconf } = useSelector(
    (state) => state.counter
  );

  const { videoText } = videoConferenceInfo;
  const dispatch = useDispatch();

  const handleVideoConferenceIconChange = (Icon) => {
    dispatch({
      key: "VideoIcon",
      value: Icon,
    });
  };
  const handleVideoConferenceInfoChange = (e) => {
    dispatch(
      getVideoConference({
        key: e.target.name,
        value: e.target.value,
      })
    );
    dispatch(getVideoconf(e.target.value));
  };
  const handleVideoUrl = (e) => {
    dispatch(
      getVideoConference({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  const hadleSliderChange = (key, value) => {
    dispatch(
      getVideoConference({
        key,
        value: value,
      })
    );
  };
  const handleInputPlaceholder = () => {
    if (videoconf === "Zoom") {
      return "https://zoom.us/signin";
    } else if (videoconf === "Skype") {
      return "https://www.skype.com/en/";
    } else if (videoconf === "Google Meet") {
      return "https://meet.google.com/?pli=1";
    } else if (videoconf === "GoTOMeeting") {
      return "https://www.goto.com/meeting";
    }
  };

  return (
    <>
      <article>
        <hr />
        <section className="grid  gap-4 items-center justify-items-center mt-7 ">
          <div className="flex items-center gap-4">
            <button
              className={
                toggleTab === 1
                  ? " flex items-center  gap-3 w-40 bg-gray-600 text-white text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
                  : "flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
              }
              onClick={(e) => {
                dispatch(getvideoConferencebtn(<FaVideo />));
                dispatch(getVideoconf("Zoom"));
                handleToggle(1);
              }}
            >
              <FaVideo fontSize="18" />
              Zoom
            </button>
            <button
              className={
                toggleTab === 2
                  ? " flex items-center gap-3 w-40 bg-gray-600  text-white text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
                  : "flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
              }
              onClick={() => {
                dispatch(getvideoConferencebtn(<ImSkype />));
                dispatch(getVideoconf("Skype"));
                handleToggle(2);
              }}
            >
              <ImSkype fontSize="18" />
              Skype
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={
                toggleTab === 3
                  ? " flex items-center gap-3 w-40 bg-gray-600  text-white text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
                  : "flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border border-gray-200 text-sm rounded-full py-2 px-3"
              }
              onClick={() => {
                dispatch(getvideoConferencebtn(<SiGooglehangoutsmeet />));
                dispatch(getVideoconf("Google Meet"));
                handleToggle(3);
              }}
            >
              <SiGooglehangoutsmeet fontSize="18" />
              Google Meet
            </button>
            <button
              className={
                toggleTab === 4
                  ? " flex items-center gap-3 w-40 bg-gray-600  text-white text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
                  : "flex items-center gap-3 w-40 bg-white  text-gray-600 text-md border  border-gray-200 text-sm rounded-full py-2 px-3"
              }
              onClick={() => {
                dispatch(
                  getvideoConferencebtn(<TiWeatherSnow fontSize="18" />)
                );
                dispatch(getVideoconf("GoTOMeeting"));
                handleToggle(4);
              }}
            >
              <TiWeatherSnow fontSize="18" />
              GoTOMeeting
            </button>
          </div>
        </section>
        <article>
          <section className="grid gap-8 mt-8 justify-items-center">
            <div className="flex items-center gap-12">
              <h1>Button text</h1>
              <input
                className="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                 rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Zoom meeting"
                onChange={handleVideoConferenceInfoChange}
                name="videoText"
                value={videoconf}
              />
            </div>
            <div className="flex items-center gap-12">
              <h1>Button URL</h1>
              <input
                className="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                 rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder={
                  videoconf === ""
                    ? "https://zoom.us/signin"
                    : handleInputPlaceholder()
                }
                onChange={handleVideoUrl}
                name="videoUrl"
              />
            </div>
          </section>
          <div className="flex items-center px-8 mt-10">
            <div className="flex-1 text-gray-600 text-lg">Shape</div>
            <div className="w-44">
              <Slider
                color="primary"
                defaulValue={1}
                max={30}
                onChange={(e, value) => hadleSliderChange("shape", value)}
              />
            </div>
          </div>
          <div className="flex items-center px-8 mt-10">
            <div className="flex-1 text-gray-600 text-lg">Height</div>
            <div className="w-44">
              <Slider
                onChange={(e, value) => hadleSliderChange("height", value)}
                color="primary"
                defaulValue={1}
                max={40}
                title="test"
              />
            </div>
          </div>
          <div className="flex items-center px-8 py-10">
            <div className="flex-1 text-gray-600 text-lg">Margin top</div>
            <div className="w-44">
              <Slider
                color="primary"
                defaulValue={1}
                max={20}
                onChange={(e, value) => hadleSliderChange("marginTop", value)}
              />
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default VideoConference;
