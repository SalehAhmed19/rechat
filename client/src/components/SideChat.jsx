import React from "react";
import SearchBox from "./SearchBox";
import logo from "../assets/logo.png";

export default function SideChat({ className }) {
  return (
    <div className={`${className}`}>
      <img src={logo} alt="logo" className="w-36 mx-auto m-5" />
      <SearchBox />
    </div>
  );
}
