import Image from "next/image";
import React from "react";

const AboutDesc = () => {
  return (
    <div className="bix-about-contact h-full flex flex-col justify-center">
      <h5 className="mb-[24px] font-montserrat text-[37px] font-bold text-[#fff] tracking-[0.08rem] opacity-[0.5] leading-[1.2] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[575px]:text-[28px] max-[420px]:text-[22px]">
        “A passionate Front-End Developer with Back-End Experience..”
      </h5>
      <p className="mb-[16px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
        What an excellent time to get meet with you friend! 🙂. I am Mehedi
        Hasan. I am a Front-End web developer with Back-End experience. I love
        to play with javascript and that is the reason why I like Front-End.
        Having skill on Back-End (such as Php, Laravel & Mysql DB) made my skill
        level up as a Front-End developer to gather sound knowledge about API
        and handling data from server , team work with Back-End team as well. I
        am so pleased as your eyes focused on my portfolio.
      </p>
      <div className="about-name">
        <h6 className="mb-[0] font-montserrat text-[16px] text-[#111a24] font-bold tracking-[0.03rem] leading-[1.2]">
          Sr. Developer
        </h6>
        <p className="text-[14px] text-[#555] mb-[16px] font-montserrat font-normal leading-[26px] tracking-[0.03rem]">
          Ahmad Khan
        </p>
        <div className="inner-sign-items">
          <Image
            height={300}
            width={300}
            src="/assets/img/about/sign.png"
            alt="sign"
            className="white-mode w-[120px] inline"
          />
          <Image
            height={300}
            width={300}
            src="/assets/img/about/sign-dark.png"
            alt="sign"
            className="dark-mode w-[120px] hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDesc;
