import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="section-services py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px] aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={400}
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                Why Hire Me <br /> For Your Next{" "}
                <span className="text-[#f41a4a]">Project</span>
              </h4>
            </div>
            <div
              className="bix-banner-line mb-[110px]"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={600}
            >
              <span className="inner-border relative flex justify-center" />
            </div>
          </div>

          <div
            className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={400}
          >
            <div className="bix-services mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-[#c6fbf4]">
              <div className="services-image mt-[-30px] flex justify-center relative">
                <div className="inner-image mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
                  <span className="ring h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]" />
                  <img
                    src="assets/img/services/6.png"
                    alt="services"
                    className="h-[35px] w-[35px] relative z-[1]"
                  />
                </div>
              </div>
              <div className="services-contact p-[30px]">
                <h5 className="mb-[14px] font-montserrat text-[18px] text-[#111a24] font-semibold tracking-[0.03rem] leading-[1.2]">
                  UI Development
                </h5>
                <p className="font-montserrat text-[14px] leading-[20px] text-[#111a24] tracking-[0.03rem]">
                  Reusable UI component for scalable website and web
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={200}
          >
            <div className="bix-services mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-[#edf4b3]">
              <div className="services-image mt-[-30px] flex justify-center relative">
                <div className="inner-image mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
                  <span className="ring h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]" />
                  <Image
                    height={300}
                    width={300}
                    src="/assets/img/services/1.png"
                    alt="services"
                    className="h-[35px] w-[35px] relative z-[1]"
                  />
                </div>
              </div>
              <div className="services-contact p-[30px]">
                <h5 className="mb-[14px] font-montserrat text-[18px] text-[#111a24] font-semibold tracking-[0.03rem] leading-[1.2]">
                  Web App Development
                </h5>
                <p className="font-montserrat text-[14px] leading-[20px] text-[#111a24] tracking-[0.03rem]">
                  Develop maintainable software using modern wen techs such as
                  React & Next JS
                </p>
              </div>
            </div>
          </div>

          <div
            className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={600}
          >
            <div className="bix-services mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-[#ffe5d5]">
              <div className="services-image mt-[-30px] flex justify-center relative">
                <div className="inner-image mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
                  <span className="ring h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]" />
                  <img
                    src="assets/img/services/7.png"
                    alt="services"
                    className="h-[35px] w-[35px] relative z-[1]"
                  />
                </div>
              </div>
              <div className="services-contact p-[30px]">
                <h5 className="mb-[14px] font-montserrat text-[18px] text-[#111a24] font-semibold tracking-[0.03rem] leading-[1.2]">
                  API Integration
                </h5>
                <p className="font-montserrat text-[14px] leading-[20px] text-[#111a24] tracking-[0.03rem]">
                  API integration for making the app full functional and full
                  dynamic web apps & softwares
                </p>
              </div>
            </div>
          </div>
          <div
            className="min-[1200px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px]"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={800}
          >
            <div className="bix-services mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] bg-[#fde4ff]">
              <div className="services-image mt-[-30px] flex justify-center relative">
                <div className="inner-image mt-[-7px] p-[20px] relative bg-[#fff] rounded-[50%]">
                  <span className="ring h-[60px] w-[60px] m-auto border-[1px] border-solid border-[#111a24] absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]" />
                  <img
                    src="assets/img/services/8.png"
                    alt="services"
                    className="h-[35px] w-[35px] relative z-[1]"
                  />
                </div>
              </div>
              <div className="services-contact p-[30px]">
                <h5 className="mb-[14px] font-montserrat text-[18px] text-[#111a24] font-semibold tracking-[0.03rem] leading-[1.2]">
                  Figma to Web Design
                </h5>
                <p className="font-montserrat text-[14px] leading-[20px] text-[#111a24] tracking-[0.03rem]">
                  Taking your site in another level by making pixel perfect
                  Figma to HTML/ React/ Next.Js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
