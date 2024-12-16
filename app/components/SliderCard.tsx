import Image from "next/image";
import React from "react";

interface SliderCardModel {
  review: any;
}
const SliderCard = ({ review }: SliderCardModel) => {
  return (
    <div className="bix-testimonials-inner max-w-[900px] m-auto max-[1399px]:max-w-[800px]">
      <div className="flex flex-wrap w-full mb-[20px]">
        <div className="min-[768px]:w-[33.33%] w-full px-[12px]">
          <div className="testimonials-image relative max-[767px]:w-full max-[767px]:mb-[20px] max-[767px]:flex max-[767px]:justify-center">
            <Image
              height={300}
              width={300}
              src={
                review.clientImage
                  ? `/assets/img/testimonials/${review.clientImage}`
                  : "/assets/img/testimonials/default.jpg"
              }
              alt={review.clientName}
              className="w-full rounded-[20px] max-[767px]:max-w-[80px]"
            />
          </div>
        </div>
        <div className="min-[768px]:w-[66.66%] w-full px-[12px]">
          <div className="testimonials-contact h-full flex flex-col justify-end">
            <h4 className="mb-[8px] font-montserrat text-[20px] text-[#111a24] font-semibold leading-[1.2] tracking-[0.03rem] max-[767px]:mb-[4px] max-[767px]:text-[18px] max-[767px]:text-center">
              {review.clientName}
            </h4>
            <span className="font-montserrat font-normal text-[16px] leading-[26px] tracking-[0.02rem] text-[#999] max-[767px]:text-[14px] max-[767px]:text-center">
              {review.countryName}
            </span>
            <div className="inner-contact mt-[10px] border-[1px] border-solid border-[#111a24] p-[20px] bg-[#fff] rounded-[20px]">
              <p className="m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                "{review.comment}"
              </p>
              <div className="flex items-center mt-[10px]">
                <Image
                  height={20}
                  width={30}
                  src={`/assets/img/flags/${review.countryFlag}`}
                  alt={review.countryName}
                  className="mr-[10px]"
                />
                <span className="text-[#495461] text-[14px]">
                  {review.commentedOn}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
