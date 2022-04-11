import { Link, useHistory } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { baseUrl } from "services/BaseUrl";
import Password from "../../Images/carbon_password.svg";

function Change({ showMenu }) {
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePassword = async () => {
    await axios
      .post(baseUrl + "/passwordChange", {
        user_id: localStorage.getItem("id"),
        current_password: password,
        new_password: newPassword,
      })
      .then((res) => {
        if (res.data.status === 200) {
          handleClose();
          Swal.fire(
            "Password",
            "Password has been changed successfuly!!",
            "success"
          );
        } else {
          handleClose();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      });
  };
  return (
    <div className="absolute top-10 right-12 z-50 ">
      {showMenu ? (
        <div className="py-4 artboard artboard-demo bg-base-200 animate__animated animate__fadeInDown animate__faster">
          <ul className="menu p-4 shadow-lg bg-base-100 rounded-box ">
            {/* <li>
              <a
                href="#"
                className="text-xs text-base-100 font-semibold hover:bg-green-400"
              >
                Welcome, {account}
              </a>
            </li> */}
            <li>
              <a
                onClick={() => handleClickOpen()}
                className="text-xs text-base-100 font-semibold hover:bg-green-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                Change Password
              </a>
            </li>
            <li>
              <a
                onClick={() => handleLogout()}
                className="text-xs font-semibold"
              >
                <BiLogOutCircle className="inline-block w-5 h-5 mr-2 stroke-current" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            backgroundColor: "#3E51B2",
            color: "white",
            textAlign: "center",
          }}
        >
          Change Password
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* {errors &&
              errors.map((error) => (
                <div className="text-xs text-red-600 font-semibold">
                  {error.message}
                </div>
              ))} */}
            {/* {apiErrors && (
              <div className="text-xs text-red-600 font-semibold">
                {apiErrors.error.email}
              </div>
            )} */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Current Password"
            type="password"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={Password} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label="New Password"
            type="password"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={Password} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={Password} />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions style={{ paddingRight: 24 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            style={{
              borderRadius: 6,
              minWidth: 100,
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#C4C4C4",
              color: "white",
              minWidth: 100,
              borderRadius: 6,
            }}
            color="primary"
            variant="contained"
            onClick={handleChangePassword}
          >
            {loading ? "Loading" : "Change Password"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Change;
