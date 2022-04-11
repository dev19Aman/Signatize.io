import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  getFacebooklinks,
  getYoutubelink,
  getLinkedInLink,
  getTwitterlinks,
  getStackoverflowlinks,
  getInstalinks,
  getCustemlink,
  getPintrestLink,
  getRadditLink,
  getSingleTextField,
} from "redux/socialSlice";
import SingleTextField from "./SingleTextField";
// import { getSocialImages } from "redux/CounterSlice";
import { getSocialImages } from "redux/socialSlice";
import uploadIcon from "../../image/upload.png";
import facebook from "./socialicons/facebook.jpg";
import insta from "./socialicons/insta.jpg";
import linkedins from "./socialicons/linkedIn.jpg";
import stackoverflow from "./socialicons/stackoverflow.jpg";
import twitter from "./socialicons/twitter.jpg";
import youtube from "./socialicons/youtube.jpg";
import raddits from "./socialicons/raddit.png";
import pintrests from "./socialicons/pintrest.png";
import axios from "axios";
import "animate.css";

const SocialMenu = () => {
  const { singleTextField } = useSelector((state) => state.social);
  const [inputFields, setInputFields] = useState([]);
  const [customlinkArray, setCustomlinkArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const {
    socialImages,
    facebooklinks,
    linkedInLinklinks,
    twitterlinks,
    customLink,
    instalinks,
    pintrest,
    raddit,
  } = useSelector((state) => state.social);

  const handleChanges = (e) => {
    setLoader(true);
    const data = new FormData();
    data.append("user_id", localStorage.getItem("id"));
    data.append("image", e.target.files[0]);
    axios
      .post("https://app.signatize.io/api/image_upload", data)
      .then((res) => {
        console.log(res);
        setLoader(false);
        dispatch(getSocialImages(res.data.data.image));
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };
  console.log(loader);
  const handleAddFields = () => {
    dispatch(
      getSingleTextField([
        {
          id: Math.floor(Math.random() * 30),
          label: "example.com",
          customLink: (e) => dispatch(getCustemlink(e.target.value)),
          image: socialImages,
          onChange: handleChanges,
          onClick: handleChanges,
        },
      ])
    );
  };

  const handleRemoveFields = (id) => {
    // console.log(id)
    // const values = [...inputFields];
    const valueFinal = singleTextField.filter((value) => value.id != id);
    dispatch(getSingleTextField(valueFinal));
    console.log(valueFinal);
    dispatch(getSocialImages(""));
    dispatch(getCustemlink(null));
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-auto pb-5"
      style={{ height: "81vh" }}
    >
      <article className="animate__animated animate__fadeInRight animate__faster">
        <div className="flex px-5">
          <p
            className=" flex-1 mt-5"
            style={{ color: "rgb(0, 0, 0)", fontWeight: 900 }}
          >
            SOCIAL PROFILES
          </p>
        </div>

        {/* All INPUTS  */}
        <div className="ml-5 w-11/12 mx-auto">
          <ul className="grid">
            <div className="inline-flex gap-3 items-center ">
              <div className="w-8 mt-5">
                <img src={facebook} className="rounded-full" />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="facebook"
                  style={{ width: "330px" }}
                  inputProps={{
                    maxlength: 40,
                  }}
                  value={facebooklinks}
                  onChange={(e) => dispatch(getFacebooklinks(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={twitter} className="rounded-full" />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="twitter"
                  style={{ width: "330px" }}
                  value={twitterlinks}
                  inputProps={{
                    maxlength: 40,
                  }}
                  onChange={(e) => dispatch(getTwitterlinks(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={linkedins} className="rounded-full " />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="linkedin"
                  style={{ width: "330px" }}
                  value={linkedInLinklinks}
                  inputProps={{
                    maxlength: 40,
                  }}
                  onChange={(e) => dispatch(getLinkedInLink(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={insta} className="rounded-full " />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Instagram"
                  style={{ width: "330px" }}
                  value={instalinks}
                  inputProps={{
                    maxlength: 40,
                  }}
                  onChange={(e) => dispatch(getInstalinks(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={pintrests} className="rounded-full " />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Pintrest"
                  style={{ width: "330px" }}
                  value={pintrest}
                  inputProps={{
                    maxlength: 40,
                  }}
                  onChange={(e) => dispatch(getPintrestLink(e.target.value))}
                />
              </div>
            </div>

            <div className="inline-flex gap-3 items-center">
              <div className="w-8 mt-5">
                <img src={raddits} className="rounded-full " />
              </div>

              <div>
                <TextField
                  id="standard-basic"
                  label="Reddit"
                  style={{ width: "330px" }}
                  value={raddit}
                  inputProps={{
                    maxlength: 40,
                  }}
                  onChange={(e) => dispatch(getRadditLink(e.target.value))}
                />
              </div>
            </div>

            {singleTextField.map((v) => (
              <div>
                <SingleTextField
                  label={v.label}
                  Image={v.image}
                  customLink={v.customLink}
                  onChange={handleChanges}
                  onClick={v.onClick}
                  handleRemoveFields={() => handleRemoveFields(v.id)}
                  i={v.id}
                  v={v}
                  loader={loader}
                />
              </div>
            ))}
          </ul>
        </div>
        <div className="w-7/12 mx-auto">
          {singleTextField.length == 0 ? (
            <button
              onClick={handleAddFields}
              className="font-bold py-2 px-8 rounded inline-flex gap-3 text-black hover:text-white bg-tabs hover:bg-blue-400  border-2 border-dotted border-yellow mt-2"
            >
              <span className="text-lg">Upload your own icon</span>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </article>
    </div>
  );
};

export default SocialMenu;
