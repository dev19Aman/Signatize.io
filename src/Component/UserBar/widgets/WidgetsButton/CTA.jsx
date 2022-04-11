import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getctaButton } from "../../../../redux/CounterSlice";
import { useSelector } from "react-redux";
import {
  buttonSize,
  buttonColor,
  buttonType,
} from "../../../../Utils/Constant";

const { full, light, link } = buttonType;
const { small, medium, large } = buttonSize;
const { gray, red, blue, pink, skyblue, yellow, green } = buttonColor;

const CTA = () => {
  const dispatch = useDispatch();
  const { text, url } = useSelector((state) => state.counter.ctaButton);
  // const [pickColor, setPickColor] = useState()

  // console.log("Picker Color :- ", pickColor)

  const handleElementChange = (e) => {
    dispatch(
      getctaButton({
        key: e.target.name,
        value: e.target.value,
      })
    );
  };
  const handleButtonSizeChange = (size) => {
    // console.log(size);
    dispatch(
      getctaButton({
        key: "size",
        value: size,
      })
    );
  };
  const handleColorChange = (color) => {
    dispatch(
      getctaButton({
        key: "color",
        value: color,
      })
    );
  };

  const handleColorChange1 = (e) => {
    dispatch(
      getctaButton({
        key: "color",
        value: e,
      })
    );
  }

  return (
    <>
      <article>
        <hr />
        <section className="grid gap-2 items-center justify-items-start mt-5  ml-4">
          <h1 className="text-2xl font-semibold">Button details</h1>
          <section className="grid gap-8 mt-4 justify-items-center">
            <div className="flex items-center gap-12 ">
              <h1>Button text</h1>
              <input
                className="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                        rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Website name"
                name="text"
                value={text}
                onChange={handleElementChange}
              />
            </div>
            <div className="flex items-center gap-12 ">
              <h1>Button URL</h1>
              <input
                className="appearance-none block w-48 bg-gray-100  text-black border  border-gray-200 text-sm
                rounded-full py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="https://"
                name="url"
                value={url}
                onChange={handleElementChange}
              />
            </div>
          </section>

          <h1 className="text-2xl font-semibold mt-4">Button style</h1>
          <section class="grid gap-3">
            <div className="flex gap-8 mt-2">
              <h1 className="font-semibold">Type</h1>
              <ul
                className="list-none flex gap-4 text-gray-600 items-center"
                onChange={handleElementChange}
              >
                <li className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="contactChoice1"
                    value={full}
                    name="type"
                  />
                  Full
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="contactChoice2"
                    value="bg-transparent"
                    name="type"
                    value={light}
                  />
                  Light
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="type"
                    value={link}
                  />
                  Simple Link
                </li>
              </ul>
            </div>
            <div className="flex gap-8 mt-2">
              <h1 className="font-semibold">Size</h1>
              <div className="inline-flex">
                <button
                  className="text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                  onClick={() => handleButtonSizeChange(small)}
                >
                  S
                </button>

                <button
                  className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                  onClick={() => handleButtonSizeChange(medium)}
                >
                  M
                </button>
                <button
                  className=" text-xs font-semibold hover:bg-gray-100 text-gray-400 hover:text-blue-300  px-2 border border-gray-300"
                  onClick={() => handleButtonSizeChange(large)}
                >
                  L
                </button>
              </div>
            </div>

            <div className="flex gap-8 mt-2 mb-5">
              <h1 className="font-semibold">Color</h1>
              <div className="inline-flex gap-2">
                <button
                  className="w-6 h-6 bg-gray-700 rounded-full"
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
                  className="w-6 h-6 bg-blue-400 rounded-full"
                  onClick={() => handleColorChange(skyblue)}
                ></button>
                <button
                  className="w-6 h-6 bg-yellow-600 rounded-full"
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
          </section>
        </section>
      </article>
    </>
  );
};

export default CTA;
