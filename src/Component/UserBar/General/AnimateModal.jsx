import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { MdSlowMotionVideo } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import Animate1 from "../../../Images/imgProfile.png";
import Animate2 from "../../../Images/example.png";
import { getImageAnimation } from "redux/CounterSlice";
import { getImageAnimationDesign, getImages } from "redux/designSlice";
import { useDispatch, useSelector } from "react-redux";
import { imageType } from "Utils/Constant";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function AnimateModal() {
  const { grayscale, blur, brightness, contrast, hue_rotate, invert } =
    imageType;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { imageAnimation, imageAnimationDesign, images } = useSelector(
    (state) => state.counter
  );
  const handleChange = (e) => {
    const filePreview = URL.createObjectURL(e.target.files[0]);
    dispatch(getImageAnimation(filePreview));
    e.target.value = null;
    return false;
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [byDefaulImage, setByDefaultImage] = useState(true);

  return (
    <div>
      <button
        className=" font-bold justify-center text-center   inline-flex items-center gap-1 align-middle text-blue-400"
        onClick={handleOpen}
      >
        <MdSlowMotionVideo />
        <span className="text-sm text-center">Animate</span>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <main className="bg-white rounded-lg animate__animated animate__bounceInDown animate__faster">
            <div className="float-right mr-2 mt-2">
              <button
                onClick={handleClose}
                className="transition duration-400 ease-in-out  transform hover:-rotate-180 "
              >
                <ImCross fontSize="18" />
              </button>
            </div>
            <div className="w-full px-9 ">
              {/* <h1 className="text-2xl text-center mt-4 font-semibold ">
                Animation & Effects
              </h1>
              <h1 className="text-lg font-bold mt-3">
                Upload your photo / logo
              </h1> */}
              {/* UPLOAD ELEMENTS */}
              <div className="flex gap-8 mt-3">
                <div className="grid">
                  {/* GRID FIRST ITEM */}
                  {/* <div className="flex gap-4">
                    <button
                      className="bg-white  py-1 px-3 rounded   image-upload"
                      style={{ border: "1px solid black" }}
                    >
                      <div className="image-upload">
                        <label
                          for="file-input"
                          className="cursor-pointer flex items-center gap-4"
                        >
                          <img
                            src={imageAnimation ? imageAnimation : Animate1}
                            alt=" "
                            // className="w-10 h-16"
                            style={{ width: "4rem", height: "4rem" }}
                          />
                          <div className="text-gray-500 image-upload bg-cover ">
                            <VscAdd
                              fontSize="24"
                              className="font-bold ml-6 logo image-upload"
                            />
                            <span>Logo / Photo</span>
                            <input
                              id="file-input"
                              type="file"
                              placeholder="upload-images"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </label>
                      </div>
                    </button>
                    <button
                      className="bg-white  py-3 px-2 rounded bg-fixed "
                      style={{ border: "1px solid black" }}
                    >
                      <div className="image-upload">
                        <label
                          for="file-input"
                          className="cursor-pointer flex items-center gap-6 "
                        >
                          <img
                            src={imageAnimation ? imageAnimation : Animate1}
                            alt=" "
                            // className="w-10 h-10"
                            style={{ width: "4rem", height: "4rem" }}
                          />
                          <div className="text-gray-500 image-upload">
                            <VscAdd
                              fontSize="24"
                              className="font-bold ml-6 logo image-upload"
                            />
                            <span>Logo / Photo</span>

                            <input
                              id="file-input"
                              type="file"
                              accept="image/*"
                              placeholder="upload-images"
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />
                          </div>
                        </label>
                      </div>
                    </button>
                  </div> */}
                  <div className="h-5 bg-fixed">
                    {imageAnimation ? (
                      <span
                        className="text-red-600 cursor-pointer text-xs font-semibold mt-1"
                        onClick={() => {
                          dispatch(getImageAnimation(""));
                          dispatch(getImageAnimationDesign(""));
                        }}
                      >
                        Clear photo
                      </span>
                    ) : null}
                  </div>
                  <h1 className="text-xl font-semibold mt-2">Photo Effects</h1>
                  <div className="mt-2">
                    {/* {importImage
                      ? "To use effects, you need to upload at least one image. Got it."
                      : null} */}
                  </div>
                  {/* GRID SECOND ITEM */}
                  <div className="flex gap-4 mt-3">
                    <button className="transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter grayscale w-14 h-16"
                        onClick={(e) => {
                          if (imageAnimation) {
                            dispatch(getImageAnimationDesign(grayscale));
                          } else {
                            dispatch(getImageAnimationDesign(grayscale));
                          }
                        }}
                      />
                    </button>
                    <button className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter blur-sm w-14 h-16"
                        onClick={() => {
                          dispatch(getImageAnimationDesign(blur));
                        }}
                      />
                    </button>
                    <button className=" transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter brightness-200 w-14 h-16"
                        onClick={() => {
                          dispatch(getImageAnimationDesign(brightness));
                        }}
                      />
                    </button>
                    <button className=" transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter contrast-200 w-14 h-16"
                        onClick={() => {
                          dispatch(getImageAnimationDesign(contrast));
                        }}
                      />
                    </button>
                    <button className=" transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter hue-rotate-180 w-14 h-16"
                        onClick={() => {
                          dispatch(getImageAnimationDesign(hue_rotate));
                        }}
                      />
                    </button>
                    <button className=" transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      <img
                        src={imageAnimation ? imageAnimation : Animate2}
                        className="filter invert w-14 h-16"
                        onClick={() => {
                          dispatch(getImageAnimationDesign(invert));
                        }}
                      />
                    </button>
                  </div>
                  <p
                    className="text-sm text-red-600 font-semibold cursor-pointer mt-4"
                    onClick={() => dispatch(getImageAnimationDesign(""))}
                  >
                    Clear photo effects
                    <br />
                    <br />
                  </p>
                </div>

                {/* SECOND ITEM */}
                <section>
                  {/* <div className="bg-AnimateModal w-52 h-52 rounded-md shadow-2xl py-5 px-9 ">
                    <img
                      src={imageAnimation ? imageAnimation : Animate2}
                      alt=""
                      style={{
                        width: "130px",
                        height: "155px",
                      }}
                      className={imageAnimationDesign}
                    />
                  </div> */}
                  <button
                    onClick={() => {
                      handleClose();
                      dispatch(getImages(imageAnimation));
                    }}
                    className=" text-white mb-4 font-bold py-3 px-8 rounded mt-20 ml-16 transition duration-400 ease-in-out  transform hover:-translate-y-1 hover:scale-110 bg-primary"
                  >
                    Save
                  </button>
                </section>
              </div>
            </div>
          </main>
        </Fade>
      </Modal>
    </div>
  );
}
