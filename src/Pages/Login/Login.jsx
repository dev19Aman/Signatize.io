import React from "react";
import { useHistory } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useEffect } from "react";
import { baseUrl } from "../../services/BaseUrl";
import Logo from "../../logo.png";

const Login = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/home");
    }
  }, []);
  const [showPassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email == "") {
      setEmailError("Please enter email");
    } else if (password == "") {  
      setPasswordError("Please enter password");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(baseUrl + "/signin", {
          email,
          password,
          error,
        });
        console.log(response);
        if (response.data.status == 200) {
          setLoading(false);
          localStorage.setItem("id", response.data.user.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.user.name);
          history.push("/home");
        } else {
          setLoading(false);
          setError(response.data.error);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  };
  return (
    <>
      <main>
        <div
          className="bg-no-repeat bg-cover bg-center relative h-screen overflow-y-hidden"
          style={{
            backgroundImage:
              "url(https://app.signatize.io/assets/media/bg/bg-4.jpg)",
          }}
        >
          <div className="flex items-center justify-center h-screen">
            <section className="flex-1 items-center px-10  hidden md:block">
              <div className="grid gap-y-20  lg:gap-y-28">
                <img
                  className=" w-20 h-20  animate__animated animate__backInRight animate__faster"
                  src={Logo}
                />
                <div className="mt-20 ">
                  <h1 className="text-white 2xl:text-4xl xl:text-3xl font-bold">
                    Welcome to Signatize
                  </h1>
                  <p className="text-white font-semibold text-sm mt-2">
                    The ultimate Email signature creation tool.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-300">
                    © 2021 Signatize
                  </span>
                </div>
              </div>
            </section>
            <form className="z-20">
              <div className="p-4 bg-white md-rounded-l-lg md:h-screen max-w-md py-10 ">
                <div className="flex flex-col items-center">
                  <img
                    className=" w-14 h-14  animate__animated animate__backInRight animate__faster"
                    src={Logo}
                    // width="20"
                  />
                  <h3 className="text-4xl text-gray-800 font-bold">SIGN IN</h3>
                </div>
                <div className="space-y-5 mt-9">
                  {/* LOGIN DATA */}
                  <div className="grid gap-6">
                    <input
                      className=" w-96 text-base px-4 py-2 border border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="email"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.email}</h1>
                    ) : (
                      <h1 className="text-red-400">{emailError}</h1>
                    )}
                    <input
                      className="w-96 content-center text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type={showPassword ? "text" : "password"}
                      placeholder="PASSWORD"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <span class="z-10 h-full  mt-24 ml-80 leading-snug font-normal absolute text-center text-gray-400  bg-transparent rounded text-base">
                      <button onClick={(e) => setShowpassword(!showPassword)}>
                        {showPassword ? (
                          <AiFillEyeInvisible className="w-6 h-6" />
                        ) : (
                          <AiFillEye className="w-6 h-6 text-black" />
                        )}
                      </button>
                    </span>

                    {error ? (
                      <h1 className="text-red-400">{error.password}</h1>
                    ) : (
                      <h1 className="text-red-400">{passwordError}</h1>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-96 flex justify-center bg-green-600  hover:bg-green-900 text-xl text-gray-100 hover:text-white p-3 font-semibold shadow-lg cursor-pointer transition ease-in duration-200"
                      onClick={handleLogin}
                    >
                      {loading ? (
                        <Loading
                          color="white"
                          height={30}
                          weight={30}
                          type="ThreeDots"
                        />
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
