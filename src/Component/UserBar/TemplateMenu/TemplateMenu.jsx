import React, { useEffect } from "react";
import { getTemplate, getAllTemplates } from "../../../redux/templateSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "services/BaseUrl";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import animationData from "../../../Images/lottie/loading.json";
import "animate.css";
import ReactImageAppear from "react-image-appear";
import TemplateModal from "./TemplateModal";
import { CgTemplate } from "react-icons/cg";

const TemplateMenu = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [no, setNo] = useState(20);
  const { allTemplates } = useSelector((state) => state.template);

  useEffect(() => {
    fetchTemplateList();
  }, []);

  const fetchTemplateList = () => {
    setIsLoading(true);
    try {
      axios
        .post(`${baseUrl}/get_template_list`, {
          no: no,
        })
        .then((res) => dispatch(getAllTemplates(res.data.data)));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Server error", error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTemplates = (id) => {
    try {
      import(
        `Component/MainComponent/CreateSignature/AllTemplates/Template${id}.jsx`
      ).then((_Component) => {
        console.log("imported com", _Component);
        dispatch(getTemplate(_Component.default));
      });
    } catch (ex) {
      console.log(ex, "Tempalte import failed");
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="w-full overflow-x-hidden overflow-y-scroll bg-gray-200 "
      style={{ height: "81vh" }}
    >
      <div className="animate__animated animate__fadeInRight animate__faster">
        <div className="px-4 grid grid-cols-2 pt-4 pb-2">
          {allTemplates.length <= 0
            ? [...Array(12)].map((v, i) => (
                <motion.div
                  className="animate-pulse flex space-x-4 p-1"
                  key={i}
                >
                  <div className="rounded-sm bg-gray-400 h-32 w-full sticky"></div>
                </motion.div>
              ))
            : allTemplates.map((items, i) => (
                <div className="w-10/12 mt-2 mx-auto space-y-2" key={i}>
                  <ReactImageAppear
                    src={`https://app.signatize.io/assets/uploads/SVG/${items.image}`}
                    className="w-52 cursor-pointer border-2 border-solid border-gray-300 grid gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-140  hover:shadow-2xl bg-transparent"
                    alt=""
                    onClick={() => {
                      handleTemplates(items.id);
                    }}
                  />
                </div>
              ))}
        </div>
        {!isloading ? (
          <div className="w-1/2 mx-auto">
            <button
              className="bg-transparent text-center w-full hover:bg-primary text-primary hover:text-white border border-primary font-bold py-2  rounded flex gap-2 justify-center  items-center mt-6 mb-8"
              onClick={handleOpen}
            >
              <CgTemplate />
              <span>Load More..</span>
            </button>
            <section>
              <TemplateModal
                open={open}
                handleClose={handleClose}
                handleTemplates={handleTemplates}
              />
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TemplateMenu;
