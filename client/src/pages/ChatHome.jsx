import React from "react";
import SideChat from "../components/SideBar/SideChat";
import ChatBox from "../components/Chats/ChatBox";
import Logout from "../components/Authentication/Logout";

export default function ChatHome() {
  return (
    <div className="flex text-white">
      <div className="bg-[#0D0C0C] w-[4%] flex flex-col justify-end items-center h-screen py-5">
        <Logout />
      </div>
      <div className="grid grid-cols-5 h-screen w-full">
        <SideChat
          className={"col-span-1 border-r border-[#333] bg-[#141414]"}
        />{" "}
        <ChatBox className={"col-span-4 border-l border-[#333] bg-[#0d0c0c]"} />
      </div>
    </div>
  );
}
