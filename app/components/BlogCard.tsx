import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div
      className="bix-blog-box mt-[50px] p-[20px] relative border-[1px] border-solid border-[#111a24] rounded-[30px] flex max-[1199px]:flex-col max-[1199px]:mt-[0] max-[767px]:max-w-[430px] max-[767px]:my-[0] max-[767px]:mx-auto "
      data-aos="fade-up"
      data-aos-duration={2000}
      data-aos-delay={600}
    >
      <div className="blog-img mr-[10px] absolute w-[200px] top-[-54px] left-[20px] right-[20px] max-[1199px]:mr-[0] max-[1199px]:mb-[10px] max-[1199px]:relative max-[1199px]:w-auto max-[1199px]:top-[0] max-[1199px]:left-[0] max-[1199px]:right-[0]">
        <Image
          height={500}
          width={500}
          src="/assets/img/blog/2.jpg"
          alt="blog-2"
          className="w-[200px] rounded-[30px] max-[1199px]:w-full"
        />
      </div>
      <div className="blog-contact ml-[20px] pl-[200px] flex flex-col justify-center max-[1199px]:ml-[0] max-[1199px]:pl-[0]">
        <span className="font-montserrat font-normal leading-[26px] tracking-[0.02rem] text-[13px] text-[#999]">
          Business
        </span>
        <h4 className="mb-[8px] overflow-hidden text-ellipsis flex text-[calc(1.275rem+.3vw)] text-[#111a24] tracking-[0.03rem] leading-[1.2]">
          <a
            href="blog-detail.html"
            className="transition-all duration-[0.3s] ease-in-out font-montserrat text-[18px] leading-[26px] tracking-[0.03rem] font-semibold text-[#111a24] hover:text-[#f41a4a]"
          >
            Best Way to solve Business deal.
          </a>
        </h4>
        <p className="overflow-hidden text-ellipsis flex font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
          Lorem ipsum dolor sit amet consectetur maiores doloremque explicabo
          neque pariatur officia voluptates aut illum!
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
