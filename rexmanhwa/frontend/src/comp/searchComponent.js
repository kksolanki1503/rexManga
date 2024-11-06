import Search from "antd/es/input/Search";
import { useStore } from "../hooks/useStore";
import axios from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const { setAllMangaData } = useStore();

  const navigate = useNavigate();
  const handleSearch = async (searchUrl) => {
    navigate(`search/${searchUrl}`);
  };

  return (
    <Search
      placeholder="Search ..."
      enterButton="Search"
      size="middle"
      // maxLength={200}
      // width={100}
      className="w-[400px]"
      onSearch={handleSearch}
    />
  );
};
export default SearchComponent;
