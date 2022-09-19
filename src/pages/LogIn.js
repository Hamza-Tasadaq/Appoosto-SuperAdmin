import { Link } from "react-router-dom";
import { Input } from "../components";

const LogIn = () => {
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
          <form className="space-y-2.5 mt-4 md:mt-10">
            <div className="flex flex-col space-y-2">
              <label className="text-[#0A111F] font-medium text-base">
                Email address
              </label>
              <Input
                placeholder="example@gmail.com"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[#0A111F] font-medium text-base">
                Password
              </label>
              <Input placeholder="........." name="email" type="password" />
            </div>
            <div className="flex items-center justify-between font-normal text-xs text-[#0A111F]">
              <div className="flex items-center space-x-2">
                <input type={"checkbox"} />
                <label>Remember me?</label>
              </div>
              <h5 className="underline">forgot password</h5>
            </div>

            <Link
              to="/dashboard"
              className="rounded-md block text-center text-[#ffffff] text-base font-semibold bg-[#D85C27] w-full py-2"
            >
              Log In
            </Link>
          </form>

          <div className="mt-4 font-medium">
            <h4 className="text-[#627193] text-sm">Don't have an account?</h4>
            <h6 className="underline text-xs text-[#D85C27]">
              Create new account
            </h6>
          </div>
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
