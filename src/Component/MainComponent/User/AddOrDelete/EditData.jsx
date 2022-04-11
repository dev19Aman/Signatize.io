import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { getEditUserID, getEditUserName } from "redux/UserSlice";
import axios from "axios";
import { baseUrl } from "services/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-redux";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function AddData(props) {
  const dispatch = useDispatch();
  const { editUserName, editUserID } = useSelector((state) => state.UserSlice);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleEditUser = async () => {
    try {
      await axios
        .post("https://app.signatize.io/api/user_edit", {
          user_id: editUserID,
          name: editUserName,
          password: password,
        })
        .then((res) => {
          // console.log(res.data.error.password[0]);
          // setError(res.data.error.password[0]);
          window.location.reload(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(editUserName);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.EditButton}
        close={props.closeEditButton}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.EditButton}>
          <main>
            <div className="w-full max-w-xs ">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={editUserName}
                    onChange={(e) => dispatch(getEditUserName(e.target.value))}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleEditUser}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={props.CloseEditButton}
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {/* <p>{error}</p> */}
            </div>
            {/* ALL TEMPLATES */}
          </main>
        </Fade>
      </Modal>
    </div>
  );
}
