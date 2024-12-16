import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardModel {
  title: string;
  stacks: string;
  desc: string;
  screenshot: string;
  liveLink?: string;
}
const ProjectCard = ({
  title,
  stacks,
  desc,
  screenshot,
  liveLink,
}: ProjectCardModel) => {
  return (
    <div className="bix-project-card">
      <div className="project-image relative px-[30px] pb-[30px] overflow-hidden rounded-[30px] z-[1] max-[480px]:px-[20px] max-[480px]:pb-[20px] ">
        <Link
          target="_blank"
          href={`${liveLink}`}
          data-fancybox="gallery"
          className="flex rounded-[30px] overflow-hidden"
        >
          <div className="overlay-project-card transition-all duration-[0.3s] ease-in-out opacity-[0] w-[calc(100%-60px)] h-[calc(100%-30px)] absolute top-[0] right-[30px] rounded-[30px] flex items-center justify-center bg-[#00000080] z-[45] overflow-hidden max-[480px]:p-[0] max-[480px]:w-[calc(100%-40px)] max-[480px]:h-[calc(100%-20px)] max-[480px]:top-[0] max-[480px]:bottom-[0] max-[480px]:right-[20px] max-[480px]:left-[20px] shadow-md p-4"></div>
          <Image
            height={500}
            width={500}
            src={`/assets/img/project/${screenshot}`}
            alt="project-1"
            className="transition-all duration-[0.3s] ease-in-out w-full "
          />
        </Link>
      </div>
      <div className="project-contact pt-[170px] pb-[30px] px-[30px] mt-[-175px] relative z-[0] border-[1px] border-solid border-[#1b1c20] rounded-[30px] max-[480px]:pb-[20px] max-[480px]:px-[20px]">
        <h5 className="mb-[2px] text-[18px] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-medium">
          <Link
            href="single-project.html"
            className="transition-all duration-[0.3s] ease-in-out font-montserrat leading-[26px] tracking-[0.03rem] text-[18px] max-[1399px]:text-[17px] font-semibold text-[#111a24] hover:text-[#f41a4a]"
          >
            {title}
          </Link>
        </h5>
        <span className="font-montserrat font-normal leading-[26px] tracking-[0.02rem] text-[14px] max-[1399px]:text-[14px] text-[#999]">
          <b>Stacks: </b>
          {stacks}
        </span>
        <p className="mt-[4px] font-montserrat text-[14px] font-normal tracking-[0.03rem] leading-[22px] text-[#495461]">
          {desc}
          {/* <Link
            target="_blank"
            href={`${liveLink}`}
            className="text-[#111a24] inline-flex font-medium font-montserrat text-[14px] leading-[26px] tracking-[0.03rem]"
          >
            Read More
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
