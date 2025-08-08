import React, { useContext, useState } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFormFilds from "../../Hooks/useFormState";
import { AuthContext } from "../../Context/AuthContext";
import Notify from "../../Utils/Notify";
import Loading from "../../Components/Loading";

const FloatingInput = ({ id, label, type = "text", value, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <label
        htmlFor={id}
        className="absolute transition-all duration-200 left-3 top-3 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:-left-0.4"
      >
        {label}
      </label>
    </div>
  );
};

export default function Login() {
  const { handleToken } = useContext(AuthContext);
  const [filds, handleChange] = useFormFilds({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    handleToken(true)
    // try {
    //   const res = await fetch("https://fakestoreapi.com/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(filds),
    //   });
    //   const data = await res.json();

    //   if (!data?.token) {
    //     throw new Error("The username or password is incorrect!");
    //   }
      
    //   handleToken(data.token);
      
    //   Notify("success", "Welcome to My Blog");
    // } catch (error) {
    //   Notify("error", "Try again");
    // }
    setLoading(false);
  };
  if(loading) return <Loading/>
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl mx-auto gap-10">
        {/* Image */}
        <div className="w-[500px] h-[500px] lg:w-1/2">
          <img
            src="/assets/image/desktop-rgister-2-x2.webp"
            alt="Register visual"
            className="w-[500px] h-[500px] max-w-md mx-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Log in to continue your learning journey
          </h2>

          <div className="bg-white mt-6 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handlesubmit} className="space-y-6">
              {/* username */}
              <FloatingInput
                id="username"
                name='username'
                type='text'
                label="username"
                value={filds.username}
                onChange={handleChange}/>
            {/* password */}
              <FloatingInput
                id="password"
                name='password'
                type='password'
                label="password"
                value={filds.password}
                onChange={handleChange}/>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer"
                  onClick={handlesubmit}>
                  <RxEnvelopeClosed size={20} /> Continue with email
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Other sign up options
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-6 justify-center items-center">
                <button className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-md shadow-sm bg-white hover:bg-purple-100 cursor-pointer">
                  <FcGoogle className="h-6 w-6" />
                </button>
                <button className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-md shadow-sm bg-white hover:bg-purple-100 cursor-pointer">
                  <FaFacebook className="h-6 w-6 text-blue-600" />
                </button>
                <button className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-md shadow-sm bg-white hover:bg-purple-100 cursor-pointer">
                  <FaApple className="h-6 w-6 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="text-[12px] my-6 text-gray-600 text-center">
              By signing up, you agree to our{" "}
              <span className="underline underline-offset-4 text-purple-600 hover:text-purple-500 cursor-pointer">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-4 text-purple-600 hover:text-purple-500 cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>

            {/* Login Link */}
            <div className="mt-6 text-center bg-gray-100 rounded py-5">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signUp"
                  className="font-bold underline underline-offset-4 text-purple-600 hover:text-purple-500">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}