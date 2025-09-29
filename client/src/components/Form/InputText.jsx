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
        {...register(registerValue, { required: true })}
        type={type}
        placeholder={placeholder}
        className="border border-[#333] rounded-full px-5 py-3 focus:outline-2 outline-[#333] w-full"
      />
    </div>
  );
}
