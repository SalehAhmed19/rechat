import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  return (
    <div className="p-5">
      <input
        onChange={(e) => handleSearch(e)}
        type="text"
        className="border border-[#333] px-5 py-2 rounded-full focus:outline-2 outline-[#333] w-full"
        placeholder="Search..."
      />
    </div>
  );
}
