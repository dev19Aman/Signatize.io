import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { baseUrl } from "../../services/BaseUrl";
import Logo from "../../logo.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (name == "") {
      setNameError("Please enter name");
    } else if (email == "") {
      setEmailError("Please enter email");
    } else if (password == "") {
      setPasswordError("Please enter Password");
    } else {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/signup`, {
          name,
          email,
          password,
          error,
        });

        console.log(response);

        if (response.data.status == 200) {
          setLoading(false);
          history.push("/home");
        } else {
          setLoading(false);
          setError(response.data.error);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <main>
        <div
          class="bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://app.signatize.io/assets/media/bg/bg-4.jpg)",
          }}
        >
          <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
          <div class="min-h-screen sm:flex  justify-end">
            <section className="flex-1 items-center px-10 mt-16">
              <div className="grid gap-y-64">
                <img
                  className=" w-20 h-20 animate__animated animate__backInRight animate__faster"
                  src={Logo}
                />
                <div className="mt-24 ">
                  <h1 className="text-white text-3xl font-bold">
                    Welcome to Signatize
                  </h1>
                  <p className="text-white font-semibold text-sm mt-5">
                    The ultimate Bootstrap, Angular 8, React & VueJS admin theme
                    framework for next <br />
                    generation web apps.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-300">
                    © 2021 Signatize
                  </span>
                </div>
              </div>
            </section>
            <form class="z-20">
              <div class="p-4 bg-white mx-auto rounded-l-lg w-full min-h-screen ">
                <div class="text-center mt-6">
                  <h3 class="text-4xl text-gray-800 font-bold">SIGNATIZE</h3>
                </div>
                <div class="space-y-5 mt-14">
                  {/* SIGN DATA */}
                  <div className="grid gap-6">
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="text"
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.name}</h1>
                    ) : (
                      <h1 className="text-red-400">{nameError}</h1>
                    )}
                    <input
                      class=" w-96 text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
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
                      class="w-96 content-center text-base px-4 py-2 border  border-gray-300 border-t-0 border-r-0 border-l-0  focus:outline-none focus:border-gray-400"
                      type="password"
                      placeholder="PASSWORD"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error ? (
                      <h1 className="text-red-400">{error.password}</h1>
                    ) : (
                      <h1 className="text-red-400">{passwordError}</h1>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full flex justify-center bg-green-600  hover:bg-green-800 text-xl text-white p-3 font-semibold  shadow-lg cursor-pointer transition ease-in duration-200"
                      onClick={handleSignup}
                    >
                      {loading ? (
                        <Loading
                          color="white"
                          height={30}
                          weight={30}
                          type="ThreeDots"
                        />
                      ) : (
                        "SIGNUP"
                      )}
                    </button>
                  </div>
                  <div class="float-right ">
                    <Link
                      to="/"
                      class="flex items-center gap-2 text-gray-400 hover:text-red-500 font-semibold"
                    >
                      <VscAccount />
                      ALREADY HAVE AN ACCOUNT?
                    </Link>
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

export default Signup;
