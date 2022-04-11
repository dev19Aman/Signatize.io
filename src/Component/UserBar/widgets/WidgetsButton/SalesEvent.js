import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSalesEvent, getSalesEventImage } from "redux/CounterSlice";
import trans from "../widgetsImage/trans.jfif";
import trans1 from "../widgetsImage/trans (1).jfif";
import trans2 from "../widgetsImage/trans (2).jfif";
import trans3 from "../widgetsImage/trans (3).jfif";
import trans4 from "../widgetsImage/trans (4).jfif";
import trans5 from "../widgetsImage/trans (5).jfif";
import { buttonColor } from "../../../../Utils/Constant";
import Slider from "@material-ui/core/Slider";

const SalesEvent = () => {
  const dispatch = useDispatch();
  const { gray, red, blue, pink, skyblue, yellow, green } = buttonColor;

  // function for SalesEvent Title,Text and Link
  const handleElementChange = (e) => {
    dispatch(
      getSalesEvent({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };

  // function for SalesEvent Image
  const handleImageChange = (img) => {
    dispatch(
      getSalesEventImage({
        value: img,
      })
    );
  };
  // FUNCTION FOR SALESEVENT COLOR
  const handleColorChange = (color) => {
    dispatch(
      getSalesEvent({
        key: "saleColor",
        value: color,
      })
    );
  };
  const handleColorChange1 = (e) => {
    dispatch(
      getSalesEvent({
        key: "saleColor",
        value: e,
      })
    );
  };
  // FUNCTION FOR SALESEVENT FONTSIZE
  const hadleSliderChange = (key, value) => {
    dispatch(
      getSalesEvent({
        key,
        value: value,
      })
    );
  };
  return (
    <>
      <main>
        <hr />
        <section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">Sales event</h1>
          <h1 className="text-lg font-semibold">
            Enter your sale event detail
          </h1>
          <section className="mt-4 ">
            <div className="flex  gap-14">
              <h1 className="font-semibold mt-4">title </h1>
              <input
                className="appearance-none block w-48 bg-white  text-black border-b  border-black  text-sm
                 py-2 px-2 leading-tight focus:outline-none focus:bg-gray-100 "
                id="grid-last-name"
                type="text"
                placeholder="title"
                name="saleTitle"
                onChange={handleElementChange}
              />
            </div>
            <div className="flex items-center gap-5 mt-2">
              <h1 className="font-semibold mt-4">Link text </h1>
              <input
                className="appearance-none block w-48 bg-white  text-black border-b  border-black  text-sm
                 py-2 px-2 leading-tight focus:outline-none focus:bg-gray-100 "
                id="grid-last-name"
                type="text"
                placeholder="text"
                name="saleText"
                onChange={handleElementChange}
              />
            </div>
            <div className="flex items-center gap-5 mt-2">
              <h1 className="font-semibold mt-4">Link URL </h1>
              <input
                className="appearance-none block w-48 bg-white  text-black border-b  border-black  text-sm
                py-2 px-2 leading-tight focus:outline-none focus:bg-gray-100 "
                id="grid-last-name"
                type="text"
                placeholder="Url"
                name="salelink"
                onChange={handleElementChange}
              />
            </div>
          </section>
          <section className="flex gap-2  mt-4 justify-items-center">
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans)}
            >
              <img src={trans} alt="" className="w-6 h-6" />
            </button>
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans1)}
            >
              <img src={trans1} alt="" className="w-6 h-6" />
            </button>
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans2)}
            >
              <img src={trans2} alt="" className="w-6 h-6" />
            </button>
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans3)}
            >
              <img src={trans3} alt="" className="w-6 h-6" />
            </button>
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans4)}
            >
              <img src={trans4} alt="" className="w-6 h-6" />
            </button>
            <button
              className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(trans5)}
            >
              <img src={trans5} alt="" className="w-6 h-6" />
            </button>
            <button
              // className="h-8 w-8 border border-blue-300 rounded-lg items-center p-1 "
              onClick={() => handleImageChange(null)}
            >
              {/* <img src="" alt="" className="w-6 h-76 /> */}
              <h1 className="text-sm font-semibold">none</h1>
            </button>
          </section>
          <h1 className="text-2xl font-semibold mt-4"> style</h1>
          <section class="grid gap-3">
            <div className="flex gap-8 mt-2 mb-5">
              <h1 className="font-semibold">Color</h1>
              <div className="inline-flex gap-2">
                <button
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: "#161927" }}
                  onClick={() => handleColorChange(gray)}
                ></button>
                <button
                  className="w-6 h-6 bg-red-700 rounded-full"
                  onClick={() => handleColorChange(red)}
                ></button>
                <button
                  className="w-6 h-6 bg-blue-700 rounded-full"
                  onClick={() => handleColorChange(blue)}
                ></button>
                <button
                  className="w-6 h-6 bg-pink-600 rounded-full"
                  onClick={() => handleColorChange(pink)}
                ></button>
                <button
                  className="w-6 h-6  rounded-full"
                  style={{ backgroundColor: "#7B4BA0" }}
                  onClick={() => handleColorChange(skyblue)}
                ></button>
                <button
                  className="w-6 h-6  rounded-full"
                  style={{ backgroundColor: "#9B7C23" }}
                  onClick={() => handleColorChange(yellow)}
                ></button>
                <button
                  className="w-6 h-6 bg-green-600 rounded-full"
                  onClick={() => handleColorChange(green)}
                ></button>
                <input
                  className="w-6 h-7"
                  type="color"
                  onChange={(e) => handleColorChange1(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center  ">
              <div className="flex-1 text-gray-600 text-lg">Font size</div>
              <div className="w-44">
                <Slider
                  color="primary"
                  defaulValue={12}
                  max={30}
                  onChange={(e, value) =>
                    hadleSliderChange("salesFontSize", value)
                  }
                />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default SalesEvent;
