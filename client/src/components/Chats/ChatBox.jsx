import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

export default function ChatBox({ className }) {
  return (
    <div className={`${className}`}>
      <ChatUser />
      <Messages />
      <SendMessage />
    </div>
  );
}
