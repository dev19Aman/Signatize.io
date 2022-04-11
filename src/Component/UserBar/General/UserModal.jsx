import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ImFilesEmpty } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { getImages } from "redux/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import GipyIcon from "../../../Images/giphy_icon.png";
import PixabayIcon from "../../../Images/logo_square.png";
import axios from "axios";
import { baseUrl } from "services/BaseUrl";
import ReactImageAppear from "react-image-appear";
import { getGiphyImages, getPixabayImages } from "redux/thirdPartyImageSlice";
import Loading from "../../../Pages/Login/Loading";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Demo = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const [imageURL, setImageURL] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const dispatch = useDispatch();
  const handleChange = (e) => {
    // const filePreview = URL.createObjectURL(e.target.files[0]);

    // console.log("data", e.target.files[0]);
    // console.log("filePreview", filePreview);
    // data.append("file", e.target.files[0]);
    // API Code Image Upload
    const data = new FormData();
    data.append("user_id", localStorage.getItem("id"));
    data.append("image", e.target.files[0]);
    axios
      .post("https://app.signatize.io/api/image_upload", data)
      .then((res) => {
        console.log(res);
        dispatch(getImages(res.data.data.image));
      })
      .catch((error) => {
        console.log(error);
      });

    // dispatch(getImages(e.target.files[0].name));
    props.handleClose(false);
  };

  const { giphy, pixabay, youzign } = useSelector(
    (state) => state.thirdPartyImages
  );

  const classes = useStyles();

  const handleFileUplaodFromURL = () => {
    dispatch(getImages(imageURL));
    props.handleClose(false);
  };

  const handleSearchFileFromGiphy = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(baseUrl + "/giphy", {
          params: {
            name: searchInput,
          },
        })
        .then((res) => {
          setIsLoading(false);
          console.log(res.data.data.data);
          dispatch(getGiphyImages(res.data.data.data));
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSearchFileFromPixabay = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=13567124-98ebe95018edbf2b8743e43d6&q=${searchInput}&image_type=photo`
        )
        .then((res) => {
          setIsLoading(false);
          dispatch(getPixabayImages(res.data.hits));
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div>
            <div className="inline-block bg-white overflow-hidden shadow-md rounded-2xl mx-auto animate__animated animate__bounceInDown animate__faster">
              {/* TAB LISTS */}
              <div className="flex bg-white">
                <div className="w-56 bg-gray-200" style={{ height: "73vh" }}>
                  <div className="grid bg-gray-200">
                    <section>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 1
                              ? "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 bg-white w-full"
                              : "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 "
                          }
                          onClick={() => toggleTab(1)}
                        >
                          <ImFilesEmpty
                            fontSize="24"
                            className="text-gray-500"
                          />
                          <span className="text-xl">Local Files</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 2
                              ? "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 bg-white w-full"
                              : "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 "
                          }
                          onClick={() => toggleTab(2)}
                        >
                          <AiOutlineLink
                            fontSize="24"
                            className="text-gray-500"
                          />
                          <span className="text-xl">Direct Link</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 3
                              ? "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 bg-white w-full"
                              : "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 "
                          }
                          onClick={() => toggleTab(3)}
                        >
                          <img src={GipyIcon} width={24} />
                          <span className="text-xl">Giphy</span>
                        </button>
                      </div>
                      <div className="w-full">
                        <button
                          className={
                            toggleState === 4
                              ? "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 bg-white w-full"
                              : "font-bold py-4 px-4  inline-flex gap-4 text-gray-800 hover:text-green-900 "
                          }
                          onClick={() => toggleTab(4)}
                        >
                          <img src={PixabayIcon} width={24} />

                          <span className="text-xl">Pixabay </span>
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
                {/* TAB PANELS */}
                <div className="" style={{ width: "33rem" }}>
                  <div className="float-right mr-8 mt-6 text-gray-400 hover:text-green-900 ">
                    <button onClick={props.handleClose}>
                      <ImCross className="hover:animate-spin md:text-sm 2xl:text-md" />
                    </button>
                  </div>

                  {toggleState === 1 ? (
                    <section className="gird text-center items-center px-32 mt-16 ">
                      <h1 className="text-3xl">UPLOAD YOUR</h1>
                      <h1 className="text-3xl">IMAGE OR FILE</h1>
                      {/* <span className="text-md">or</span> */}
                      <br />

                      <label className="w-60 flex flex-col items-center px-3 py-2 transform bg-white rounded-md shadow-md  uppercase border border-blue cursor-pointer hover:bg-green-900 hover:text-white transition duration-500 hover:scale-125 ml-6">
                        <span className="text-base font-semibold ">
                          Choose a local file
                        </span>

                        <input
                          type="file"
                          name="file"
                          className="hidden"
                          onChange={handleChange}
                        />
                      </label>
                    </section>
                  ) : null}

                  {toggleState === 2 ? (
                    <section className="text-center mt-20 ">
                      <h1 className="text-2xl font-bold">File from the Web</h1>
                      <h1 className="text-xl">Grab any file off the web.</h1>
                      <span className="xl">Just provide the link.</span>
                      <br />
                      <br />
                      <input
                        className="border border-black rounded py-3 px-3 
                           text-gray-700 mb-3 leading-tight focus:outline-ring focus:shadow-outline w-64"
                        id={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder="Past Your link here"
                      />
                      <br />
                      <button
                        className="bg-gray-400 hover:bg-green-900 text-white text-xl  py-2 px-4 rounded transition duration-500 hover:scale-125 transform"
                        onClick={handleFileUplaodFromURL}
                      >
                        Upload
                      </button>
                    </section>
                  ) : null}
                  {toggleState === 3 ? (
                    <section className="text-center mt-8 h-60">
                      <h1 className="md:text-lg 2xl:text-xl py-2 font-bold">
                        Search from Giphy
                      </h1>
                      <input
                        className="border border-black rounded py-3 px-3 
                           text-gray-700 mb-2 leading-tight focus:outline-ring focus:shadow-outline w-64"
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search from Giphy"
                      />
                      <br />
                      <button
                        className="bg-gray-400 hover:bg-green-900 text-white text-sm  py-2 px-4 rounded transition duration-500 hover:scale-125 transform"
                        onClick={handleSearchFileFromGiphy}
                      >
                        {isLoading ? "Searching" : "Search"}
                      </button>
                      <div className="w-11/12 mx-auto overflow-y-auto overflow-x-hidden mt-6  grid gap-2 grid-cols-3">
                        {giphy &&
                          giphy.map((v, i) => (
                            <div className="w-11/12 mx-auto" key={i}>
                              {isLoading ? (
                                <div className="w-11/12 mx-auto">
                                  <Loading type="ThreeDots" color="#777" />
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    dispatch(getImages(v.images.original.url));
                                    props.handleClose(false);
                                  }}
                                >
                                  <ReactImageAppear
                                    src={v.images.original.url}
                                    width={120}
                                    className="cursor-pointer"
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </section>
                  ) : null}
                  {toggleState === 4 ? (
                    <section className="text-center pt-8 h-60">
                      <div>
                        <h1 className="md:text-lg 2xl:text-xl py-2 font-bold">
                          Search from Pixabay
                        </h1>
                        <input
                          className="border border-black rounded py-3 px-3 
                           text-gray-700 mb-3 leading-tight focus:outline-ring focus:shadow-outline w-64"
                          onChange={(e) => setSearchInput(e.target.value)}
                          placeholder="Search from Giphy"
                        />
                        <br />
                        <button
                          className="bg-gray-400 hover:bg-green-900 text-white text-sm  py-2 px-4 rounded transition duration-500 hover:scale-125 transform"
                          onClick={handleSearchFileFromPixabay}
                        >
                          {isLoading ? "Searching" : "Search"}
                        </button>
                      </div>
                      <div className="w-11/12 mx-auto overflow-y-auto overflow-x-hidden mt-6 h-60 grid gap-2 grid-cols-3">
                        {pixabay &&
                          pixabay.map((v, i) => (
                            <div className="w-11/12 mx-auto" key={i}>
                              {isLoading ? (
                                <div className="w-11/12 mx-auto">
                                  <Loading type="ThreeDots" color="#777" />
                                </div>
                              ) : (
                                <div
                                  onClick={() => {
                                    dispatch(getImages(v.largeImageURL));
                                    props.handleClose(false);
                                  }}
                                >
                                  <ReactImageAppear
                                    src={v.largeImageURL}
                                    width={120}
                                    height={120}
                                    className="cursor-pointer"
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </section>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Demo;
