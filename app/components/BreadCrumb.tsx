import React from 'react';

const BreadCrumb = () => {
    return (
        <section className="section-breadcrumb mb-[50px] relative max-[991px]:mb-[40px] max-[767px]:mb-[35px] bg-[url('/assets/img/breadcrumb/bg.jpg')] bg-cover bg-no-repeat bg-center relative bg-blend-overlay">
  <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div className="flex flex-wrap w-full">
      <div className="w-full px-[12px]">
        <div className="bix-breadcrumb mt-[100px] py-[80px] overflow-hidden">
          <div className="breadcrumb-overlay w-full h-full absolute top-[0] bottom-[0] right-[0] left-[0] bg-[#0009] z-[0]" />
          <div className="breadcrumb-contact flex flex-col justify-center items-center z-[12] relative">
            <h4 className="mb-[8px] font-montserrat text-[32px] font-semibold text-[#fff] capitalize tracking-[0.03rem] leading-[1.2] max-[991px]:mb-[4px] max-[991px]:text-[28px] max-[575px]:mb-[0] max-[575px]:text-[22px]">Blog</h4>
            <h5 className="cursor-default text-[#111a24] text-[1.25rem] leading-[1.2]">
              <span className="px-[2px]">
                <a href="index.html" className="font-montserrat leading-[26px] tracking-[0.03rem] text-[15px] font-normal text-[#fff] max-[575px]:text-[14px]">Home</a>
              </span> 
              <span className="px-[2px]">
                <i className="ri-arrow-right-s-line text-[14px] text-[#fff]" />
              </span>
              <span className="disable px-[2px] opacity-[0.7]">
                <a href="javascript:void(0)" className="font-montserrat leading-[26px] tracking-[0.03rem] text-[15px] font-normal text-[#fff] max-[575px]:text-[14px] cursor-default">Blog</a>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default BreadCrumb;