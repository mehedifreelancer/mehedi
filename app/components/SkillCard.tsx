import Image from "next/image";
import Link from "next/link";
import React from "react";

interface skillModel {
  title: string;
  desc: string;
  percent: number;
  iconImage: string;
}
const SkillCard = ({ title, desc, percent, iconImage }: skillModel) => {
  return (
    <>
      <div className="skill-inner-box mb-[10px] p-[5px] flex  relative rounded-[100px] max-[420px]:rounded-[50px] bg-white shadow-md">
        <div className="skill-contact  max-[420px]:flex-col">
          <div className="flex skill-box-contact gap-2  items-center w-full justify-center">
            <Image
              height={300}
              width={300}
              src={iconImage}
              alt="about-logo-5"
              className="w-[50px] h-[50px] object-cover p-[5px] shadow-md rounded-full"
            />
            <h4 className="font-montserrat text-[16px] font-semibold text-[#111a24] ">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
