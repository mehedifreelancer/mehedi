import Link from "next/link";
import React from "react";

const GoToTop = () => {
  return (
    <Link
      href="#Top"
      className="back-to-top result-placeholder  w-[38px] h-[38px] fixed right-[15px] bottom-[15px] z-[10] rounded-[20px] cursor-pointer bg-[#fff] text-[#f41a4a] border-[1px] border-solid border-[#f41a4a] text-center text-[22px] leading-[1.6]"
    >
      <i className="ri-arrow-up-line text-[20px]"></i>
      <div className="back-to-top-wrap active-progress">
        <svg
          viewBox="-1 -1 102 102"
          className="w-[36px] h-[36px] fixed right-[16px] bottom-[16px]"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            className="fill-transparent stroke-[#f41a4a] stroke-[5px]"
          />
        </svg>
      </div>
    </Link>
  );
};

export default GoToTop;
