import Image from "next/image";
import React from "react";

const heroData = {
  firstName: "Mehedi",
  lastName: "Hasan",
  post: "Front End Web App Developer",
};

const Hero = () => {
  return (
    <section
      className="section-hero h-[800px] mt-[100px] relative pb-[50px] pt-[100px] max-[991px]:h-auto max-[991px]:mt-[95px] max-[991px]:pb-[40px] max-[991px]:pt-[80px] max-[767px]:pb-[35px] max-[767px]:pt-[70px]"
      id="home"
    >
      <div className="first-name top-[0] leading-none absolute font-montserrat text-[200px] font-black text-[#fff] opacity-[0.04] max-[991px]:text-[130px] max-[991px]:top-[30px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
        {heroData.firstName}
      </div>
      <div className="last-name bottom-[0] right-[0] absolute font-montserrat text-[200px] font-black text-[#fff] opacity-[0.04] max-[991px]:bottom-[250px] max-[991px]:text-[130px] max-[575px]:text-[100px] max-[460px]:text-[70px]">
        Hasan
      </div>
      <div className="flex h-full flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div
              className="bix-hero-img relative"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <div className="hero-inner-img relative">
                <Image
                  height={1000}
                  width={1200}
                  src="/assets/img/hero/hero.png"
                  alt="hero"
                  data-offset="30"
                  className="hero-parallax "
                />
              </div>
            </div>
          </div>
          <div className="min-[992px]:w-[50%] w-full px-[12px]">
            <div className="bix-hero-contact h-full flex flex-col justify-center relative max-[991px]:mt-[15px] max-[991px]:pb-[30px] max-[991px]:items-center max-[575px]:text-center">
              <h4
                className="mb-[8px] font-montserrat tracking-[0.03rem] leading-[1.2] text-[35px] font-bold text-[#f41a4a] max-[1399px]:text-[32px] max-[1199px]:text-[28px] max-[767px]:text-[24px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
              >
                Hi, I am
              </h4>
              <h1
                className="mb-[16px] text-[78px] text-[#111a24] font-bold relative tracking-[0.03rem] leading-[1.2] max-[1399px]:text-[70px] max-[1199px]:text-[52px] max-[767px]:text-[38px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="700"
              >
                {`${heroData.firstName} ${heroData.lastName}`}
              </h1>
              <p
                className="font-montserrat text-[27px] font-semibold text-[#111a24] leading-[26px] tracking-[0.03rem] max-[1399px]:text-[24px] max-[1199px]:text-[20px] max-[767px]:text-[18px]"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="800"
              >
                I am a
                <span className="mx-[5px] text-[#f41a4a]">{heroData.post}</span>
              </p>
              <div
                className="bix-buttons m-[-10px] pt-[50px] flex flex-wrap relative max-[991px]:pt-[20px] max-[575px]:justify-center"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="900"
              >
                {/* <button
                  type="button"
                  className="bix-button m-[10px] transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                >
                  Download CV
                </button>
                <button
                  type="button"
                  className="modal-trigger bix-modal-toggle bix-button m-[10px] transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                >
                  Hire Me <i className="ri-arrow-right-up-line"></i>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
