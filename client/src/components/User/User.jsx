import UserAvatar from "./UserAvatar";
import UserInfoChatLatest from "./UserInfoChatLatest";

export default function User() {
  const isActive = true;
  return (
    <div className="flex items-center gap-3 hover:bg-[#1e1e1e] p-5 rounded-2xl cursor-pointer duration-400">
      <UserAvatar isActive={isActive} />
      <UserInfoChatLatest />
    </div>
  );
}
