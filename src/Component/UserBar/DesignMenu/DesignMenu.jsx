import React, { useState, useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import Slider from "@material-ui/core/Slider";
import { BiCircle } from "react-icons/bi";
import { BiSquareRounded } from "react-icons/bi";
import { BiSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  getColors,
  getFontSize,
  getFontFamily,
  getSpacing,
  getImgSize,
  getImgShape,
  getStyleChangeA,
  getStyleChangeB,
  getLineHeight,
  getImageLink,
  getBorderRight,
  getBorderColor,
} from "../../../redux/designSlice";
import { useDispatch, useSelector } from "react-redux";

// import "./DesignFonts.css";
import "./Togle.css";
import Select from "react-select";

const DesignMenu = () => {
  const [spacingToggle, setSpacingToggle] = useState(false);
  const [imageToggle, setImageToggle] = useState(false);
  const [removeBorder, setRemoveBorder] = useState(true);
  const [iconToggle, setIconToggle] = useState(false);
  const { colors, imageLink, fontSize } = useSelector((state) => state.design);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    // console.log(newValue);
    localStorage.setItem("font_size", newValue);
    dispatch(getFontSize(newValue));
  };

  const handleSpaciing = (e, newSpacing) => {
    dispatch(getSpacing(newSpacing));
  };

  const handleimagesizeChange = (e, newSpacing) => {
    dispatch(getImgSize(newSpacing));
  };

  const fontTypes = [
    {
      id: 1,
      label: "Georgia",
    },
    {
      id: 2,
      label: "fantasy",
    },
    {
      id: 3,
      label: "cursive",
    },
    // {
    //   id: 4,
    //   label: "fantasy",
    // },
    {
      id: 4,
      label: "Courier",
    },
    {
      id: 5,
      label: "Gill",
    },
    {
      id: 6,
      label: "italic",
    },
  ];
  // Toggle function
  const handleSpacingToggle = (index) => {
    setSpacingToggle(index);
  };
  const handleImageToggle = (index) => {
    setImageToggle(index);
  };
  const handleIconToggle = (index) => {
    setIconToggle(index);
  };
  const handleRemoveBorder = () => {
    // dispatch(getBorderRight("value"));
    setRemoveBorder(!removeBorder);
    dispatch(getBorderRight(removeBorder));
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
      borderBottom: "1px dotted pink",
      cursor: "pointer",
      color: state.isSelected ? "black" : "black",
      padding: 7,
    }),
    // control: () => ({
    //   // none of react-select's styles are passed to <Control />
    //   width: 200,
    // }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const font_size = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "rgb(0, 0, 0)",
    letterSpacing: "upppercase",
  };

  return (
    <div
      className="px-2 py-4 overflow-x-hidden overflow-y-auto"
      style={{ height: "81vh" }}
    >
      <main className="animate__animated animate__fadeInRight animate__faster">
        <section className="flex px-4 mt-5 ">
          <h1
            className=" text-md flex-1 font-bold"
            style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
          >
            LAYOUT
          </h1>
        </section>

        {/* FIRST SECTION */}
        <motion.div
          animate={{ x: 5 }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 100 },
            default: { duration: 2 },
          }}
        >
          <section className="grid gap-7 mt-6">
            <div className="flex px-4 ">
              <div className="flex-1 text-sm font-semibold text-gray-600">
                font family
              </div>

              <div className="">
                <Select
                  styles={customStyles}
                  className="w-48  border-solid  border-gray-500 font-semibold text-gray-600 bg-white"
                  options={fontTypes}
                  onChange={(e) => dispatch(getFontFamily(e.label))}
                ></Select>
              </div>
            </div>

            <div className="flex px-4">
              <div className="flex-1  text-sm font-semibold text-gray-600 ">
                font size
              </div>
              <div className="w-48">
                <Slider
                  defaultValue={localStorage.getItem("font_size")}
                  aria-labelledby="discrete-slider-always"
                  onChange={handleChange}
                  min={1}
                  max={30}
                />{" "}
              </div>
            </div>

            <div className="flex px-4">
              <div className="flex-1  text-sm font-semibold text-gray-600">
                line height
              </div>
              <div class="inline-flex">
                <button
                  onClick={(e) => {
                    dispatch(getLineHeight("2"));
                    handleSpacingToggle(1);
                  }}
                  className={
                    spacingToggle === 1
                      ? "text-xs font-semibold bg-gray-100 text-blue-400  px-2 border border-gray-300"
                      : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300 px-2 border border-gray-300"
                  }
                >
                  Compact
                </button>
                <button
                  onClick={(e) => {
                    dispatch(getLineHeight("2.3"));
                    handleSpacingToggle(2);
                  }}
                  className={
                    spacingToggle === 2
                      ? "text-xs font-semibold bg-gray-100  text-blue-400  px-2 border border-gray-300"
                      : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                  }
                >
                  NormalA
                </button>
                <button
                  onClick={(e) => {
                    dispatch(getLineHeight("2.6"));
                    handleSpacingToggle(3);
                  }}
                  className={
                    spacingToggle === 3
                      ? "text-xs font-semibold bg-gray-100  text-blue-400  px-2 border border-gray-300"
                      : "text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                  }
                >
                  Spacious
                </button>
              </div>
            </div>

            <div className="flex px-4  items-center">
              <div className="flex-1  text-sm font-semibold text-gray-600">
                Font color
              </div>

              {/* RADIO BUTTONS */}
              <div class="inline-flex gap-2 self-center justify-center content-center items-center">
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-gray-700 rounded-full"
                  onClick={() => dispatch(getColors("#374151"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-red-700 rounded-full"
                  onClick={() => dispatch(getColors("#B91C1C"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-blue-700 rounded-full"
                  onClick={() => dispatch(getColors("#1D4ED8"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-pink-600 rounded-full"
                  onClick={() => dispatch(getColors("#DB2777"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-blue-600 rounded-full"
                  onClick={() => dispatch(getColors("#1D4ED8"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-yellow-600 rounded-full"
                  onClick={() => dispatch(getColors("#D97706"))}
                ></div>
                <div
                  style={{ cursor: "pointer" }}
                  class="w-5 h-5 bg-green-600 rounded-full"
                  onClick={() => dispatch(getColors("#008000"))}
                ></div>

                <div className="rounded-lg w-6">
                  <input
                    className="w-8 h-8"
                    type="color"
                    value={colors}
                    onChange={(e) => dispatch(getColors(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* IMAGES */}
          <h1
            className=" text-md mt-10 ml-4"
            style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
          >
            IMAGES
          </h1>

          {/* <h1 className="text-md font-semibold text-gray-400 ml-4 mt-4">
            Photo
          </h1> */}

          <section className="grid gap-5 mt-6">
            <div className="flex px-4">
              <div className="flex-1 text-sm font-semibold text-gray-600">
                Border Radius
              </div>
              <div className="inline-flex">
                <button
                  onClick={(e) => {
                    dispatch(getImgShape("0"));
                    handleImageToggle(1);
                  }}
                  className={
                    imageToggle === 1
                      ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                >
                  <BiSquare fontSize="22" />
                </button>
                <button
                  className={
                    imageToggle === 2
                      ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                  onClick={(e) => {
                    dispatch(getImgShape("10"));
                    handleImageToggle(2);
                  }}
                >
                  <BiSquareRounded fontSize="22" />
                </button>
                <button
                  className={
                    imageToggle === 3
                      ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                  onClick={(e) => {
                    dispatch(getImgShape("50"));
                    handleImageToggle(3);
                  }}
                >
                  <BiCircle fontSize="22" />
                </button>
              </div>
            </div>

            <div className="flex px-4 ">
              <div className="flex-1 text-sm font-semibold text-gray-600">
                Size
              </div>
              <div className="w-48">
                <Slider
                  color="primary"
                  defaultValue={40}
                  aria-labelledby="discrete-slider-always"
                  onChange={handleimagesizeChange}
                  min={40}
                  max={120}
                />
              </div>
            </div>

            <div className="flex px-4 items-center">
              <div className="flex-1 text-sm font-semibold text-gray-600">
                Image link
              </div>
              <div className="flex items-center border-b border-gray-500 ">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3  leading-tight focus:outline-none"
                  type="text"
                  value={imageLink}
                  placeholder="www.mywebsite.com"
                  aria-label="Full name"
                  onChange={(e) => dispatch(getImageLink(e.target.value))}
                />
              </div>
            </div>
          </section>

          <h1
            className=" text-md mt-10 ml-4"
            style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
          >
            {" "}
            DECORATIVE LINE
          </h1>

          <section className="grid gap-5 ">
            <div className="flex px-4 mt-3">
              <div className="flex-1  w-full text-sm font-semibold text-gray-600">
                Show line
              </div>
              <div class="">
                <label for="toggleB" class="flex items-center cursor-pointer">
                  <div class="relative">
                    <input
                      type="checkbox"
                      class="sr-only"
                      id="toggleB"
                      checked={removeBorder === true}
                      onChange={handleRemoveBorder}
                    />
                    <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>

                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex items-center ml-4 ">
              <div className=" flex-1 text-sm font-semibold text-gray-600">
                Colors
              </div>

              {/* RADIO BUTTONS */}
              <div class="inline-flex gap-1 self-center justify-center content-center items-center">
                <div className="border border-indigo-600 p-1 rounded-full cursor-pointer">
                  <div
                    class="w-4 h-4  rounded-full  "
                    style={{ backgroundColor: "#000000" }}
                    onClick={() => dispatch(getBorderColor("#000000"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#3d3a3a" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#3d3a3a"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#807d7d" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#807d7d"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#918d8d" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#918d8d"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#aba3a2" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#aba3a2"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#ede9e8" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#ede9e8"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#cccccc" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#cccccc"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#faf5f5" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#faf5f5"))}
                  ></div>
                </div>
                <div className="border border-indigo-600 p-1 rounded-full">
                  <div
                    style={{ cursor: "pointer", backgroundColor: "#ffffff" }}
                    class="w-4 h-4  rounded-full"
                    onClick={() => dispatch(getBorderColor("#ffffff"))}
                  ></div>
                </div>
              </div>
            </div>
          </section>
          {/* SOCIAL ICONS */}
          <h1
            className=" text-md mt-10 ml-4 "
            style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
          >
            SOCIAL ICONS
          </h1>
          <section className="grid gap-6 mt-6 ">
            <div className="flex px-4 ">
              <div className="flex-1  text-sm font-semibold text-gray-600">
                Style
              </div>
              <div className="inline-flex">
                <button
                  onClick={() => {
                    dispatch(getStyleChangeA("#4267B2"));
                    dispatch(getStyleChangeB(" "));
                    handleIconToggle(1);
                  }}
                  className={
                    iconToggle === 1
                      ? " text-xs font-semibold bg-gray-100  text-blue-400  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                >
                  <FaTwitterSquare fontSize="22" />
                </button>
                <button
                  onClick={() => {
                    dispatch(getStyleChangeB("1px solid #4267B2 "));
                    dispatch(getStyleChangeA(""));
                    handleIconToggle(2);
                  }}
                  className={
                    iconToggle === 2
                      ? " text-xs font-semibold bg-gray-100  text-blue-400  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                >
                  <TiSocialTwitterCircular fontSize="32" />
                </button>
                <button
                  onClick={() => {
                    dispatch(getStyleChangeB(" "));
                    dispatch(getStyleChangeA(""));
                    handleIconToggle(3);
                  }}
                  className={
                    iconToggle === 3
                      ? " text-xs font-semibold bg-gray-100  text-blue-400  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
                >
                  <FaTwitter fontSize="22" />
                </button>
              </div>
            </div>

            {/* <div className="flex px-4 items-center">
            <div className="flex-1 text-gray-600 ">Shape</div>
            <div className="inline-flex">
              <button
                onChange
                     className={
                    imageToggle === 3
                      ? " text-xs font-semibold bg-gray-100  text-blue-300  px-5 py-1 border border-gray-300"
                      : " text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-5 py-1 border border-gray-300"
                  }
              >
                <BiSquare fontSize="22" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-6 py-1 border border-gray-300">
                <BiSquareRounded fontSize="22" />
              </button>
              <button className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-6 py-1 border border-gray-300">
                <BiCircle fontSize="22" />
              </button>
            </div>
          </div> */}

            <div className="flex px-4 items-center">
              <div className="flex-1  text-sm font-semibold text-gray-600">
                Size
              </div>
              <div className="w-48">
                <Slider
                  color="primary"
                  defaulValue={1}
                  onChange={handleSpaciing}
                  min={1}
                  max={10}
                />
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default DesignMenu;
