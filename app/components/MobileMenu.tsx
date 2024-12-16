import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="bix-sidebar-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[42]"></div>
      <div
        id="in_mobile_menu"
        className="bix-side-cart bix-mobile-menu transition-all duration-[0.3s] ease-in-out w-[300px] h-full pt-[15px] px-[20px] pb-[20px] fixed top-[0] right-auto left-[0] bg-[#fff] translate-x-[-100%] flex flex-col z-[43] overflow-auto"
      >
        <div className="bix-menu-title w-full pb-[20px] flex flex-wrap justify-between">
          <div className="menu-title flex items-center">
            <h4 className="relative border-[0] font-montserrat text-[17px] font-semibold leading-[1] text-[#1b1c20] bg-transparent tracking-[0.03rem]">
              Menu
            </h4>
          </div>
          <button
            type="button"
            className="bix-close relative border-[0] text-[30px] leading-[1] text-[#ff0000] bg-transparent "
          >
            ×
          </button>
        </div>
        <div className="bix-menu-inner">
          <div className="bix-menu-content">
            <ul>
              <li className="nav-item relative">
                <Link
                  href="index.html"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item relative">
                <Link
                  href="about.html"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  About
                </Link>
              </li>
              <li className="nav-item relative">
                <Link
                  href="projects.html"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  projects
                </Link>
              </li>
              <li className="nav-item relative">
                <Link
                  href="services.html"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item relative">
                <Link
                  href="resume.html"
                  className="nav-link mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item dropdown drop-list relative">
                <Link
                  href="javascript:void(0)"
                  className="nav-link dropdown-arrow mb-[12px] py-[8px] px-[16px] block capitalize text-[#777] border-[1px] border-solid border-[#eae8ef] rounded-[10px] font-montserrat leading-[26px] text-[14px] font-medium tracking-[0.03rem]"
                >
                  pages
                </Link>
                <ul className="sub-menu w-full hidden min-w-auto p-[0] mb-[0]">
                  <li className="relative">
                    <Link
                      href="single-project.html"
                      className="text-[14px] py-[8px] px-[16px] block capitalize font-montserrat text-[#777] leading-[26px] font-normal tracking-[0.03rem]"
                    >
                      Single Project
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="blog.html"
                      className="text-[14px] py-[8px] px-[16px] block capitalize font-montserrat text-[#777] leading-[26px] font-normal tracking-[0.03rem]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      href="blog-detail.html"
                      className="text-[14px] py-[8px] px-[16px] block capitalize font-montserrat text-[#777] leading-[26px] font-normal tracking-[0.03rem]"
                    >
                      Blog Detail
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
