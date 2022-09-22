import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphQl/Mutation";
import { LoginInput } from "../components";
import { setItem, getItem } from "../services/LocalStorage";

const LogIn = () => {
  const navigate = useNavigate();
  const [login] = useMutation(LOGIN_USER);

  // const [checked, setChecked] = useState < boolean > true;

  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    const response = getItem("credentials");
    if (response) {
      const { email, password } = response;
      setFormData({
        email,
        password,
        rememberMe: true,
      });
    } else {
      console.log(response);
    }
  }, []);

  const changeHandler = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setShowErrors(false);
      try {
        const { email, password, rememberMe } = formData;
        const { data } = await login({
          variables: {
            email,
            password,
          },
        });
        console.log(data);
        // Login SuccessFull
        if (data.login) {
          // If remeber me is clicked then store the credentials
          if (rememberMe) {
            setItem("credentials", {
              email,
              password,
            });
          }
          setItem("token", data.login);
          setItem("isAuthenticated", true);

          navigate("/dashboard");
        } else {
          // Login Failure
          toast.error("Wrong Credentials", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setShowErrors(true);
    }
  };

  return (
    <div
      className={
        "flex flex-col-reverse md:flex-row  px-3 py-2 md:p-0 min-h-screen"
      }
    >
      <div className="self-center md:max-w-md w-full">
        <div className="py-2 md:py-0 px-3 sm:px-6 md:px-10">
          <img src="./assets/icons/logo.svg" alt="logo" />
          <h1 className="font-semibold my-3 md:my-5 text-2xl text-[#0A111F]">
            Sign in to your Account
          </h1>
          <form onSubmit={submitHandler} className="space-y-2.5 mt-4 md:mt-10">
            <div className="flex flex-col space-y-2">
              <label className="text-[#0A111F] font-medium text-base">
                Email address
              </label>
              <LoginInput
                value={formData.email}
                classes={showErrors && formData.email === "" && "border-[red]"}
                onChange={changeHandler}
                placeholder="example@gmail.com"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[#0A111F] font-medium text-base">
                Password
              </label>
              <LoginInput
                classes={
                  showErrors && formData.password === "" && "border-[red]"
                }
                value={formData.password}
                onChange={changeHandler}
                placeholder="........."
                name="password"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between font-normal text-xs text-[#0A111F]">
              <div className="flex items-center space-x-1">
                <input
                  id="rememberme"
                  type={"checkbox"}
                  checked={formData.rememberMe}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      rememberMe: !formData.rememberMe,
                    });
                  }}
                />
                <label htmlFor="rememberme">Remember me?</label>
              </div>
              <h5 className="underline">forgot password</h5>
            </div>

            <button
              onClick={submitHandler}
              type="submit"
              className="rounded-md block text-center text-[#ffffff] text-base font-semibold bg-[#D85C27] w-full py-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#0C234C] rounded-t-md md:rounded-none p-10 md:h-screen flex items-center justify-center flex-1">
        <div className="px-10 max-w-[576px] w-full">
          <img
            className="  w-full"
            src="./assets/images/login-banner.png"
            alt="login-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
