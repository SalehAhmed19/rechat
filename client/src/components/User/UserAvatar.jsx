import React from "react";

export default function UserAvatar({ isActive }) {
  return (
    <div className="relative w-16">
      <div
        className={`w-3 h-3 bg-green-600 rounded-full border border-white absolute right-3 top-0 ${
          !isActive && "hidden"
        }`}
      ></div>
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-symbol-image-default-avatar-profile-icon-vector-social-media-user-symbol-209498286.jpg"
        alt="user-avatar"
        className="w-14 rounded-full"
      />
    </div>
  );
}
