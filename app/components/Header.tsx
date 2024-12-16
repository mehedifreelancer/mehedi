import { NavbarModel } from "@/types/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navData: NavbarModel[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about-mehedi",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  // {
  //   label: "Career",
  //   link: "/career",
  // },
  // {
  //   label: "Resume",
  //   link: "/resume",
  // },
  //   {
  //     label: "Blog",
  //     link: "/blog",
  //   },
];

interface HeaderModel {
  currentPathName: string;
}

const Header = ({ currentPathName }: HeaderModel) => {
  return (
    <header className="bix-static transition-all duration-[0.3s ] ease-in-out py-[30px] fixed top-[0] right-[0] left-[0] z-[20]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <nav className="navbar navbar-expand-lg bix-navbar transition-all duration-[0.3s] ease-in-out p-[15px] bg-[#f8f6fc] border-[1px] border-solid border-[#111a24] rounded-[30px] relative z-[3] flex items-center justify-between max-[992px]:flex-nowrap">
              <Link className="navbar-brand" href="/">
                <h2 className="font-bold text-[22px]">
                  Dev-<span className="text-[#f41a4a]">Mehedi</span>
                </h2>
              </Link>
              <button
                className="navbar-toggler min-[992px]:hidden w-[40px] h-[40px] flex items-center justify-center rounded-[50%] text-[#111a24] border-[1px] border-solid border-[#111a24] text-[1.25rem] bg-transparent"
                type="button"
                title="navbar-toggler"
              >
                <i className="ri-menu-2-line"></i>
              </button>
              <div
                className="bix-main-menu flex relative justify-end max-[991px]:hidden"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-[0] pl-[0] flex flex-wrap min-[992px]:flex-row">
                  {navData?.map((item: NavbarModel, index: number) => (
                    <li
                      key={index}
                      className={`nav-item transition-all duration-[0.3s] ease-in-out ml-[30px] ${
                        currentPathName === item.link ? "active" : ""
                      } `}
                    >
                      <Link
                        className="nav-link transition-all duration-[0.3s] ease-in-out font-montserrat tracking-[0.03rem] p-[0] text-[15px] font-medium leading-[40px] capitalize text-[#1b1c20] flex items-center relative hover:text-[#f41a4a]"
                        href={item?.link}
                      >
                        {item?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
