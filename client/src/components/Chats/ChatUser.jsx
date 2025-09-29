import React from "react";
import UserAvatar from "../User/UserAvatar";

export default function ChatUser() {
  const isActive = true;
  return (
    <div className="flex items-center gap-3 border-b border-[#333] p-5 bg-[#141414]">
      <UserAvatar isActive={isActive} />
      <div>
        <h5 className="font-bold text-xl">Saleh Ahmed Mahin</h5>
        <p className="text-sm text-[#787878]">Active Now</p>
      </div>
    </div>
  );
}
