import React, { Component, useEffect, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { AiFillPlayCircle } from "react-icons/ai";
import image1 from "./Images/email-gmail.svg";
import image2 from "./Images/email-outlook.svg";
import image3 from "./Images/apple-mail.a181519a.png";
import image4 from "./Images/yahoo.52369ce7.png";
import image5 from "./Images/thunderbird.2c524a9e.png";
import image6 from "./Images/source.e80845c4.png";
import { baseUrl } from "services/BaseUrl";
import { FcGoogle } from "react-icons/fc";
import { AiFillChrome } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";
import Template1 from "../AllTemplates/Template1";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import Loading from "Pages/Login/Loading";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "redux/toggleSlice";

const isExtensionActive = localStorage.getItem("extension_active");

const Index = ({ toggleTab, state, toggleState, setState }) => {
  const [chromeExtension, setChromeExtension] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const { templateCode } = useSelector((state) => state.template);

  const dispatch = useDispatch();

  useEffect(() => {
    verifyBrowser();
    if (accessToken === null) {
      setAccessToken(localStorage.getItem("access_token"));
    }
  }, [toggleTab]);

  console.log(isExtensionActive);

  const verifyBrowser = () => {
    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
      setChromeExtension("Opera");
      // setbrowser()
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      setChromeExtension("Chrome");
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      setChromeExtension("Safari");
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      setChromeExtension("Firefox");
    } else if (
      navigator.userAgent.indexOf("MSIE") != -1 ||
      !!document.documentMode == true
    ) {
      //IF IE > 10
      setChromeExtension("IE");
    } else {
      setChromeExtension("unknown");
    }
  };

  const responseGoogle = async (response) => {
    console.log(response);
    setIsLoading(true);
    try {
      await axios
        .post(baseUrl + "/sociallogin", {
          name: response.profileObj.givenName,
          email: response.profileObj.email,
          access_token: response.accessToken,
          provider_id: response.googleId,
          type: "gmail",
        })
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("access_token", res.data.data.access_token);
            localStorage.setItem("email", res.data.data.email);
            dispatch(getAccessToken(res.data.data.access_token));
            setIsLoading(false);
          } else {
            Swal.fire(
              "Semething Went Wrong?",
              "That thing is still around?",
              "question"
            );
          }
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const installTemplate = async () => {
    axios
      .post(baseUrl + "/template_install", {
        user_id: localStorage.getItem("id"),
        template_code: localStorage.getItem("template_code"),
        template_id: 0,
      })
      .then((res) => console.log("Template Add. "));
  };

  return (
    <SlidingPane
      width="53rem"
      className="sm:w-52 mt-28"
      overlayClassName=""
      isOpen={state.isPaneOpen === true}
      title={<h1 className="text-xl font-bold">Add to your Email</h1>}
      // subtitle="<h1>"
      onRequestClose={() => {
        // triggered on "<" on left top click or on outside click
        setState({ isPanelOpen: false });
      }}
    >
      <main className="">
        <div className="flex ">
          <div className="w-72 bg-gray-200 py-2 ">
            {/* TAB LISTS */}
            <section className="grid gap-1 ">
              <button
                className={
                  toggleState === 1
                    ? "font-semibold py-2 px-3 inline-flex items-center text-white gap-2 bg-primary w-full"
                    : "font-semibold py-2 px-3 inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                }
                onClick={() => toggleTab(1)}
              >
                <img src={image1} alt="" width="24" />
                <span className="text-">Gmail</span>
              </button>
              <button
                className={
                  toggleState === 2
                    ? "font-semibold py-2 px-3  inline-flex items-center gap-2 text-white bg-primary w-full "
                    : "font-semibold py-2 px-3  inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                }
                onClick={() => toggleTab(2)}
              >
                <img src={image2} alt="" width="24" />
                <span className="text-">Outlook</span>
              </button>

              <div className="w-full">
                <button
                  className={
                    toggleState === 3
                      ? "font-semibold py-2 px-3  inline-flex items-center gap-2 text-white bg-primary w-full"
                      : "font-semibold py-2 px-3  inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                  }
                  onClick={() => toggleTab(3)}
                >
                  <img src={image4} alt="" width="24" />
                  <span className="text-">Yahoo</span>
                </button>
              </div>
              <div className="w-full">
                <button
                  className={
                    toggleState === 5
                      ? "font-semibold py-2 px-3  inline-flex items-center gap-2 text-white bg-primary w-full"
                      : "font-semibold py-2 px-3  inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                  }
                  onClick={() => toggleTab(5)}
                >
                  <img src={image5} alt="" width="24" />
                  <span className="text-">Thunderbird</span>
                </button>
              </div>
              <div className="w-full">
                <button
                  className={
                    toggleState === 6
                      ? "font-semibold py-2 px-3 inline-flex items-center gap-2 text-white bg-primary w-full"
                      : "font-semibold py-2 px-3 inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                  }
                  onClick={() => toggleTab(6)}
                >
                  <img src={image3} alt="" width="24" />
                  <span className="text-">iPhone / iPad</span>
                </button>
              </div>
              <div className="w-full">
                <button
                  className={
                    toggleState === 4
                      ? "font-semibold py-2 px-3  inline-flex items-center gap-2 text-white bg-primary w-full "
                      : "font-semibold py-2 px-3  inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                  }
                  onClick={() => toggleTab(4)}
                >
                  <img src={image3} alt="" width="24" />
                  <span className="text-">Apple mail</span>
                </button>
              </div>
              <div className="w-full">
                <button
                  className={
                    toggleState === 7
                      ? "font-semibold py-2 px-3  inline-flex items-center gap-2 text-white bg-primary w-full"
                      : "font-semibold py-2 px-3  inline-flex gap-2 items-center hover:text-white hover:bg-primary w-full transition duration-100 ease-in-out  transform hover:-translate-x-1 hover:scale-100  hover:shadow-2xl"
                  }
                  onClick={() => toggleTab(7)}
                >
                  <img src={image6} alt="" width="24" />
                  <span className="text-">Source code</span>
                </button>
              </div>
            </section>
          </div>

          <div className=" w-full shadow-2xl" style={{ height: "93vh" }}>
            {/* TAB PANELS */}
            {toggleState === 1 ? (
              <>
                {chromeExtension === "Chrome" ? (
                  <main className="animate__animated animate__fadeInRight animate__faster">
                    <section className="grid mt-10 gap-7 w-11/12 mx-auto justify-center align-middle ">
                      {accessToken ? (
                        <div>
                          <div className=" text-md 2xl:text-lg font-bold text-center">
                            Your Gmail Signatize is Ready.
                          </div>
                          <div className="text-sm 2xl:text-md mt-2 text-center">
                            It is assigned to{" "}
                            <span className="text-green-600 font-semibold">
                              {localStorage.getItem("email")}
                            </span>
                          </div>
                          <div>
                            <button
                              className="hover:bg-blue-800 mt-4 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg inline-flex gap-3 items-center w-full transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                              onClick={function () {
                                window
                                  .open("https://mail.google.com", "_blank")
                                  .focus();
                                installTemplate();
                              }}
                            >
                              <div className="w-10/12 mx-auto">
                                Refresh Your Gmail
                              </div>
                            </button>

                            <button
                              className="hover:bg-blue-800 mt-4 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg inline-flex gap-3 items-center w-full transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                              onClick={() =>
                                localStorage.removeItem("accessToken")
                              }
                            >
                              <div className="w-10/12 mx-auto">Logout!</div>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h1 className="text-md 2xl:text-lg font-bold text-center">
                            To start using your Signatize,please connect:
                          </h1>
                          <div className="w-10/12 mx-auto mt-4">
                            <GoogleLogin
                              clientId="527293201370-ekkp40d3btmq4av1pr6oqejj9spelefp.apps.googleusercontent.com"
                              render={(renderProps) => (
                                <button
                                  className="hover:bg-blue-800 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg inline-flex gap-3 items-center w-full transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                >
                                  {isLoading ? (
                                    <div className="w-16 mx-auto ">
                                      <Loading
                                        type="ThreeDots"
                                        color="#fff"
                                        width={60}
                                        height={24}
                                      />
                                    </div>
                                  ) : (
                                    <div className="w-full flex flex-row justify-center items-center ">
                                      <div
                                        className="bg-white rounded-sm w-6 h-6"
                                        style={{ paddingTop: 2 }}
                                      >
                                        <FcGoogle className="text-xl mx-auto" />
                                      </div>
                                      <span className="2xl:text-lg ml-2 text-sm font-semibold">
                                        Signin with Google
                                      </span>
                                    </div>
                                  )}
                                </button>
                              )}
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={"single_host_origin"}
                            />
                          </div>
                        </div>
                      )}
                    </section>

                    <section className="ml-4">{/* <Template1 /> */}</section>
                  </main>
                ) : (
                  <main className="animate__animated animate__fadeInRight animate__faster">
                    <section className="grid mt-10 gap-7  justify-center align-middle">
                      <h1 className="text-lg  font-bold">
                        Your Outlook.com email Signatize is almost ready
                      </h1>
                      <div class="  font-bold py-2 px-6 rounded inline-flex gap-2 items-center w-60 ml-24">
                        <AiFillCompass fontSize="42" />
                        <AiOutlineArrowRight fontSize="30" />
                        <AiFillChrome fontSize="42" />
                      </div>
                      <div className="font-bold text-sm">
                        <p>
                          Our Gmail extension is currently supported on Chrome
                          only.
                        </p>
                        <p>
                          Please No
                          <span
                            class="text-green-600 cursor-pointer hover:bg-yellow-300"
                            onClick={() =>
                              window
                                .open(
                                  "https://signatize.io/extension/extension_new.zip",
                                  "_blank"
                                )
                                .focus()
                            }
                          >
                            &nbsp; add our Chrome extension, &nbsp;
                          </span>
                          and browser your Outlook.com
                        </p>
                        <p>email on Chrome.</p>
                      </div>
                    </section>

                    <section className="ml-4">
                      <Template1 />
                    </section>
                  </main>
                )}
              </>
            ) : null}

            {toggleState === 2 ? (
              <section className="grid mt-10 gap-7  justify-center align-middle animate__animated animate__fadeInRight animate__faster">
                {isExtensionActive ? (
                  <div>
                    <div className="text-md 2xl:text-lg font-bold text-center">
                      Your Outlook Signatize is Ready.
                    </div>
                    <button
                      class="hover:bg-blue-800 mt-4 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg inline-flex gap-3 items-center w-full transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                      onClick={function () {
                        window
                          .open("https://outlook.live.com/mail", "_blank")
                          .focus();
                        installTemplate();
                      }}
                    >
                      <div className="w-10/12 mx-auto">
                        Refresh Your Outlook
                      </div>
                    </button>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-lg  font-bold">
                      Your Outlook.com email Signatize is almost ready
                    </h1>
                    <div class="  font-bold py-2 px-6 rounded inline-flex gap-2 items-center w-60 ml-24">
                      <AiFillCompass fontSize="42" />
                      <AiOutlineArrowRight fontSize="30" />
                      <AiFillChrome fontSize="42" />
                    </div>
                    <div className="font-bold text-sm">
                      <p>
                        Our Outlook extension is currently supported on Chrome
                        only.
                      </p>
                      <p>
                        Please
                        <span
                          class="text-green-600 cursor-pointer hover:bg-yellow-300"
                          onClick={() =>
                            window
                              .open(
                                "https://signatize.io/extension/extension_new.zip",
                                "_blank"
                              )
                              .focus()
                          }
                        >
                          &nbsp; add our Chrome extension, &nbsp;
                        </span>
                        and browser your Outlook.com{" "}
                      </p>
                      <p>email on Chrome.</p>
                    </div>
                  </div>
                )}
              </section>
            ) : null}

            {toggleState === 3 ? (
              <section className="grid mt-10 gap-7  justify-center align-middle animate__animated animate__fadeInRight animate__faster">
                {isExtensionActive ? (
                  <div>
                    <div className="text-md 2xl:text-lg font-bold text-center">
                      Your Yahoo Signatize is Ready.
                    </div>
                    <button
                      class="hover:bg-blue-800 mt-4 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg inline-flex gap-3 items-center w-full transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                      onClick={function () {
                        window
                          .open("https://mail.yahoo.com/d/", "_blank")
                          .focus();
                        installTemplate();
                      }}
                    >
                      <div className="w-10/12 mx-auto">Refresh Your Yahoo</div>
                    </button>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-lg  font-bold">
                      Your Yahoo.com email Signatize is almost ready
                    </h1>
                    <div class="  font-bold py-2 px-6 rounded inline-flex gap-2 items-center w-60 ml-24">
                      <AiFillCompass fontSize="42" />
                      <AiOutlineArrowRight fontSize="30" />
                      <AiFillChrome fontSize="42" />
                    </div>
                    <div className="font-bold text-sm">
                      <p>
                        Our Yahoo extension is currently supported on Chrome
                        only.
                      </p>
                      <p>
                        Please
                        <span
                          className="text-green-600 cursor-pointer hover:bg-yellow-300"
                          onClick={() =>
                            window
                              .open(
                                "https://signatize.io/extension/extension_new.zip",
                                "_blank"
                              )
                              .focus()
                          }
                        >
                          &nbsp; add our Chrome extension, &nbsp;
                        </span>
                        and browser your Outlook.com{" "}
                      </p>
                      <p>email on Chrome.</p>
                    </div>
                  </div>
                )}
              </section>
            ) : null}
            {toggleState === 4 ? (
              <section className="grid mt-10 ml-6  gap-4 animate__animated animate__fadeInRight animate__faster">
                <button className="text-xl text-green-600 flex items-center">
                  <AiFillPlayCircle />
                  <h1 className="font-bold ml-1">
                    <a
                      href="https://www.youtube.com/watch?v=at-ZDlnm0iY"
                      target="_blank"
                    >
                      Video
                    </a>
                  </h1>
                </button>
                <div className="xl:text-sm 2xl:text-md">
                  <p>
                    1. Generate an email Signatize using{" "}
                    <span className="font-bold"> Signatize </span> editor.
                  </p>
                  <p>
                    2. Click on{" "}
                    <span className="font-bold">Copy to clipboard </span>button.
                  </p>
                  <p>
                    3. In Apple Mail Click on{" "}
                    <span className="text-green-600">Preferences</span>{" "}
                    mac-command (or{" "}
                    <span className="text-green-600">
                      Choose Mail {">"} Preferences {">"} Signatizes).
                    </span>
                  </p>
                  <p className="mt-4">
                    Choose <span className="text-green-600">Google </span>to add
                    the Signatize to all accounts OR choose a specific account.
                    Click the + icon to add a new Signatize and give it a name.
                  </p>
                  <p>
                    4.Uncheck the box{" "}
                    <span className="font-bold">
                      {" "}
                      “Always match my default message font”.
                    </span>{" "}
                    Paste your Signatize into the{" "}
                    <span className="font-bold">
                      {" "}
                      Edit Signatize box (Ctrl+V or Command+V).
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="font-bold">Important: </span>
                    <p className="mt-6">
                      When you Paste your Signatize, it may look like a blank
                      image with wrong text. It's OK. Compose a new email to see
                      your new Signatize.
                    </p>
                  </p>
                  <p className="mt-4">
                    Use Chrome or Mozilla browser when you click{" "}
                    <span className="text-green-600">"copy to clipboard"</span>{" "}
                    button to keep right formatting.
                  </p>
                  <p className="mt-5">
                    Full Installation{" "}
                    <a
                      className="text-green-600"
                      href="https://support.apple.com/en-in/guide/mail/mlhlp1017/mac"
                      target="_blank"
                    >
                      guide for Mac Mail
                    </a>
                  </p>
                </div>
              </section>
            ) : null}

            {toggleState === 5 ? (
              <section className="grid gap-4 ml-6 mt-10 animate__animated animate__fadeInRight animate__faster">
                <button className="text-xl text-green-600 flex items-center">
                  <AiFillPlayCircle />
                  <h1 className=" font-bold ml-1">
                    <a
                      href="https://www.youtube.com/watch?v=at-ZDlnm0iY"
                      target="_blank"
                    >
                      Video
                    </a>
                  </h1>
                </button>
                <div className=" font-semibold xl:text-sm 2xl:text-md">
                  <p>
                    1. Generate an email Signatize using{" "}
                    <span className="font-bold"> Signatize </span> editor.
                  </p>
                  <p>
                    2. Copy HTML code from{" "}
                    <span className="font-bold">"Source code" </span> section.
                  </p>
                  <p>
                    3. Within Thunderbird click{" "}
                    <span className="text-green-600">
                      Tools {"> "} Account Settings,
                    </span>{" "}
                    and then, in the left panel, select the account for which
                    you want to create a Signatize.
                  </p>
                  <p>
                    4. Check the "Use HTML" option and{" "}
                    <span className="text-green-600">Paste</span> your Signatize
                    (Ctrl+V or Command+V).
                  </p>

                  <p className="mt-5">
                    Full Installation{" "}
                    <span className="text-green-600">
                      {" "}
                      <a
                        href="https://support.tigertech.net/thunderbird-manual"
                        target="_blank"
                      >
                        guide for Thunderbird
                      </a>
                    </span>
                  </p>
                </div>
              </section>
            ) : null}

            {toggleState === 6 ? (
              <section className="grid mt-10 ml-6 gap-4 animate__animated animate__fadeInRight animate__faster">
                <button className="text-xl text-green-600 flex items-center">
                  <AiFillPlayCircle />
                  <h1 className="font-bold ml-1">
                    <a
                      href="https://www.youtube.com/watch?v=at-ZDlnm0iY"
                      target="_blank"
                    >
                      Video
                    </a>
                  </h1>
                </button>
                <div className="font-semibold xl:text-sm 2xl:text-md">
                  <p>
                    1. Generate an email Signatize using{" "}
                    <span className="font-bold"> Signatize </span> editor.
                  </p>
                  <p>2.Open Signatize preview link on your iPhone/iPad.</p>
                  <p>
                    3. Tap on{" "}
                    <span className="font-bold"> Copy to clipboard </span>
                    button.
                  </p>
                  <p>
                    4. Go to your <span className="font-bold"> Settings </span>
                    on your iPhone/iPad {">"} Mail {">"} Signatize.
                  </p>
                  <p>
                    5.
                    <span className="font-bold"> Paste </span>
                    your rich HTML Signatize. When you paste in the copied
                    Signatize iOS will <br />
                    automatically strip it of formatting.
                  </p>
                  <p>
                    6.Physically
                    <span className="font-bold"> shake your iPhone/iPad</span>
                    to drop default styling of the iPhone/iPad.
                  </p>
                  <p>
                    7.Tap
                    <span className="font-bold"> Undo.</span>
                  </p>
                  <p>
                    8.You should see your new Signatize when you compose a new
                    message on your iPhone/iPad now. Go back to the Mail app and
                    try sending an email from the account that you installed the
                    Signatize on.
                  </p>
                  <p className="mt-5">
                    Full Installation{" "}
                    <span className="text-green-600">
                      {" "}
                      <a
                        href="https://support.apple.com/en-in/guide/icloud/welcome/icloud"
                        target="_blank"
                      >
                        guide for iPhone/iPad
                      </a>
                    </span>
                  </p>
                  <p className="">
                    Full Installation{" "}
                    <span className="text-green-600">
                      {" "}
                      <a
                        href="https://support.apple.com/en-in/HT201320"
                        target="_blank"
                      >
                        guide for Gmail on iPhone
                      </a>
                    </span>
                  </p>
                  <p className="">
                    Full Installation{" "}
                    <span className="text-green-600">
                      {" "}
                      <a
                        href="https://support.apple.com/en-in/HT201320"
                        target="_blank"
                      >
                        guide for Outlook on iPhone
                      </a>
                    </span>
                  </p>
                </div>
              </section>
            ) : null}

            {toggleState === 7 ? (
              <section className="grid mt-10 ml-6 gap-4 justify-center animate__animated animate__fadeInRight animate__faster">
                <p className="text-gray-600 font-semibold">
                  Some email clients need email Signatizes as an HTML file or
                  source code.
                </p>
                <div
                  className=" overflow-y-auto bg-blue-50 border border-gray-600 rounded-lg"
                  style={{ height: "200px" }}
                >
                  <div className=" mt-5 text-xs mb-6 font-semibold px-4">
                    <p>{templateCode.slice(94, -12)}</p>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </main>
    </SlidingPane>
  );
};
export default Index;
