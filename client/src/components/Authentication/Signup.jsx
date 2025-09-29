import axios from "axios";
import logo from "../../assets/logo.png";
import InputText from "../Form/InputText";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../../RTK/features/userSlice";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", ""); // for track password
  watch("confirmPassword", ""); // for track password

  const validatePasswordMatch = (value) => {
    return value === password || "Password doesn't match!";
  };

  const handleSignup = async (credential) => {
    const userInfo = {
      name: credential.name,
      email: credential.email,
      password: credential.password,
      confirmPassword: credential.confirmPassword,
    };
    console.log({ userInfo });

    const response = await dispatch(signupUser(userInfo));

    if (response.meta.requestStatus === "fulfilled") {
      reset();
      navigate("/authentication/login");
      toast.success("Registered Successfully!");
    }

    // const response = await axios.post(
    //   `${api}/user/authentication/signup`,
    //   userInfo
    // );
    // reset();

    // console.log(response.data);
    // return response.data;
  };

  return (
    <div className="bg-[#0D0C0C] text-white p-5 place-content-center h-screen">
      <img src={logo} alt="logo" className="w-36 mx-auto" />

      <h1 className="text-6xl font-bold text-center my-5">
        Create a new account
      </h1>
      <div className="bg-[#111111] w-1/3 mx-auto p-5 rounded-xl">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col gap-5"
        >
          <InputText
            lable={"Name"}
            type={"text"}
            placeholder={"Enter Name"}
            register={register}
            registerValue={"name"}
          />
          {errors.name && (
            <p className="text-red-600 text-sm">Name is required!</p>
          )}
          <InputText
            lable={"Email"}
            type={"email"}
            placeholder={"Enter Email"}
            register={register}
            registerValue={"email"}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">Enter valied email!</p>
          )}
          <InputText
            lable={"Password"}
            type={"password"}
            placeholder={"Enter Password"}
            register={register}
            registerValue={"password"}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">Password is required!</p>
          )}
          <div>
            <label className="block text-[#787878] mb-2">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
              type="password"
              placeholder="Confirm password"
              className="border border-[#333] rounded-full px-5 py-3 focus:outline-2 outline-[#333] w-full"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <button className="bg-blue-600 hover:bg-blue-700 duration-300 rounded-full px-5 py-3 cursor-pointer font-bold">
            Signup
          </button>
        </form>

        <p className="my-5 text-center">
          Already have an account?{" "}
          <Link
            to={"/authentication/login"}
            className="font-bold text-blue-600 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
