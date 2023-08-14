import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useHospitalsData } from "./hooks";

const SearchBar = () => {
  const { data, fetchHospitals } = useHospitalsData;
  const handleChange = (e) => {};
  const handleSearch = async () => {
    fetchHospitals();
  };
  return (
    <div className="flex flex-col ml-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search..."
          className="border border-white mr-2 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline text-blue-600"
        />
        <button type="submit" className="bg-red">
          <AiOutlineSearch size={25} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
