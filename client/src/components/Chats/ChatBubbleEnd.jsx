import React from "react";

export default function ChatBubbleEnd() {
  const isSeen = true;
  return (
    <div className="chat chat-end flex flex-col">
      <div className="px-5 py-2 rounded-full bg-blue-600 text-white">
        I hate you!
      </div>
      <div>
        <p className={`text-sm text-[#787878] ${isSeen && "hidden"}`}>
          Sent 12:10 AM
        </p>
      </div>
      <div>
        <img
          src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/555688158_696018043524218_2288990763873226253_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvSRlt_xud6JWzDEDOAEK4xFfW7-Y7sb7EV9bv5juxvhTUc30EgZekpo73PX7kilOXz4npxPELhunyfcsxjQVF&_nc_ohc=pAUiukxqhMAQ7kNvwGJPlRR&_nc_oc=Adl0BbUIOa-o_g_E0Es_Sha85UTG88cgwgH0Z_rgVmB9BIyHw-XgjpCwQM4u-NCDBDA&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=6dpuO4nh6Ylp4Jxk3OGmkQ&oh=00_AfbrJT3DnpUJU7tOYrlK2MvrjtuD8-yAiPSAS2uJYXK2Zg&oe=68DFE3C9"
          alt=""
          className={`w-5 rounded-full mt-2 ${!isSeen && "hidden"}`}
        />
      </div>
    </div>
  );
}
