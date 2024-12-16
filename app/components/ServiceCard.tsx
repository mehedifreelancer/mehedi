import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
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
          Graphics Design
        </h5>
        <p className="font-montserrat text-[14px] leading-[20px] text-[#111a24] tracking-[0.03rem]">
          Develop the Visual Identity of Your Business.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
