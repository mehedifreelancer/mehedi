import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutImage = () => {
  return (
    <div
      className="max-[1199px]:order-1 min-[1200px]:w-[33.33%] min-[992px]:w-[100%] w-full px-[12px] mb-[30px] justify-between"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="600"
    >
      <div className="bix-about-img border-[1px] border-solid border-[#111a24] p-[15px] rounded-[200px] relative max-[1199px]:max-w-fit max-[1199px]:m-auto">
        <Image
          height={700}
          width={700}
          src="/assets/img/about/about.jpg"
          alt="about"
          className="w-full rounded-[200px]"
        />

        <div className="inner-item transition-all duration-[0.3s] ease-in-out h-full absolute top-[0] right-[-7px] flex flex-col justify-center z-[0] opacity-[0]">
          <Link
            className="box-inner my-[20px] relative"
            href="javascript:void(0)"
          >
            <Image
              height={500}
              width={500}
              src="/assets/img/about/item-1.png"
              alt="item-1"
              className="w-[18px] h-[18px] relative z-[1] rounded-[0]"
            />
          </Link>
          <Link
            className="box-inner my-[20px] relative"
            href="javascript:void(0)"
          >
            <Image
              height={500}
              width={500}
              src="/assets/img/about/item-2.png"
              alt="item-2"
              className="white-mode w-[18px] h-[18px] relative z-[1] rounded-[0] inline"
            />
            <Image
              height={500}
              width={500}
              src="/assets/img/about/item-2-dark.png"
              alt="item-2-dark"
              className="dark-mode w-[18px] h-[18px] relative z-[1] rounded-[0] hidden"
            />
          </Link>
          <Link
            className="box-inner my-[20px] relative"
            href="javascript:void(0)"
          >
            <Image
              height={500}
              width={500}
              src="/assets/img/about/item-3.png"
              alt="item-3"
              className="w-[18px] h-[18px] relative z-[1] rounded-[0]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
