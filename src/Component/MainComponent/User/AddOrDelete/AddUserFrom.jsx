import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useEffect } from "react";
import User from "../../../../Images/carbon_user.svg";
import Password from "../../../../Images/carbon_password.svg";
import Email from "../../../../Images/carbon_email.svg";

const AddUserFrom = ({
  handleSignup,
  name,
  setName,
  nameError,
  setNameError,
  email,
  setEmail,
  emailError,
  setEmailError,
  password,
  setPassword,
  passwordError,
  setPasswordError,
  setErrors,
  handleClickOpen,
  handleClose,
  open,
  setOpen,
  loading,
  errors,
  apiErrors,
}) => {
  console.log(nameError);
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          style={{
            backgroundColor: "#3E51B2",
            color: "white",
            textAlign: "center",
          }}
        >
          Add User
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errors &&
              errors.map((error) => (
                <div className="text-xs text-red-600 font-semibold">
                  {error.messages}
                </div>
              ))}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Enter Name"
            type="text"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={User} />
                </InputAdornment>
              ),
            }}
          />

          <p style={{ color: "red", fontSize: "14px", fontSize: "14px" }}>
            {nameError}
          </p>
          {/* {apiErrors && (
            <div className="text-xs text-red-600 font-semibold">
            {apiErrors.error.email}
          </div> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Enter Email"
            InputLabelProps={{
              className: "text-white",
            }}
            type="email"
            fullWidth
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <img src={Email} />
                </InputAdornment>
              ),
            }}
          />
          <p style={{ color: "red", fontSize: "14px" }}>{emailError}</p>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Enter Password"
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
          <p style={{ color: "red", fontSize: "14px" }}>{passwordError}</p>
        </DialogContent>
        <DialogActions style={{ paddingRight: 24 }}>
          <Button
            style={{
              backgroundColor: "#C4C4C4",
              color: "white",
              minWidth: 100,
              borderRadius: 6,
            }}
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            // disabled={
            //   loading || name === "" || email === "" || password === ""
            //     ? true
            //     : false
            // }
            color="primary"
            variant="contained"
            onClick={handleSignup}
            style={{
              minWidth: 100,
              borderRadius: 6,
            }}
          >
            {loading ? "Loading" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUserFrom;
