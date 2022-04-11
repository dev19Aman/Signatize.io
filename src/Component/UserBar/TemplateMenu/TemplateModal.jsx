import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";
import { CgTemplate } from "react-icons/cg";
import axios from "axios";
import { baseUrl } from "services/BaseUrl";
import { getAllTemplates } from "redux/CounterSlice";
import Loading from "Pages/Login/Loading";
import ReactImageAppear from "react-image-appear";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AnimateModal(props) {
  const classes = useStyles();
  const templates = useSelector((state) => state.counter.allTemplates);
  const dispatch = useDispatch();
  const [no, setNo] = useState(0);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState(templates);

  useEffect(() => {
    handleLoadMoreTemplate();
  }, []);

  const handleLoadMoreTemplate = () => {
    setNo(no + 20);
    setIsLoading(true);
    try {
      axios
        .post(`${baseUrl}/get_template_list`, {
          no: no + 20,
        })
        .then((res) => {
          setIsLoading(false);
          // console.log(res.data);
          setData(res.data.data);
        });
    } catch (error) {
      setIsLoading(false);
      console.log("Server error", error);
    }
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <main className="bg-gray-700 border-0 w-10/12 mx-auto h-auto mt-6">
            <div className="float-right mr-3 mt-2">
              <button
                onClick={props.handleClose}
                className=" text-white transition duration-400 ease-in-out mr-2 mt-1 transform hover:-rotate-180"
              >
                <ImCross fontSize="20" />
              </button>
            </div>
            <h1 className="text-center mt-2 uppercase font-bold text-xl text-green-400">
              All templates
            </h1>

            <hr className="bg-primary h-2 mt-5" />
            <section
              className="grid relative grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 px-20 border-0 overflow-y-auto bg-white py-8"
              style={{ height: "72vh" }}
            >
              {/* ALL TEMPLATES */}
              {isloading ? (
                <div className="w-24 absolute top-40 mx-auto h-24 ">
                  <Loading type="ThreeDots" />
                </div>
              ) : data ? (
                data.map((v, i) => (
                  <div className="flex gap-10 mt-2" key={i}>
                    <button className="w-52 h-40 border-2 border-solid py-6 px-4 gap-2 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110  hover:shadow-2xl">
                      <ReactImageAppear
                        src={`https://app.signatize.io/assets/uploads/SVG/${v.image}`}
                        alt=""
                        onClick={() => {
                          props.handleTemplates(v.id);
                          setTimeout(() => {
                            props.handleClose();
                          }, 500);
                        }}
                      />
                    </button>
                  </div>
                ))
              ) : (
                "No data"
              )}
            </section>
            <div className="mx-auto w-1/2 text-center">
              <button
                class="bg-transparent hover:shadow-lg lg:w-8/12 mx-auto w-full hover:bg-primary  hover:border-primary text-white border border-white font-extrabold rounded  items-center py-2  my-3"
                onClick={handleLoadMoreTemplate}
              >
                {/* {/ {!isloading ? <CgTemplate /> : ""} /} */}
                <span className="text-xs md:text-sm">
                  {" "}
                  Load More Templates
                </span>{" "}
              </button>
            </div>
          </main>
        </Fade>
      </Modal>
    </div>
  );
}
