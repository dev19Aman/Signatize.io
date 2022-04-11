// import React, { useState } from "react";
// import MainModal from "../../UserBar/MainModal";
// import Footer from "../../Footer/Footer";
// import UpdateSignatureModal from "./UpdateSignatureModal/index";
// import DoneIcon from "@material-ui/icons/Done";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { baseUrl } from "../../../services/BaseUrl";
// import { getTemplateCode, getTemplateId } from "redux/templateSlice";
// import Swal from "sweetalert2";
// import { getToggleIndex } from "redux/toggleSlice";
// import { resetGeneral } from "redux/generalSlice";

// const Index = () => {
//   const dispatch = useDispatch();
//   const [showAlert, setShowAlert] = useState(false);
//   const [showToggle, setShowToggle] = useState(false);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [state, setState] = useState({
//     isPaneOpen: false,
//     isPaneOpenLeft: false,
//   });

//   const [templateCode, setTemplateCode] = useState();
//   const { counter, general, design, social, template } = useSelector(
//     (state) => state
//   );
//   const { Templates, id } = template;
//   const [toggleState, setToggleState] = useState(1);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//   console.log(id);
//   console.log(showToggle);
//   const copyToClip = () => {
//     const { ClipboardItem } = window;
//     let sel,
//       range,
//       el = document.getElementById("template_data"); //get element id
//     if (window.getSelection && document.createRange) {
//       //Browser compatibility
//       let str = el.innerHTML;
//       var type = "text/html";
//       var blob = new Blob([str], { type });
//       var data = [
//         new ClipboardItem({
//           [type]: blob,
//         }),
//       ];
//       navigator.clipboard
//         .write(data)
//         .then(() => {
//           console.log(` was copied to your clipboard.`);
//         })
//         .catch((err) => {
//           console.error(`Error copying text to clipboard: ${err}`);
//         });
//     } else if (document.selection) {
//       //older ie
//       sel = document.selection.createRange();
//       if (sel.text === "") {
//         //no text selection
//         range = document.body.createTextRange(); //Creates TextRange object
//         range.moveToElementText(el); //sets Range
//         range.select();
//         // document.execCommand("copy"); //make selection.
//         navigator.clipboard
//           .writeText(el)
//           .then(() => {
//             console.log(` was copied to your clipboard.`);
//           })
//           .catch((err) => {
//             console.error(`Error copying text to clipboard: ${err}`);
//           });
//       }
//     }
//     setTemplateCode(el);
//     // console.log("templateCode", templateCode);
//     dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
//     setShowAlert(!showAlert);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 1100);
//   };

//   const handleSaveTemplateData = async () => {
//     // copyToClip();
//     // Copy CODE
//     const { ClipboardItem } = window;
//     let sel,
//       range,
//       el = document.getElementById("template_data"); //get element id
//     if (window.getSelection && document.createRange) {
//       //Browser compatibility
//       let str = el.innerHTML;
//       var type = "text/html";
//       var blob = new Blob([str], { type });
//       var data = [
//         new ClipboardItem({
//           [type]: blob,
//         }),
//       ];
//       navigator.clipboard
//         .write(data)
//         .then(() => {
//           console.log(` was copied to your clipboard.`);
//         })
//         .catch((err) => {
//           console.error(`Error copying text to clipboard: ${err}`);
//         });
//     } else if (document.selection) {
//       //older ie
//       sel = document.selection.createRange();
//       if (sel.text === "") {
//         //no text selection
//         range = document.body.createTextRange(); //Creates TextRange object
//         range.moveToElementText(el); //sets Range
//         range.select();
//         // document.execCommand("copy"); //make selection.
//         navigator.clipboard
//           .writeText(el)
//           .then(() => {
//             console.log(` was copied to your clipboard.`);
//           })
//           .catch((err) => {
//             console.error(`Error copying text to clipboard: ${err}`);
//           });
//       }
//     }
//     setTemplateCode(el);
//     // console.log("templateCode", templateCode);
//     dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
//     setShowAlert(!showAlert);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 1100);
//     // Copy CODE end
//     try {
//       await axios
//         .post(baseUrl + "/store_template_detail", {
//           user_id: localStorage.getItem("id"),
//           template_code: new XMLSerializer().serializeToString(el),
//           general,
//           social,
//           design,
//           widget: counter,
//           image: general.images,
//         })
//         .then((res) => {
//           localStorage.setItem("template_id", res.data.template_id);
//           localStorage.setItem(
//             "template_code",
//             new XMLSerializer().serializeToString(templateCode)
//           );
//           try {
//             axios
//               .post(baseUrl + "/image_upload_api", {
//                 id: res.data.template_id,
//                 image: general.images,
//               })
//               .then((res) => console.log(res));
//           } catch (error) {
//             console.log(error);
//           }
//         });
//     } catch (error) {
//       console.log("ERROR", error);
//     }
//   };

//   const handleUpdateTemplateData = async () => {
//     setIsUpdating(true);
//     // copyToClip();
//     // Copy CODE
//     const { ClipboardItem } = window;
//     let sel,
//       range,
//       el = document.getElementById("template_data"); //get element id
//     if (window.getSelection && document.createRange) {
//       //Browser compatibility
//       let str = el.innerHTML;
//       var type = "text/html";
//       var blob = new Blob([str], { type });
//       var data = [
//         new ClipboardItem({
//           [type]: blob,
//         }),
//       ];
//       navigator.clipboard
//         .write(data)
//         .then(() => {
//           console.log(` was copied to your clipboard.`);
//         })
//         .catch((err) => {
//           console.error(`Error copying text to clipboard: ${err}`);
//         });
//     } else if (document.selection) {
//       //older ie
//       sel = document.selection.createRange();
//       if (sel.text === "") {
//         //no text selection
//         range = document.body.createTextRange(); //Creates TextRange object
//         range.moveToElementText(el); //sets Range
//         range.select();
//         // document.execCommand("copy"); //make selection.
//         navigator.clipboard
//           .writeText(el)
//           .then(() => {
//             console.log(` was copied to your clipboard.`);
//           })
//           .catch((err) => {
//             console.error(`Error copying text to clipboard: ${err}`);
//           });
//       }
//     }
//     setTemplateCode(el);
//     // console.log("templateCode", templateCode);
//     dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
//     setShowAlert(!showAlert);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 1100);
//     // Copy CODE end
//     try {
//       await axios
//         .post(baseUrl + "/update_template_detail", {
//           user_id: localStorage.getItem("id"),
//           id,
//           template_code: new XMLSerializer().serializeToString(el),
//           general,
//           social,
//           design,
//           widget: counter,
//           image: general.images,
//         })
//         .then((res) => {
//           setIsUpdating(false);
//           if (res.data.status === 200) {
//             Swal.fire(
//               "Updated!",
//               "Your Signature has been updated.",
//               "success"
//             );
//             dispatch(resetGeneral());
//             dispatch(getTemplateId(""));
//             dispatch(getToggleIndex(1));
//           } else {
//             console.log("not done");
//           }
//           // window.location.reload();
//           localStorage.setItem("template_id", res.data.template_id);
//           localStorage.setItem("template_code", res.data.template_code);
//         });
//     } catch (error) {
//       setIsUpdating(false);
//       console.log(error);
//     }
//   };

//   const installTemplate = async () => {
//     axios
//       .post(baseUrl + "/template_install", {
//         user_id: localStorage.getItem("id"),
//         template_code: localStorage.getItem("template_code"),
//         template_id: 0, //localStorage.getItem("template_id"),
//       })
//       .then((res) => console.log("Template Add. "));
//   };

//   return (
//     <>
//       <main className="mt-2 bg-gray-200 md:flex-row flex-col gap-3 lg:gap-6 flex animate__animated animate__fadeInRight animate__faster ">
//         <MainModal />
//         <div className="md:w-3/5 w-11/12 mx-auto md:ml-12 md:mt-8 mb-4">
//           <div className="px-2 bg-white rounded-lg" id="template_data">
//             <div className=" w-full h-72 overflow-y-auto">
//               {Templates ? <Templates /> : "Loading..."}
//             </div>
//           </div>
//           <div>
//             <UpdateSignatureModal
//               toggleTab={toggleTab}
//               state={state}
//               setState={setState}
//               toggleState={toggleState}
//             />
//           </div>

//           <section>
//             {showAlert ? (
//               <div className="alert alert-success w-1/4 absolute top-0 right-5 h-3">
//                 <div className="flex-1">
//                   <DoneIcon />
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                   ></path>
//                   <label>Copied to Clipboard Successfully</label>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {id ? (
//                   <button
//                     className="bg-primary mr-2 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg float-right text-sm mt-4 "
//                     onClick={function () {
//                       handleUpdateTemplateData();
//                       installTemplate();
//                     }}
//                   >
//                     {isUpdating ? "Updating" : " Update Signature"}
//                   </button>
//                 ) : showToggle ? (
//                   <div></div>
//                 ) : (
//                   <button
//                     className="bg-primary mr-2 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg float-right text-sm mt-4 "
//                     onClick={function () {
//                       // dispatch(getPanelOpen(true));
//                       // setState({ isPaneOpen: true });
//                       // handleSaveTemplate();
//                       handleSaveTemplateData();
//                       installTemplate();
//                       setShowToggle(true);
//                     }}
//                   >
//                     Save Signature
//                   </button>
//                 )}
//                 {showToggle ? (
//                   <div>
//                     <button
//                       onClick={function () {
//                         installTemplate();
//                         setState({ isPaneOpen: true });
//                       }}
//                       className=" float-right mt-4 inline-block mr-2 px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out hover:shadow-lg hover:bg-yellow-600 hover:rounded-full rounded-md cursor-pointer bg-warning"
//                     >
//                       Install Signature
//                     </button>
//                     <button
//                       onClick={copyToClip}
//                       className=" float-right mt-4 inline-block mr-2 px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out hover:shadow-lg hover:bg-blue-600 hover:rounded-full rounded-md cursor-pointer bg-secondary "
//                     >
//                       Copy to Clipboard
//                     </button>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//               </div>
//             )}
//           </section>
//         </div>
//       </main>
//       <footer className="w-full ">
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default Index;

import React, { useState } from "react";
import MainModal from "../../UserBar/MainModal";
import Footer from "../../Footer/Footer";
import UpdateSignatureModal from "./UpdateSignatureModal/index";
import DoneIcon from "@material-ui/icons/Done";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../services/BaseUrl";
import { getTemplateCode, getTemplateId } from "redux/templateSlice";
import Swal from "sweetalert2";
import { getToggleIndex } from "redux/toggleSlice";
import { resetGeneral } from "redux/generalSlice";
import { getUpdateTemplateData } from "redux/templateSlice";

const Index = ({ showSaveButton, setShowSaveButton }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [saveSignatureMessage, setSaveSignatureMessage] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const saveSignatureButton = useSelector((state) => state.saveSignatureButton);
  const [templateCode, setTemplateCode] = useState();
  const { counter, general, design, social, template } = useSelector(
    (state) => state
  );
  const { Templates, id } = template;
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // console.log(id);
  // console.log(showToggle);
  console.log(showSaveButton);
  console.log(id);
  const copyToClip = () => {
    const { ClipboardItem } = window;
    let sel,
      range,
      el = document.getElementById("template_data"); //get element id
    if (window.getSelection && document.createRange) {
      //Browser compatibility
      let str = el.innerHTML;
      var type = "text/html";
      var blob = new Blob([str], { type });
      var data = [
        new ClipboardItem({
          [type]: blob,
        }),
      ];
      navigator.clipboard
        .write(data)
        .then(() => {
          console.log(` was copied to your clipboard.`);
        })
        .catch((err) => {
          console.error(`Error copying text to clipboard: ${err}`);
        });
    } else if (document.selection) {
      //older ie
      sel = document.selection.createRange();
      if (sel.text === "") {
        //no text selection
        range = document.body.createTextRange(); //Creates TextRange object
        range.moveToElementText(el); //sets Range
        range.select();
        // document.execCommand("copy"); //make selection.
        navigator.clipboard
          .writeText(el)
          .then(() => {
            console.log(` was copied to your clipboard.`);
          })
          .catch((err) => {
            console.error(`Error copying text to clipboard: ${err}`);
          });
      }
    }
    setTemplateCode(el);
    // console.log("templateCode", templateCode);
    dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
    setShowAlert(!showAlert);
    setTimeout(() => {
      setShowAlert(false);
    }, 1100);
  };

  const handleSaveTemplateData = async () => {
    // copyToClip();
    // Copy CODE
    const { ClipboardItem } = window;
    let sel,
      range,
      el = document.getElementById("template_data"); //get element id
    if (window.getSelection && document.createRange) {
      //Browser compatibility
      let str = el.innerHTML;
      var type = "text/html";
      var blob = new Blob([str], { type });
      var data = [
        new ClipboardItem({
          [type]: blob,
        }),
      ];
      navigator.clipboard
        .write(data)
        .then(() => {
          console.log(` was copied to your clipboard.`);
        })
        .catch((err) => {
          console.error(`Error copying text to clipboard: ${err}`);
        });
    } else if (document.selection) {
      //older ie
      sel = document.selection.createRange();
      if (sel.text === "") {
        //no text selection
        range = document.body.createTextRange(); //Creates TextRange object
        range.moveToElementText(el); //sets Range
        range.select();
        // document.execCommand("copy"); //make selection.
        navigator.clipboard
          .writeText(el)
          .then(() => {
            console.log(` was copied to your clipboard.`);
          })
          .catch((err) => {
            console.error(`Error copying text to clipboard: ${err}`);
          });
      }
    }
    setTemplateCode(el);
    // console.log("templateCode", templateCode);
    dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
    setSaveSignatureMessage(!saveSignatureMessage);
    setTimeout(() => {
      setSaveSignatureMessage(false);
    }, 1100);
    // Copy CODE end
    try {
      await axios
        .post(baseUrl + "/store_template_detail", {
          user_id: localStorage.getItem("id"),
          template_code: new XMLSerializer().serializeToString(el),
          general,
          social,
          design,
          widget: counter,
          image: general.images,
        })
        .then((res) => {
          localStorage.setItem("template_id", res.data.template_id);
          localStorage.setItem(
            "template_code",
            new XMLSerializer().serializeToString(templateCode)
          );
          try {
            axios
              .post(baseUrl + "/image_upload_api", {
                id: res.data.template_id,
                image: general.images,
              })
              .then((res) => console.log(res));
          } catch (error) {
            console.log(error);
          }
        });
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleUpdateTemplateData = async () => {
    setIsUpdating(true);
    // copyToClip();
    // Copy CODE
    const { ClipboardItem } = window;
    let sel,
      range,
      el = document.getElementById("template_data"); //get element id
    if (window.getSelection && document.createRange) {
      //Browser compatibility
      let str = el.innerHTML;
      var type = "text/html";
      var blob = new Blob([str], { type });
      var data = [
        new ClipboardItem({
          [type]: blob,
        }),
      ];
      navigator.clipboard
        .write(data)
        .then(() => {
          console.log(` was copied to your clipboard.`);
        })
        .catch((err) => {
          console.error(`Error copying text to clipboard: ${err}`);
        });
    } else if (document.selection) {
      //older ie
      sel = document.selection.createRange();
      if (sel.text === "") {
        //no text selection
        range = document.body.createTextRange(); //Creates TextRange object
        range.moveToElementText(el); //sets Range
        range.select();
        // document.execCommand("copy"); //make selection.
        navigator.clipboard
          .writeText(el)
          .then(() => {
            console.log(` was copied to your clipboard.`);
          })
          .catch((err) => {
            console.error(`Error copying text to clipboard: ${err}`);
          });
      }
    }
    setTemplateCode(el);
    // console.log("templateCode", templateCode);
    dispatch(getTemplateCode(new XMLSerializer().serializeToString(el)));
    setSaveSignatureMessage(!saveSignatureMessage);
    setTimeout(() => {
      setSaveSignatureMessage(false);
    }, 1100);
    // Copy CODE end
    try {
      await axios
        .post(baseUrl + "/update_template_detail", {
          user_id: localStorage.getItem("id"),
          id,
          template_code: new XMLSerializer().serializeToString(el),
          general,
          social,
          design,
          widget: counter,
          image: general.images,
        })
        .then((res) => {
          setIsUpdating(false);
          if (res.data.status === 200) {
            Swal.fire(
              "Updated!",
              "Your Signature has been updated.",
              "success"
            );
            dispatch(resetGeneral());
            dispatch(getTemplateId(""));
            dispatch(getToggleIndex(1));
          } else {
            console.log("not done");
          }
          // window.location.reload();
          localStorage.setItem("template_id", res.data.template_id);
          localStorage.setItem("template_code", res.data.template_code);
        });
    } catch (error) {
      setIsUpdating(false);
      console.log(error);
    }
  };

  const installTemplate = async () => {
    axios
      .post(baseUrl + "/template_install", {
        user_id: localStorage.getItem("id"),
        template_code: localStorage.getItem("template_code"),
        template_id: 0, //localStorage.getItem("template_id"),
      })
      .then((res) => console.log("Template Add. "));
  };

  return (
    <>
      <main className="mt-2 bg-gray-200 md:flex-row flex-col gap-3 lg:gap-6 flex animate__animated animate__fadeInRight animate__faster ">
        <MainModal />
        <div className=" sm:w-4/5 md:w-3/6 w-11/12 mx-auto md:ml-20 md:mt-8 mb-4">
          <div className="px-2 bg-white rounded-lg" id="template_data">
            <div className=" w-full h-72 overflow-y-auto">
              {Templates ? <Templates /> : "Loading..."}
            </div>
          </div>
          <div>
            <UpdateSignatureModal
              toggleTab={toggleTab}
              state={state}
              setState={setState}
              toggleState={toggleState}
            />
          </div>

          <section>
            {showAlert ? (
              <div className="alert alert-success w-1/4 absolute top-0 right-5 h-3">
                <div className="flex-1">
                  <DoneIcon />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                  <label>Copied to Clipboard Successfully</label>
                </div>
              </div>
            ) : saveSignatureMessage ? (
              <div className="alert alert-success w-1/4 absolute top-0 right-5 h-3">
                <div className="flex-1">
                  <DoneIcon />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                  <label>Save Sucessfully</label>
                </div>
              </div>
            ) : (
              <div>
                {id && localStorage.getItem("template_id") ? (
                  <button
                    className="bg-primary mr-2 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg float-right text-sm mt-4 "
                    onClick={function () {
                      handleUpdateTemplateData();
                      installTemplate();
                    }}
                  >
                    {isUpdating ? "Updating" : "Update Signature"}
                  </button>
                ) : showSaveButton ? (
                  <div></div>
                ) : (
                  <button
                    className="bg-primary mr-2 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg float-right text-sm mt-4 "
                    onClick={function () {
                      // dispatch(getPanelOpen(true));
                      // setState({ isPaneOpen: true });
                      // handleSaveTemplate();
                      handleSaveTemplateData();
                      installTemplate();
                      setShowSaveButton(true);
                      dispatch(getUpdateTemplateData(true));
                    }}
                  >
                    Save Signature
                  </button>
                )}
                {showSaveButton ? (
                  <div>
                    <button
                      onClick={function () {
                        installTemplate();
                        setState({ isPaneOpen: true });
                      }}
                      className=" float-right mt-4 inline-block mr-2 px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out hover:shadow-lg hover:bg-yellow-600 hover:rounded-full rounded-md cursor-pointer bg-warning"
                    >
                      Install Signature
                    </button>
                    <button
                      onClick={copyToClip}
                      className="float-right mt-4 inline-block mr-2 px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out hover:shadow-lg hover:bg-blue-600 hover:rounded-full rounded-md cursor-pointer bg-secondary "
                    >
                      Copy to Clipboard
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      <footer className="w-full ">
        <Footer />
      </footer>
    </>
  );
};

export default Index;
