import React from "react";
import { useState } from "react";
import { ImPencil } from "react-icons/im";
import { FaShareAlt } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { VscQuote } from "react-icons/vsc";
import { ImYoutube } from "react-icons/im";
import { BsHammer } from "react-icons/bs";
import { MdBrandingWatermark } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";

import SignOff from "./WidgetsButton/SignOff";
import Social from "./WidgetsButton/Social";
import Video from "./WidgetsButton/Video";
import Quote from "./WidgetsButton/Quote";
import VideoConference from "./WidgetsButton/VideoConference";
import Disclaimer from "./WidgetsButton/Disclaimer";
import CTA from "./WidgetsButton/CTA";
import GreenMessage from "./WidgetsButton/GreenMessage";
import PredesignedBanner from "./WidgetsButton/PredesignedBanner";
import UploadBanner from "./WidgetsButton/UploadBanner";
import "animate.css";
import SalesEvent from "./WidgetsButton/SalesEvent";

const Index = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);
  const [fourthButton, setFourthButton] = useState(false);
  const [fifthButton, setFifthButton] = useState(false);
  const [sixthButton, setSixthButton] = useState(false);
  const [seventhButton, setSeventhButton] = useState(false);
  const [eightButton, setEightButton] = useState(false);
  const [ninthButton, setNinthButton] = useState(false);
  const [tenthButton, setTenthButton] = useState(false);
  const [eleventhButton, setEleventhButton] = useState(false);

  const handleFirst = () => {
    setFirstButton(!firstButton);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleSecond = () => {
    setFirstButton(false);
    setSecondButton(!secondButton);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleThird = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(!thirdButton);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleFourth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(!fourthButton);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleFifth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(!fifthButton);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleSixth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(!sixthButton);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleSeventh = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(!seventhButton);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleEighth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(!eightButton);
    setNinthButton(false);
    setTenthButton(false);
  };
  const handleNinth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(!ninthButton);
    setTenthButton(false);
  };
  const handleTenth = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(!tenthButton);
  };
  const handleEleventh = () => {
    setFirstButton(false);
    setSecondButton(false);
    setThirdButton(false);
    setFourthButton(false);
    setFifthButton(false);
    setSixthButton(false);
    setSeventhButton(false);
    setEightButton(false);
    setNinthButton(false);
    setTenthButton(false);
    setEleventhButton(!eleventhButton);
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-auto"
      style={{ height: "81vh" }}
    >
      <main className=" animate__animated animate__fadeInRight animate__faster">
        <h1
          animate={{ x: 5 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 2 },
          }}
          className="mt-6  uppercase ml-4"
          style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
        >
          Widgets
        </h1>
        <div
          animate={{ x: 5 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 2 },
          }}
        >
          {/* FIRST BUTTON */}
          <section className="h-full w-96 mx-auto mt-6">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  firstButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleFirst}
              >
                <ImPencil />

                <p
                  className="text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Sign off
                </p>
              </button>
              {firstButton ? (
                <div>
                  <SignOff />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* SECOND BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 ">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  secondButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleSecond}
              >
                <FaShareAlt />

                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Social Buttons
                </p>
              </button>
              {secondButton ? (
                <div>
                  <Social />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          {/* THIRD BUTTON */}
          <section className="h-full w-96 mx-auto mt-10">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  thirdButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleThird}
              >
                <VscQuote />

                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Quote
                </p>
              </button>
              {/*  TOGGLE */}

              {thirdButton ? (
                <div>
                  <Quote />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* FOURTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 mb-10">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  fourthButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleFourth}
              >
                <ImYoutube />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Video
                </p>
              </button>

              {fourthButton ? (
                <article>
                  <hr />
                  <div>
                    <Video />
                  </div>
                </article>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* FIFTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 ">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  fifthButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleFifth}
              >
                <BsCameraVideoFill />

                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Video conference
                </p>
              </button>
              {/*  TOGGLE */}
              {fifthButton ? (
                <div>
                  <VideoConference />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* SIXTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  sixthButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleSixth}
              >
                <BsHammer />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Disclaimer
                </p>
              </button>

              {sixthButton ? (
                <div>
                  <Disclaimer />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* SEVENTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 mb-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  seventhButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleSeventh}
              >
                <HiCursorClick />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Green Message
                </p>
              </button>

              {seventhButton ? (
                <div>
                  <GreenMessage />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          {/* Eight BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 mb-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  eightButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleEighth}
              >
                <MdBrandingWatermark />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Predesigned Banners
                </p>
              </button>

              {eightButton ? (
                <div>
                  <PredesignedBanner />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          {/* NINTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 mb-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  ninthButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full "
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full "
                }
                onClick={handleNinth}
              >
                <MdBrandingWatermark />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Upload my Banners
                </p>
              </button>

              {ninthButton ? (
                <div>
                  <UploadBanner />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
          {/* TENTH BUTTON */}
          <section className="h-full w-96 mx-auto mt-8 mb-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  tenthButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full"
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full"
                }
                onClick={handleTenth}
              >
                <BsCameraVideoFill />

                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  CTA
                </p>
              </button>
              {tenthButton ? (
                <div>
                  <CTA />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>

          {/* SALES EVENT */}
          <section className="h-full w-96 mx-auto mt-8 mb-8">
            <div className=" w-full h-full bg-white shadow  rounded-3xl ">
              <button
                className={
                  eleventhButton
                    ? "flex items-center  gap-3 w-full  text-blue-500  py-3 px-6 rounded-full"
                    : "flex items-center  gap-3 w-full  text-gray-500 hover:text-blue-500 py-3 px-6 rounded-full"
                }
                onClick={handleEleventh}
              >
                {/* <BsCameraVideoFill /> */}
                <img src="https://d1n2mpfyq0bf3x.cloudfront.net/8c78ba5aa0e3e8e8a051256546bb77a6/sale-icon.svg" />
                <p
                  className=" text-md font-semibold "
                  style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
                >
                  Sales event
                </p>
              </button>
              {eleventhButton ? (
                <div>
                  <SalesEvent />
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
