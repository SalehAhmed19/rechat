import React from "react";
import ChatBubbleEnd from "./ChatBubbleEnd";
import ChatBubbleStart from "./ChatBubbleStart";

export default function Messages() {
  return (
    <div className="h-[83vh] overflow-y-scroll custom-scroll p-5">
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
      <ChatBubbleEnd />
      <ChatBubbleStart />
    </div>
  );
}
