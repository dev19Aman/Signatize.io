import Loading from "Pages/Login/Loading";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplateFromApi } from "redux/templateSlice";

function Pagination({ pageActive, data, pageData, userLength }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(pageData.length / userLength); i++) {
    pages.push(i);
  }
  const previousHandler = () => {
    if (data > 1) {
      pageActive(data - 1);
    }
  };
  // console.log(pages.length);
  const nextHandler = () => {
    if (data >= pages.length) {
      return 0;
    } else {
      pageActive(data + 1);
    }
  };

  const { apiTemplate } = useSelector((state) => state.template);
  // const [pageSate, setPage] = useState(false)

  // console.log("ok", apiTemplate);

  return (
    <>
      {apiTemplate.length <= 0 ? (
        <center>
          <div style={{ marginTop: "12%" }}>
            <Loading type="ThreeDots" color="#777" width={80} height={50} />
          </div>
        </center>
      ) : (
        <div className="w-full py-3 mt-3 flex justify-center items-center">
          <button
            className="px-2 py-1 border border-green-500 rounded-md text-black"
            onClick={previousHandler}
          >
            Previous
          </button>
          <button
            className="px-4 py-1 ml-12 border border-green-500 rounded-md text-black"
            onClick={nextHandler}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Pagination;
