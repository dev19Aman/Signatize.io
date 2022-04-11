import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
// import "../../DesignMenu/DesignFonts.css";
import {
  getSignofftext,
  getSignofftexts,
  getSignofffontStyle,
  getSignoffColors,
  getSignofffontSize,
} from "../../../../redux/CounterSlice";

const SignOff = () => {
  const {
    signofftext,
    signofffontStyle,
    signoffColors,
    signofffontSize,
    signofftexts,
  } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(signofftext);
  const [button, setbutton] = useState(false);

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

  const handleChange = (event, newValue) => {
    dispatch(getSignofffontSize(newValue));
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

  return (
    <>
      <article className="">
        <hr />
        <section className="grid items-center justify-items-center mt-7 ">
          {/* FIRST TOGGLE */}
          <div>
            <input
              className="shadow appearance-none border rounded-full w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={inputValues}
              onChange={(e) => {
                setInputValues(e.target.value);
                dispatch(getSignofftext(e.target.value));
              }}
              placeholder="Type Your Text"
            />
            <div className="flex  gap-10 mt-6">
              <ul className="list-none grid gap-2 text-gray-600 ">
                <button onClick={() => setbutton(!button)}>
                  <li>
                    <button
                      className="flex items-center gap-1"
                      onClick={(event) => {
                        setInputValues("");
                        dispatch(getSignofftext("Happy Holidays"));
                      }}
                    >
                      <input
                        checked={signofftext === "Happy Holidays"}
                        type="radio"
                        id="contactChoice1"
                      />
                      Happy Holidays!
                    </button>
                  </li>
                </button>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      setInputValues("");

                      dispatch(getSignofftext("Best Regards"));
                    }}
                  >
                    <input
                      checked={signofftext === "Best Regards"}
                      type="radio"
                      id="contactChoice2"
                    />
                    Best regards,
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      dispatch(getSignofftext("Sincerely"));
                    }}
                  >
                    <input
                      checked={signofftext === "Sincerely"}
                      type="radio"
                      id="contactChoice3"
                    />
                    Sincerely,
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      dispatch(getSignofftext("Regards"));
                    }}
                  >
                    <input
                      checked={signofftext === "Regards"}
                      type="radio"
                      id="contactChoice4"
                    />
                    Regards
                  </button>
                </li>
              </ul>
              <ul className="list-none grid gap-2 text-gray-600">
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      dispatch(getSignofftext("Best"));
                    }}
                  >
                    <input
                      checked={signofftext === "Best"}
                      type="radio"
                      id="contactChoice1"
                    />
                    Best
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      setInputValues("");

                      dispatch(getSignofftext("Kind Regards"));
                    }}
                  >
                    <input
                      checked={signofftext === "Kind Regards"}
                      type="radio"
                      id="contactChoice2"
                    />
                    Kind regards,
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      setInputValues("");

                      dispatch(getSignofftext("Thanks"));
                    }}
                  >
                    <input
                      checked={signofftext === "Thanks"}
                      type="radio"
                      id="contactChoice3"
                    />
                    Thanks,
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={(event) => {
                      setInputValues("");

                      dispatch(getSignofftext("Best Wishes"));
                    }}
                  >
                    <input
                      checked={signofftext === "Best Wishes"}
                      type="radio"
                      id="contactChoice4"
                    />
                    Best wishes
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="flex items-center px-8 ">
            <div className="flex-1 text-gray-600 text-lg">font style</div>
            <div class="relative inline-block text-gray-700 ">
              <Select
                styles={customStyles}
                className="w-48  border-solid  border-gray-500 font-semibold text-gray-600 bg-white"
                options={fontTypes}
                onChange={(e) => dispatch(getSignofffontStyle(e.label))}
              ></Select>
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

          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg">font size</div>
            <div className="w-44">
              <Slider
                color="primary"
                max={25}
                min={15}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center px-8  mt-10">
            <div className="flex-1 text-gray-600 text-lg">font color</div>
            <div className="w-44 ">
              <input
                className=" h-8 w-8 text-gray-600"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "none",
                  borderColor: "red",
                }}
                type="color"
                value={signoffColors}
                onChange={(e) => dispatch(getSignoffColors(e.target.value))}
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SignOff;
