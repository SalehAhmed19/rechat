import React from "react";
import SideChat from "../components/SideChat";
import ChatBox from "../components/ChatBox";

export default function ChatHome() {
  return (
    <div className="grid grid-cols-5 h-screen text-white">
      <SideChat
        className={"col-span-1 border-r border-[#333] bg-[#141414] p-5"}
      />{" "}
      <ChatBox className={"col-span-4 border-l border-[#333] bg-[#0d0c0c]"} />
    </div>
  );
}
