import { DoorOpenIcon } from "@phosphor-icons/react";

export default function Logout() {
  return (
    <div>
      <button className="cursor-pointer hover:bg-[#333] duration-300 h-14 w-14 rounded-full">
        <DoorOpenIcon size={32} className="mx-auto text-red-600" />
      </button>
    </div>
  );
}
