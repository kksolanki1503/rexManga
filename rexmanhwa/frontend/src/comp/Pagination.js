import React from "react";
import { Pagination } from "antd";
const CustomPagination = ({ currPage, setCurrPage, totalPage }) => {
  const handleChange = (pageNo) => {
    setCurrPage(pageNo);
    // console.log(pageNo, "pageData");
  };
  console.log(totalPage, "totalPage");
  return (
    <Pagination
      //   defaultCurrent={currPage}
      current={currPage}
      total={totalPage}
      pageSize={1}
      onChange={handleChange}
    />
  );
};
export default CustomPagination;
