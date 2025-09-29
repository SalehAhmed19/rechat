import React from "react";
import SearchBox from "../SideBar/SearchBox";
import logo from "../../assets/logo.png";
import User from "../User/User";

export default function SideChat({ className }) {
  return (
    <div className={`${className}`}>
      <img src={logo} alt="logo" className="w-36 mx-auto m-5" />
      <SearchBox />
      <hr className="border-[#333] my-5" />
      <div className="h-[75vh] overflow-y-scroll custom-scroll">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
