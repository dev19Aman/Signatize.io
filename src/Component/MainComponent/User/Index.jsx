import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../../services/BaseUrl";
import { FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import AddData from "./AddOrDelete/EditData";
import DeleteData from "./AddOrDelete/DeleteData";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import AddUserFrom from "./AddOrDelete/AddUserFrom";
import Joi from "joi";
import { getToggleIndex } from "redux/toggleSlice";
import { getEditUser, getEditUserID, getEditUserName } from "redux/UserSlice";
const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errors, setErrors] = useState("");
  const [apiErrors, setApiErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const [open, setOpen] = React.useState(false);

  const validateData = () => {
    console.log("validateData");
    const schema = Joi.object({
      name: Joi.string().required().messages({
        "string.empty": "Your name is not allowed to be empty",
      }),

      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email")
        .messages({
          "string.empty":
            "Email is not allowed to be empty or email format is incorrect",
        }),
      password: Joi.string().required().label("Password").messages({
        "string.empty": "Password is not allowed to be empty",
      }),
    }).options({ abortEarly: false });

    return schema.validate({ name, email, password });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    var ref_id = localStorage.getItem("id");
    axios
      .post(`${baseUrl}/get_user_data`, {
        ref_id: ref_id,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setisError(false);
          setData(res.data.data);
        } else {
          setisError(true);
        }
      });
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    // const { error } = validateData();
    // if (error) {
    //   setErrors(error.details);
    //   return;
    // }
    if (name == "") {
      setNameError("Name is required.");
    } else if (email == "") {
      setEmailError("Email is required");
    } else if (password == "") {
      setPasswordError("Password is required");
    } else {
      try {
        setLoading(true);
        await axios
          .post(`${baseUrl}/signup`, {
            name: name,
            email: email,
            password: password,
            ref_id: localStorage.getItem("id"),
          })
          .then((res) => {
            if (res.data.status == 200) {
              setLoading(false);
              handleClose();
              var ref_id = localStorage.getItem("id");
              axios
                .post(`${baseUrl}/get_user_data`, {
                  ref_id: ref_id,
                })
                .then((res) => setData(res.data.data));
              //  window.location.reload(false);
              Swal.fire(
                "Good job!",
                "User has been added successfuly!!",
                "success"
              );
            } else {
              setLoading(false);
              setApiErrors(res.data.error);
              Swal.fire("Error!", "Email is already existed", "failed");
              handleClose();
            }
          });
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const userDelete = async (id) => {
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
          axios.post(baseUrl + "/delete_user", { user_id: id }).then((res) => {
            if (res.data.status === 200) {
              // window.location.reload();
              var ref_id = localStorage.getItem("id");
              axios
                .post(`${baseUrl}/get_user_data`, {
                  ref_id: ref_id,
                })
                .then((res) => setData(res.data.data));
              Swal.fire(
                "Deleted!",
                "User has been deleted successfully",
                "success"
              );
              dispatch(getToggleIndex(3));
            } else {
              Swal.fire(
                "Error!",
                "User has not been deleted successfully.",
                "failed"
              );
            }
          });
        } catch (error) {
          setIsLoading(false);
          console.log("server error", error);
        }
      }
    });
  };

  // ADD DATA FUNCTION
  const [EditButton, setEditButton] = useState(false);
  const OpenEditButton = (items) => {
    setEditButton(true);
    dispatch(getEditUserName(items.name));
    dispatch(getEditUserID(items.id));
  };
  const CloseEditButton = () => {
    setEditButton(false);
  };
  // DELETE DATA FUNCTION
  const [deleteButton, setDeleteButton] = useState(false);
  const openDeleteButton = () => {
    setDeleteButton(true);
  };
  const closeDeleteButton = () => {
    setDeleteButton(false);
  };
  return (
    <main>
      <div className=" ">
        <div className="flex flex-row justify-items-end w-32 absolute top-32 right-8 mx-auto">
          <div className="w-11/12 mx-auto mt-5 ">
            <AddUserFrom
              handleSignup={handleSignup}
              name={name}
              errors={errors}
              setName={setName}
              nameError={nameError}
              setNameError={setNameError}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              emailError={emailError}
              setEmailError={setEmailError}
              passwordError={passwordError}
              setPasswordError={setPasswordError}
              setErrors={setErrors}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              open={open}
              setOpen={setOpen}
              loading={loading}
              apiErrors={apiErrors}
            />
          </div>
        </div>

        <table
          className="mt-52 rounded-t-lg bg-gray-200 w-11/12 mx-auto text-center text-gray-800  animate__animated animate__fadeInRight animate__faster overflow-y-auto "
          // style={{ height: "81vh" }}
        >
          <thead>
            <tr className="text-center border-b-2 border-gray-300">
              <th className="px-4 py-3  text-gray-400">Name</th>
              <th className="px-4 py-3 text-gray-400">Email</th>
              <th className="px-4 py-3 text-gray-400">Profile</th>
              <th className="px-4 py-3 text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {isError ? (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-gray-600 mt-2">
                  <h1 className="text-gray-600 text-xl ">
                    THEIR IS NO USER FOUND
                  </h1>
                </td>
              </tr>
            ) : (
              data.map((items) => (
                <tr
                  className="bg-gray-100 border-b-2 border-gray-200 h-20 "
                  key={items.id}
                >
                  <td className="px-2  text-lg font-semibold ">{items.name}</td>
                  <td className="text-lg font-semibold ">{items.email}</td>
                  <td className="px-2 font-semibold ">
                    <img
                      src={items.profile}
                      alt=""
                      className="h-14 w-14 2xl:h-24 2xl:w-24"
                    />
                  </td>
                  <td className="">
                    <button
                      className="font-bold py-2 px-5 rounded items-center gap-1 
                text-white hover:text-white bg-blue-500 hover:bg-blue-900 rounded-r-none"
                      onClick={() => OpenEditButton(items)}
                    >
                      <FaPen className="w-6" />
                    </button>
                    <button
                      className="font-bold py-2 px-5 rounded items-center gap-1 text-white hover:text-white bg-red-500 hover:bg-red-900 rounded-l-none mt-1"
                      onClick={() => userDelete(items.id)}
                      // onClick={() => openDeleteButton(items.id)}
                    >
                      <AiFillDelete className="w-6" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <section>
          <AddData EditButton={EditButton} CloseEditButton={CloseEditButton} />
        </section>
        <section>
          <DeleteData
            deleteButton={deleteButton}
            closeDeleteButton={closeDeleteButton}
            userDelete={userDelete}
          />
        </section>
      </div>

      <footer className=" w-full mt-72">
        <Footer />
      </footer>
    </main>
  );
};
export default User;
