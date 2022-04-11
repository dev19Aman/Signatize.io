// import React, { useState, useEffect } from "react";
// import Footer from "../../Footer/Footer";
// import axios from "axios";
// import { baseUrl } from "../../../services/BaseUrl";
// import Loading from "Pages/Login/Loading";
// import { CgTemplate } from "react-icons/cg";
// import UpdateSignatureModal from "../CreateSignature/UpdateSignatureModal/index";
// import NotFound from "../../../Images/not-found.png";
// import Pagination from "Component/Pagination/Pagination";
// import { useDispatch } from "react-redux";
// import {
//   getName,
//   resetGeneral,
//   getCompany,
//   getPosition,
//   getPhonenumber,
//   getMobilenumber,
//   getWebsite,
//   getEmail,
//   getImages,
//   getAddress,
// } from "redux/generalSlice";

// import { getChartdata } from "redux/ChartSlice";

// import {
//   getFacebooklinks,
//   getTwitterlinks,
//   getLinkedInLink,
//   getInstalinks,
//   getStackoverflowlinks,
//   getYoutubelink,
// } from "redux/socialSlice";

// import {
//   ResponsiveContainer,
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import Swal from "sweetalert2";
// import {
//   getSingleTemplate,
//   getTemplateFromApi,
//   getTemplateId,
// } from "redux/templateSlice";

// import { useSelector } from "react-redux";
// import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
// import Chart from "Component/Chart";

// const TemplateBox = (props) => {
//   const [data, setData] = useState([]);
//   const [activePage, setACtivePage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isCloning, setIsCloning] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [arrayCount, setArrayCount] = useState();
//   // Here you can update how many users you want per page
//   const usersPerPage = 10;

//   const changeActivePage = (p) => {
//     setACtivePage(p);
//   };

//   const lastIndex = activePage * usersPerPage;
//   const firstIndex = lastIndex - usersPerPage;

//   const dispatch = useDispatch();

//   const { toggleIndex } = useSelector((state) => state.toggle);

//   const [state, setState] = useState({
//     isPaneOpen: false,
//     isPaneOpenLeft: false,
//   });
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   const fetchTemplates = () => {
//     axios
//       .post(baseUrl + "/get_template_data", {
//         user_id: localStorage.getItem("id"),
//       })
//       .then(function (res) {
//         if (res.data.status === 200) {
//           setIsError(false);
//           setData(res.data.data);
//           console.log(res.data.data);
//           dispatch(getTemplateFromApi(res.data.data));
//           setArrayCount(res.data.data.length);
//         } else {
//           setIsError(true);
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     if (toggleIndex === 1) {
//       fetchTemplates();
//       dispatch(resetGeneral());
//       localStorage.removeItem("template_id");
//       dispatch(getTemplateId(""));
//     }
//   }, [toggleIndex]);

//   // Template install API
//   const installTemplate = async (template_code) => {
//     axios
//       .post(baseUrl + "/template_install", {
//         user_id: localStorage.getItem("id"),
//         template_code: template_code,
//         template_id: localStorage.getItem("template_id"),
//       })
//       .then((res) => console.log("Template Add."));
//   };

//   const handleDeleteTemplate = async (temp_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         try {
//           axios
//             .post(baseUrl + "/delete_template_data", {
//               user_id: localStorage.getItem("id"),
//               template_id: temp_id,
//             })
//             .then((res) => {
//               if (res.data.status === 200) {
//                 Swal.fire(
//                   "Deleted!",
//                   "Your template has been deleted.",
//                   "success"
//                 );
//                 setIsLoading(false);
//                 fetchTemplates();
//               } else {
//                 Swal.fire(
//                   "Error!",
//                   "Your file has not been deleted.",
//                   "failed"
//                 );
//               }
//             });
//         } catch (error) {
//           setIsLoading(false);
//           console.log("server error", error);
//         }
//       }
//     });
//   };
//   const handleEditTemplate = async (v) => {
//     props.setShowSaveButton(true);
//     dispatch(getTemplateId(v.id));
//     dispatch(getName(v.general.name));
//     dispatch(getCompany(v.general.company));
//     dispatch(getPosition(v.general.position));
//     dispatch(getPhonenumber(v.general.phonenumber));
//     dispatch(getMobilenumber(v.general.mobilenumber));
//     dispatch(getWebsite(v.general.website));
//     dispatch(getEmail(v.general.email));
//     dispatch(getAddress(v.general.email));
//     dispatch(getImages(v.general.images));
//     dispatch(getFacebooklinks(v.social.facebooklinks));
//     dispatch(getTwitterlinks(v.social.twitterlinks));
//     dispatch(getLinkedInLink(v.social.linkedInLinklinks));
//     dispatch(getInstalinks(v.social.instalinks));
//     dispatch(getStackoverflowlinks(v.social.Stackoverflowlinks));
//     dispatch(getYoutubelink(v.social.Youtubelink));
//     props.toggleTab(2);
//     localStorage.setItem("template_id", v.id);
//   };

//   const handleCloneTemplate = async (template) => {
//     setIsCloning(true);
//     dispatch(getSingleTemplate(template));
//     try {
//       await axios
//         .post(baseUrl + "/store_template_detail_clone", {
//           user_id: localStorage.getItem("id"),
//           template_code: template.template_code,
//           general: template.general,
//           social: template.social,
//           design: template.design,
//           widget: template.widget,
//           template_id: template.id,
//           image: template.images,
//         })
//         .then((res) => {
//           if (res.data.status === 200) {
//             Swal.fire("Cloned!", "Template has been cloned.", "success");
//             setIsCloning(false);
//             fetchTemplates();
//           }
//         });
//     } catch (error) {
//       setIsCloning(false);
//       console.log(error);
//     }
//   };

//   const handleClickOpen = async (template_id) => {
//     await axios
//       .post(baseUrl + "/get_stats", {
//         user_id: localStorage.getItem("id"),
//         template_id: template_id,
//       })
//       .then((res) => {
//         dispatch(getChartdata(res.data));
//         setOpen(true);
//       });
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         className="animate__animated animate__fadeInDownBig animate__faster"
//       >
//         <DialogTitle
//           style={{
//             backgroundColor: "#3E51B2",
//             color: "white",
//             textAlign: "center",
//           }}
//         >
//           View Stats
//         </DialogTitle>
//         <DialogContent style={{ minWidth: 600 }}>
//           <div style={{ width: "100%", height: 300 }}>
//             <Chart />
//           </div>
//         </DialogContent>
//       </Dialog>
//       <div>
//         <UpdateSignatureModal
//           toggleTab={toggleTab}
//           state={state}
//           setState={setState}
//           toggleState={toggleState}
//         />
//       </div>
//       <div className="pb-20 w-screen bg-white px-2 overflow-x-hidden">
//         {!isError ? (
//           <main className="w-full h-auto grid grid-cols-1 md:grid-cols-2 mt-4  overflow-x-hidden">
//             {isCloning ? (
//               <div className="absolute w-11/12 mx-auto overflow-x-hidden">
//                 <div className="w-32 mt-40 mx-auto">
//                   <Loading
//                     type="ThreeDots"
//                     width={120}
//                     height={40}
//                     color="#777"
//                   />
//                 </div>
//               </div>
//             ) : data ? (
//               data.slice(firstIndex, lastIndex).map((v, i) => (
//                 <article
//                   className="md:w-full overflow-x-hidden animate__animated animate__fadeInRight animate__faster p-1"
//                   key={i}
//                 >
//                   <div className="w-full shadow-md border border-gray-100 rounded-lg h-60 overflow-x-hidden overflow-y-hidden">
//                     <div
//                       className="shadow-sm my-2 mx-2 overflow-x-hidden"
//                       dangerouslySetInnerHTML={{
//                         __html: v.template_code.slice(94, -12),
//                       }}
//                     />
//                   </div>
//                   <div className="w-full bg-gray-200 shadow-md mt-1 rounded-lg flex flex-row py-1 h-12 bottom-0 justify-end lg:justify-items-start">
//                     <div
//                       className="bg-blue-600 h-8  rounded-xl px-4  text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2 "
//                       onClick={() => handleEditTemplate(v)}
//                     >
//                       Edit{" "}
//                       <span className="hidden sm:inline-block md:hidden xl:inline-block">
//                         Signature
//                       </span>
//                     </div>
//                     <div
//                       className={`${
//                         isLoading ? "bg-white" : "bg-gray-600"
//                       } rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2`}
//                       onClick={() => handleCloneTemplate(v)}
//                     >
//                       Clone{" "}
//                       <span className="hidden sm:inline-block md:hidden xl:inline-block">
//                         Signature
//                       </span>
//                     </div>
//                     <div
//                       className="bg-red-600 h-8  rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2"
//                       onClick={() => handleDeleteTemplate(v.id)}
//                     >
//                       Delete{" "}
//                       <span className="hidden sm:inline-block md:hidden xl:inline-block">
//                         Signature
//                       </span>
//                     </div>

//                     <div className="flex flex-row justify-between mx-2">
//                       <div
//                         className="bg-green-600 h-8 rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
//                         onClick={() => {
//                           installTemplate(v.template_code);
//                           localStorage.setItem(
//                             "template_code",
//                             v.template_code
//                           );
//                           setState({ isPaneOpen: true });
//                         }}
//                       >
//                         Install{" "}
//                         <span className="hidden sm:inline-block md:hidden xl:inline-block">
//                           Signature
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex flex-row justify-between mx-2">
//                       <div
//                         className="bg-green-800 h-8 rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
//                         onClick={() => handleClickOpen(v.id)}
//                       >
//                         View{" "}
//                         <span className="  md:hidden xl:inline-block">
//                           Stats
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))
//             ) : (
//               [...Array(6)].map((v, i) => (
//                 <div className="w-full px-4 py-2" key={i}>
//                   <div className="animate-pulse">
//                     <div className=" flex space-x-4 h-72 rounded-md bg-red-300"></div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </main>
//         ) : (
//           <section className="animate__animated animate__fadeInRight animate__faster">
//             <div className="p-10">
//               <div className="max-w-sm rounded shadow-2xl">
//                 <img
//                   className="w-40 h-40 mx-auto"
//                   src={NotFound}
//                   alt="not found"
//                 />
//                 <div className="px-6 py-4">
//                   <div className="font-bold text-xl mb-2 text-center">
//                     No Template Found....
//                   </div>
//                 </div>
//                 <div className="px-6 pt-4 pb-2 w-10/12 mx-auto">
//                   <button
//                     className="bg-transparent text-center w-11/12 mx-auto shadow-lg hover:bg-primary text-primary hover:text-white border border-primary font-bold py-2 px-12 rounded inline-flex gap-2 items-center mt-6 mb-8"
//                     onClick={() => {
//                       props.toggleTab(2);
//                     }}
//                   >
//                     <CgTemplate />
//                     <span>Create Signature</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//         {arrayCount >= 10 ? (
//           <Pagination
//             data={activePage}
//             pageActive={changeActivePage}
//             pageData={data}
//             userLength={usersPerPage}
//           />
//         ) : (
//           <div></div>
//         )}
//       </div>

//       <footer className="bottom-0 w-full z-10 mt-10">
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default TemplateBox;

import React, { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { baseUrl } from "../../../services/BaseUrl";
import Loading from "Pages/Login/Loading";
import { CgTemplate } from "react-icons/cg";
import UpdateSignatureModal from "../CreateSignature/UpdateSignatureModal/index";
import NotFound from "../../../Images/not-found.png";
import Pagination from "Component/Pagination/Pagination";
import { useDispatch } from "react-redux";
import {
  getName,
  resetGeneral,
  getCompany,
  getPosition,
  getPhonenumber,
  getMobilenumber,
  getWebsite,
  getEmail,
  getImages,
  getAddress,
} from "redux/generalSlice";

import { getChartdata } from "redux/ChartSlice";

import {
  getFacebooklinks,
  getTwitterlinks,
  getLinkedInLink,
  getInstalinks,
  getStackoverflowlinks,
  getYoutubelink,
} from "redux/socialSlice";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Swal from "sweetalert2";
import {
  getSingleTemplate,
  getTemplateFromApi,
  getTemplateId,
} from "redux/templateSlice";

import { useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Chart from "Component/Chart";

const TemplateBox = (props) => {
  const [data, setData] = useState([]);
  const [activePage, setACtivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isCloning, setIsCloning] = useState(false);
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [isdatafetch, setIsdatafetch] = React.useState(false);
  const [arrayCount, setArrayCount] = useState();
  // Here you can update how many users you want per page
  const usersPerPage = 10;

  const changeActivePage = (p) => {
    setACtivePage(p);
  };

  const lastIndex = activePage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  const dispatch = useDispatch();

  const { toggleIndex } = useSelector((state) => state.toggle);
  const { updateTemplateData } = useSelector((state) => state.template);
  // const {updateTemplateData} = useSelector((state)=>state.updateTemplateData)
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // console.log(updateTemplateData);
  const fetchTemplates = () => {
    axios
      .post(baseUrl + "/get_template_data", {
        user_id: localStorage.getItem("id"),
        limit: 10,
      })
      .then(function (res) {
        console.log(res.data);
        if (res.data.status === 200) {
          setIsdatafetch(false);
          setIsError(false);
          setData(res.data.data);
          console.log(res.data.data);
          dispatch(getTemplateFromApi(res.data.data));
          setArrayCount(res.data.data.length);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchTemplates();
    setIsdatafetch(true);
    dispatch(resetGeneral());
    localStorage.removeItem("template_id");
    dispatch(getTemplateId(""));
  }, []);
  useEffect(() => {
    if (updateTemplateData) {
      setIsdatafetch(true);
      fetchTemplates();
      localStorage.removeItem("template_id");
      // dispatch(resetGeneral());
      dispatch(getTemplateId(""));
    }
  }, [updateTemplateData]);
  // Template install API
  const installTemplate = async (template_code) => {
    axios
      .post(baseUrl + "/template_install", {
        user_id: localStorage.getItem("id"),
        template_code: template_code,
        template_id: localStorage.getItem("template_id"),
      })
      .then((res) => console.log("Template Add."));
  };

  const handleDeleteTemplate = async (temp_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .post(baseUrl + "/delete_template_data", {
              user_id: localStorage.getItem("id"),
              template_id: temp_id,
            })
            .then((res) => {
              if (res.data.status === 200) {
                Swal.fire(
                  "Deleted!",
                  "Your template has been deleted.",
                  "success"
                );
                setIsLoading(false);
                fetchTemplates();
              } else {
                Swal.fire(
                  "Error!",
                  "Your file has not been deleted.",
                  "failed"
                );
              }
            });
        } catch (error) {
          setIsLoading(false);
        }
      }
    });
  };
  const handleEditTemplate = async (v) => {
    props.setShowSaveButton(true);
    dispatch(getTemplateId(v.id));
    dispatch(getName(v.general.name));
    dispatch(getCompany(v.general.company));
    dispatch(getPosition(v.general.position));
    dispatch(getPhonenumber(v.general.phonenumber));
    dispatch(getMobilenumber(v.general.mobilenumber));
    dispatch(getWebsite(v.general.website));
    dispatch(getEmail(v.general.email));
    dispatch(getAddress(v.general.email));
    dispatch(getImages(v.general.images));
    dispatch(getFacebooklinks(v.social.facebooklinks));
    dispatch(getTwitterlinks(v.social.twitterlinks));
    dispatch(getLinkedInLink(v.social.linkedInLinklinks));
    dispatch(getInstalinks(v.social.instalinks));
    dispatch(getStackoverflowlinks(v.social.Stackoverflowlinks));
    dispatch(getYoutubelink(v.social.Youtubelink));
    props.toggleTab(2);
    localStorage.setItem("template_id", v.id);
  };

  const handleCloneTemplate = async (template) => {
    setIsCloning(true);
    setIsdatafetch(false);
    dispatch(getSingleTemplate(template));
    try {
      await axios
        .post(baseUrl + "/store_template_detail_clone", {
          user_id: localStorage.getItem("id"),
          template_code: template.template_code,
          general: template.general,
          social: template.social,
          design: template.design,
          widget: template.widget,
          template_id: template.id,
          image: template.images,
        })
        .then((res) => {
          if (res.data.status === 200) {
            Swal.fire("Cloned!", "Template has been cloned.", "success");
            setIsCloning(false);
            fetchTemplates();
          }
        });
    } catch (error) {
      setIsCloning(false);
      console.log(error);
    }
  };

  const handleClickOpen = async (template_id) => {
    await axios
      .post(baseUrl + "/get_stats", {
        user_id: localStorage.getItem("id"),
        template_id: template_id,
      })
      .then((res) => {
        dispatch(getChartdata(res.data));
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        className="animate__animated animate__fadeInDownBig animate__faster"
      >
        <DialogTitle
          style={{
            backgroundColor: "#3E51B2",
            color: "white",
            textAlign: "center",
          }}
        >
          View Stats
        </DialogTitle>
        <DialogContent style={{ minWidth: 600 }}>
          <div style={{ width: "100%", height: 300 }}>
            <Chart />
          </div>
        </DialogContent>
      </Dialog>
      <div>
        <UpdateSignatureModal
          toggleTab={toggleTab}
          state={state}
          setState={setState}
          toggleState={toggleState}
        />
      </div>
      <div className="pb-20 w-screen bg-white px-2 overflow-x-hidden">
        {!isError ? (
          <main className="w-full h-auto grid grid-cols-1 md:grid-cols-2 mt-4  overflow-x-hidden">
            {isdatafetch ? (
              <div className="absolute w-11/12 mx-auto overflow-x-hidden">
                <div className="w-32 mt-40 mx-auto">
                  <Loading
                    type="ThreeDots"
                    width={120}
                    height={40}
                    color="#777"
                  />
                </div>
              </div>
            ) : // : isdatafetch ? (
            //   <div className="absolute w-11/12 mx-auto overflow-x-hidden">
            //     <div className="w-32 mt-40 mx-auto">
            //       {/* <Loading
            //         type="ThreeDots"
            //         width={120}
            //         height={40}
            //         color="#777"
            //       /> */}
            //       no templates
            //     </div>
            //   </div>
            // )
            data ? (
              data.slice(firstIndex, lastIndex).map((v, i) => (
                <article
                  className="md:w-full overflow-x-hidden animate__animated animate__fadeInRight animate__faster p-1"
                  key={i}
                >
                  <div className="w-full shadow-md border border-gray-100 rounded-lg h-60 overflow-x-hidden overflow-y-hidden">
                    <div
                      className="shadow-sm my-2 mx-2 overflow-x-hidden"
                      dangerouslySetInnerHTML={{
                        __html: v.template_code.slice(94, -12),
                      }}
                    />
                  </div>
                  <div className="w-full bg-gray-200 shadow-md mt-1 rounded-lg flex flex-row py-1 h-12 bottom-0 justify-end lg:justify-items-start">
                    <div
                      className="bg-blue-600 h-8  rounded-xl px-4  text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2 "
                      onClick={() => handleEditTemplate(v)}
                    >
                      Edit{" "}
                      <span className="hidden sm:inline-block md:hidden xl:inline-block">
                        Signature
                      </span>
                    </div>
                    <div
                      className={`${
                        isLoading ? "bg-white" : "bg-gray-600"
                      } rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2`}
                      onClick={() => handleCloneTemplate(v)}
                    >
                      Clone{" "}
                      <span className="hidden sm:inline-block md:hidden xl:inline-block">
                        Signature
                      </span>
                    </div>
                    <div
                      className="bg-red-600 h-8  rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer mx-2"
                      onClick={() => handleDeleteTemplate(v.id)}
                    >
                      Delete{" "}
                      <span className="hidden sm:inline-block md:hidden xl:inline-block">
                        Signature
                      </span>
                    </div>

                    <div className="flex flex-row justify-between mx-2">
                      <div
                        className="bg-green-600 h-8 rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                        onClick={() => {
                          installTemplate(v.template_code);
                          localStorage.setItem(
                            "template_code",
                            v.template_code
                          );
                          setState({ isPaneOpen: true });
                        }}
                      >
                        Install{" "}
                        <span className="hidden sm:inline-block md:hidden xl:inline-block">
                          Signature
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between mx-2">
                      <div
                        className="bg-green-800 h-8 rounded-xl px-4 text-xs text-white py-2 my-1 font-bold transition duration-400 ease-in-out transform hover:scale-110 cursor-pointer"
                        onClick={() => handleClickOpen(v.id)}
                      >
                        View{" "}
                        <span className="  md:hidden xl:inline-block">
                          Stats
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              [...Array(6)].map((v, i) => (
                <div className="w-full px-4 py-2" key={i}>
                  <div className="animate-pulse">
                    <div className=" flex space-x-4 h-72 rounded-md bg-red-300"></div>
                  </div>
                </div>
              ))
            )}
          </main>
        ) : (
          <section className="animate__animated animate__fadeInRight animate__faster">
            <div className="p-10">
              <div className="max-w-sm rounded shadow-2xl">
                <img
                  className="w-40 h-40 mx-auto"
                  src={NotFound}
                  alt="not found"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">
                    No Template Found....
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2 w-10/12 mx-auto">
                  <button
                    className="bg-transparent text-center w-11/12 mx-auto shadow-lg hover:bg-primary text-primary hover:text-white border border-primary font-bold py-2 px-12 rounded inline-flex gap-2 items-center mt-6 mb-8"
                    onClick={() => {
                      props.toggleTab(2);
                    }}
                  >
                    <CgTemplate />
                    <span>Create Signature</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
        <div style={{ display: isdatafetch ? "none" : null }}>
          {arrayCount >= 10 ? (
            <Pagination
              data={activePage}
              pageActive={changeActivePage}
              pageData={data}
              userLength={usersPerPage}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <footer
        className="bottom-0 w-full z-10 mt-10"
        style={{ marginTop: isdatafetch ? "400px" : null }}
      >
        <Footer />
      </footer>
    </>
  );
};

export default TemplateBox;
