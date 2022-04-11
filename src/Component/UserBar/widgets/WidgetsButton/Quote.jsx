import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getquoteTitle } from "../../../../redux/CounterSlice";
const Quote = () => {
  const dispatch = useDispatch();
  const [openQuote, setOpenQuote] = useState(false);

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    console.log(index);
    setToggleState(index);
    switch (index) {
      case 1:
        return dispatch(
          getquoteTitle(
            ` "Failure is the condiment that gives success its flavor." - Truman Capote.`
          )
        );
      case 2:
        return dispatch(
          getquoteTitle(
            `  "Life is 10% what happens to you and 90% how you react to it." - Charles R. Swindoll.`
          )
        );
      case 3:
        return dispatch(
          getquoteTitle(
            `"Great, Greatness, Some One touch of nature makes the whole world kin." - William Shakespeare`
          )
        );
      case 4:
        return dispatch(
          getquoteTitle(
            ` "Medicine is a science of uncertainty and an art of probability." - William Osler.`
          )
        );
      case 5:
        return dispatch(
          getquoteTitle(
            ` "In this world nothing can be said to be certain, except death and taxes." - Benjamin Franklin.`
          )
        );
      case 6:
        return dispatch(
          getquoteTitle(
            `"All generalizations are false, including this one." - Mark Twain.`
          )
        );
      case 7:
        return dispatch(
          getquoteTitle(
            ` "Positive thinking will let you do everything better than negative thinking will." - Zig Ziglar`
          )
        );
      case 8:
        return dispatch(
          getquoteTitle(
            `"Pessimism leads to weakness, optimism to power." - William James.`
          )
        );
      case 9:
        return dispatch(
          getquoteTitle(
            ` "A friendship founded on business is better than a business founded on friendship." - John D. Rockefeller.`
          )
        );
      case 10:
        return dispatch(
          getquoteTitle(
            ` "The greatest ability in business is to get along with others and to influence their actions." - John Hancock.`
          )
        );
      case 11:
        return dispatch(
          getquoteTitle(
            `"It is the supreme art of the teacher to awaken joy in creative expression and knowledge." - Albert Einstein.`
          )
        );
      default:
        return dispatch(getquoteTitle(" "));
    }
  };
  return (
    <>
      <article className="">
        <hr />
        <section className="grid items-center justify-items-center mt-7 ">
          <h1 className="font-semibold text-2xl">Add my Quote</h1>
          <div className="flex  gap-10 mt-6">
            <ul class="list-none grid gap-2 text-gray-600">
              <button onClick={() => toggleTab(1)}>
                <li className="flex items-center gap-2">
                  {/* <input type="radio" id="contactChoice2" /> */}
                  <div
                    className={
                      toggleState == 1
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Success
                </li>
              </button>
              <button onClick={() => toggleTab(2)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 2
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Motivational
                </li>
              </button>
              <button onClick={() => toggleTab(3)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 3
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  William Shakespeare
                </li>
              </button>
              <button onClick={() => toggleTab(4)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 4
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Science
                </li>
              </button>
              <button onClick={() => toggleTab(5)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 5
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Finance
                </li>
              </button>
            </ul>
            <ul className="list-none grid gap-2 text-gray-600">
              <button onClick={() => toggleTab(7)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 7
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Funny
                </li>
              </button>
              <button onClick={() => toggleTab(8)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 8
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Positive
                </li>
              </button>
              <button onClick={() => toggleTab(9)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 9
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Friendship
                </li>
              </button>
              <button onClick={() => toggleTab(10)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 10
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Business
                </li>
              </button>
              <button onClick={() => toggleTab(11)}>
                <li className="flex items-center gap-2">
                  <div
                    className={
                      toggleState == 11
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  Albert Einstein
                </li>
              </button>
              <button onClick={() => toggleTab(12)}>
                <li className="flex items-center gap-2 text-semibold">
                  <div
                    className={
                      toggleState == 12
                        ? "w-4 h-4 bg-blue-400 rounded-full"
                        : "w-4 h-4 bg-white rounded-full border-2"
                    }
                  ></div>
                  My Own Quotes
                </li>
              </button>
            </ul>
          </div>
          <div className="mt-5 justify-center mb-5">
            {toggleState == 12 ? (
              <textarea
                className="resize-none border-2 rounded-md w-80 h-16 p-1"
                onChange={(e) => dispatch(getquoteTitle(e.target.value))}
              ></textarea>
            ) : (
              ""
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export default Quote;
