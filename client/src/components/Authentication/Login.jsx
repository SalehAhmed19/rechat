import React from "react";
import logo from "../../assets/logo.png";
import InputText from "../Form/InputText";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const handleLogin = (credential) => {
    console.log(credential);
    reset();
  };
  return (
    <div className="bg-[#0D0C0C] text-white p-5 place-content-center h-screen">
      <img src={logo} alt="logo" className="w-36 mx-auto" />

      <h1 className="text-6xl font-bold text-center my-5">Login Here</h1>
      <div className="bg-[#111111] w-1/3 mx-auto p-5 rounded-xl">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-5"
        >
          <InputText
            lable={"Email"}
            type={"email"}
            placeholder={"Enter Email"}
            register={register}
            registerValue={"email"}
          />
          <InputText
            lable={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            register={register}
            registerValue={"password"}
          />

          <button className="bg-blue-600 hover:bg-blue-700 duration-300 rounded-full px-5 py-3 cursor-pointer font-bold">
            Signup
          </button>
        </form>

        <p className="my-5 text-center">
          Don't have an account?{" "}
          <Link to={"/"} className="font-bold text-blue-600 cursor-pointer">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
