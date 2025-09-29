import React from "react";
import { LinkSimpleIcon, PaperPlaneRightIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

export default function SendMessage() {
  const { register, handleSubmit, reset } = useForm();
  //   const [imagePreview, setImagePreview] = useState(null);
  const onSubmit = (message) => {
    console.log(message);
    reset();
  };

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setImagePreview(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     } else {
  //       setImagePreview(null);
  //     }
  //   };
  return (
    <div className="">
      {/* {imagePreview && (
        <img
          src={imagePreview}
          alt="image-preview"
          className="w-20 bg-[#333] p-2 rounded-2xl m-5 absolute bottom-10 right-0"
        />
      )} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 flex items-center gap-5"
      >
        <div>
          <label htmlFor="file">
            <LinkSimpleIcon size={32} />
          </label>
          <input
            {...register("photo")}
            type="file"
            id="file"
            className="hidden"
            // onChange={(e) => {
            //   handleFileChange(e);
            // }}
          />
        </div>

        <input
          {...register("message")}
          type="text"
          placeholder="Write message.."
          className="border border-[#333] rounded-full px-5 py-3 w-full outline-2 outline-[#333]"
        />

        <button className="bg-blue-600 rounded-full p-3 cursor-pointer hover:bg-blue-700 duration-300">
          <PaperPlaneRightIcon size={32} />
        </button>
      </form>
    </div>
  );
}
