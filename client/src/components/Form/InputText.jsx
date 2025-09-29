import React from "react";

export default function InputText({
  lable,
  type,
  placeholder,
  register,
  registerValue,
}) {
  return (
    <div>
      <label className="block text-[#787878] mb-2">{lable}</label>
      <input
        {...register(registerValue)}
        type={type}
        placeholder={placeholder}
        className="border border-[#333] rounded-xl px-5 py-2 focus:outline-2 outline-[#333] w-full"
      />
    </div>
  );
}
