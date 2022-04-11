import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { useDispatch } from "react-redux";
import {
  getGreenMessage,
  getGreenMessageImage,
  getGreenMessagePadding,
} from "../../../../redux/CounterSlice";
import GreenImg1 from "../widgetsImage/none.png";
import GreenImg2 from "../widgetsImage/green-earth.png";
import GreenImg3 from "../widgetsImage/recycling.png";
import GreenImg4 from "../widgetsImage/tree.png";
import GreenImg5 from "../widgetsImage/leaf.png";
import GreenImg6 from "../widgetsImage/leaves.png";
import GreenImg7 from "../widgetsImage/hand-leaves.png";
const options = [
  { label: "Select one", value: "" },
  {
    label: "Environmental responsibility",
    value:
      "Please consider your environmental responsibility. Before printing this e-mail message, ask yourself whether you really need a hard copy.	",
  },
  {
    label: "Environmental responsibility short",
    value: "Please consider the environment before printing this e-mail!",
  },
  {
    label: "Do you really need ...?",
    value: "Do you really need to print this email?",
  },
  {
    label: "Printing kills trees",
    value: "Printing emails kills trees. Print is murder!",
  },
  { label: "Don't print this", value: "Don't print this, Ok?" },
  { label: "Printing emails is SO 2009", value: "Printing emails is SO 2009" },
  {
    label: "Save a tree - kill a beaver",
    value: "Save a tree - kill a beaver",
  },
  {
    label: "Be carbon free",
    value: "Be like me, be Carbon free - don't print this and save a tree",
  },
  {
    label: "Save ink cartridges",
    value: "Save ink cartridges from going extinct! Don't print this email!",
  },
];
const GreenMessage = () => {
  const dispatch = useDispatch();

  const handleGreenMessageChange = (e) => {
    dispatch(getGreenMessage({ value: e.target.value }));
  };

  const handleImageChange = (img) => {
    // console.log(img);
    dispatch(getGreenMessageImage({ value: img }));
  };

  const handleSliderChange = (key, value) => {
    dispatch(
      getGreenMessagePadding({
        key,
        value: value,
      })
    );
  };
  const [customMessage, setcustomMessage] = useState(false);

  return (
    <>
      <article>
        <hr />
        <section className="grid gap-4 items-center justify-items-center mt-7 ">
          <div className="flex items-center gap-12">
            <h1>Type</h1>
            <div className="relative inline-block text-gray-700 ">
              <select
                className="w-full h-8 pl-3 placeholder-gray-600 border rounded-full appearance-none outline-none"
                placeholder="Regular input"
                onChange={handleGreenMessageChange}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <article>
          <section className="flex gap-2 ml-6 mt-8 justify-items-center">
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg1)}
            >
              <img src={GreenImg1} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg2)}
            >
              <img src={GreenImg2} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg3)}
            >
              <img src={GreenImg3} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg4)}
            >
              <img src={GreenImg4} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg5)}
            >
              <img src={GreenImg5} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg6)}
            >
              <img src={GreenImg6} alt="" className="w-7 h-7" />
            </button>
            <button
              className="h-10 w-10 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(GreenImg7)}
            >
              <img src={GreenImg7} alt="" className="w-7 h-7" />
            </button>
          </section>
          <section>
            <div className=" mb-4 mt-1 ml-5">
              <button
                onClick={() => setcustomMessage(!customMessage)}
                className="text-green-600"
              >
                Upload your own message
              </button>
              {customMessage ? (
                <textarea
                  className="resize-none border-2 rounded-md w-80 h-16 p-1"
                  placeholder="type your green message here"
                  onChange={handleGreenMessageChange}
                ></textarea>
              ) : (
                ""
              )}
            </div>
          </section>
          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg items-center mb-8">
              Padding top
            </div>
            <div className="w-44 mb-5">
              <Slider
                color="primary"
                defaulValue={1}
                max={20}
                onChange={(e, value) => handleSliderChange("marginTop", value)}
              />
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default GreenMessage;
