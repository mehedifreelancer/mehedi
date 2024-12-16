import React from "react";

const Achivement = () => {
  return (
    <section className="section-achievement relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                What I <span className="text-[#f41a4a]">Achieve</span>
              </h4>
            </div>
            <div
              className="bix-banner-line mb-[110px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <span className="inner-border relative flex justify-center"></span>
            </div>
          </div>
          <div className="w-full px-[12px]">
            <div className="bix-activity-tabs flex flex-col items-center">
              <ul
                className="nav nav-tabs inline-flex flex-wrap justify-center items-center bg-[#fff] border-[1px] border-solid border-[#111a24] rounded-[25px] mb-[30px]"
                id="bix_activity"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <li className="nav-item m-[10px]">
                  <a
                    href="#education"
                    className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item m-[10px]">
                  <a
                    href="#experience"
                    className="py-[5px] px-[15px] rounded-[15px] capitalize font-medium text-[16px] block"
                  >
                    Experience
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-content">
                  {/* <div className="tab-activity-pane" id="education">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full">
                        <div className="bix-achievement relative flex w-full max-[767px]:flex-col">
                          <div className="bix-achievement-inner bix-border-r w-[50%] pr-[30px] border-r-[0.5px] border-solid border-[#111a24] max-[767px]:w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:border-[0] max-[767px]:p-[0]">
                            <div
                              className="bix-achievement-box left border-[1px] border-solid border-[#111a24] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-[767px]:mt-[12px] max-[767px]:mb-[24px]"
                              data-aos="fade-up"
                              data-aos-duration="2000"
                              data-aos-delay="400"
                            >
                              <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] right-[-82px] max-[767px]:block max-[767px]:rotate-[0] max-[767px]:top-[-13px] max-[767px]:left-[45px]">
                                <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[14px]">
                                  2018-2022
                                </span>
                              </div>
                              <h4 className="mb-[8px] font-montserrat text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-[575px]:text-[16px] max-[575px]:leading-[25px]">
                                Bachelor of Science in Computer Science
                                <span className="text-[15px] text-[#555]">
                                  - DIU
                                </span>
                              </h4>
                              <p className="overflow-hidden text-ellipsis flex m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                                Completed my undergraduate studies focusing on
                                software development, including web technologies
                                and system design.
                              </p>
                            </div>
                            <div
                              className="bix-achievement-box left border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-[767px]:mt-[12px] max-[767px]:mb-[24px]"
                              data-aos="fade-up"
                              data-aos-duration="2000"
                              data-aos-delay="600"
                            >
                              <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] right-[-82px] max-[767px]:block max-[767px]:rotate-[0] max-[767px]:top-[-13px] max-[767px]:left-[45px]">
                                <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[14px]">
                                  2016-2018
                                </span>
                              </div>
                              <h4 className="mb-[8px] font-montserrat text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-[575px]:text-[16px] max-[575px]:leading-[25px]">
                                Higher Secondary Certificate
                                <span className="text-[15px] text-[#555]">
                                  - Collegex College
                                </span>
                              </h4>
                              <p className="overflow-hidden text-ellipsis flex m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                                Achieved a strong foundation in science and
                                mathematics, setting the stage for a career in
                                technology.
                              </p>
                            </div>
                          </div>
                          <div className="bix-achievement-inner bix-border-l w-[50%] pl-[30px] border-l-[0.5px] border-solid border-[#111a24] max-[767px]:w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:border-[0] max-[767px]:p-[0]">
                            <div
                              className="bix-achievement-box right border-[1px] border-solid border-[#111a24] mt-[150px] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-[767px]:mt-[12px] max-[767px]:mb-[24px]"
                              data-aos="fade-up"
                              data-aos-duration="2000"
                              data-aos-delay="500"
                            >
                              <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] left-[-82px] max-[767px]:block max-[767px]:rotate-[0] max-[767px]:top-[-13px] max-[767px]:left-[45px]">
                                <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[14px]">
                                  2014-2016
                                </span>
                              </div>
                              <h4 className="mb-[8px] font-montserrat text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-[575px]:text-[16px] max-[575px]:leading-[25px]">
                                Secondary School Certificate
                                <span className="text-[15px] text-[#555]">
                                  - Bepza
                                </span>
                              </h4>
                              <p className="overflow-hidden text-ellipsis flex m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                                Focused on foundational studies, excelling in
                                academic performance.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="tab-activity-pane" id="experience">
                    <div className="flex flex-wrap w-full">
                      <div className="w-full px-[12px]">
                        <div className="bix-achievement relative flex w-full max-[767px]:flex-col">
                          <div className="bix-achievement-inner bix-border-r w-[50%] pr-[30px] border-r-[0.5px] border-solid border-[#111a24] max-[767px]:w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:border-[0] max-[767px]:p-[0]">
                            <div
                              className="bix-achievement-box left mt-[150px] border-[1px] border-solid border-[#111a24] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-[767px]:mt-[12px] max-[767px]:mb-[24px]"
                              data-aos="fade-up"
                              data-aos-duration="2000"
                              data-aos-delay="400"
                            >
                              <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] right-[-82px] max-[767px]:block max-[767px]:rotate-[0] max-[767px]:top-[-13px] max-[767px]:left-[45px]">
                                <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[14px]">
                                  24 Apr 2021 - 1 Nov 2021
                                </span>
                              </div>
                              <h4 className="mb-[8px] font-montserrat text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-[575px]:text-[16px] max-[575px]:leading-[25px]">
                                Front & Back-End Developer
                                <span className="text-[15px] text-[#555]">
                                  - Digital Consulting
                                </span>
                              </h4>
                              <p className="overflow-hidden text-ellipsis flex m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                                Worked on both front-end and back-end systems,
                                ensuring robust and scalable application
                                performance.
                              </p>
                            </div>
                          </div>
                          <div className="bix-achievement-inner bix-border-l w-[50%] pl-[30px] border-l-[0.5px] border-solid border-[#111a24] max-[767px]:w-full max-[767px]:flex max-[767px]:flex-col max-[767px]:border-[0] max-[767px]:p-[0]">
                            <div
                              className="bix-achievement-box right mt-[150px] border-[1px] border-solid border-[#111a24] p-[30px] rounded-[30px] bg-[#f7f5fb] relative max-[767px]:mt-[12px] max-[767px]:mb-[24px]"
                              data-aos="fade-up"
                              data-aos-duration="2000"
                              data-aos-delay="500"
                            >
                              <div className="achievement-year w-[100px] h-full absolute top-[0] flex items-center justify-center rotate-[270deg] z-[1] left-[-82px] max-[767px]:block max-[767px]:rotate-[0] max-[767px]:top-[-13px] max-[767px]:left-[45px]">
                                <span className="bg-[#111a24] text-[#fff] border-[1px] border-solid border-[#111a24] rounded-[10px] leading-[1] py-[3px] px-[10px] font-montserrat font-normal tracking-[0.02rem] text-[14px]">
                                  5 Nov 2021 - Continuing
                                </span>
                              </div>
                              <h4 className="mb-[8px] font-montserrat text-[18px] font-semibold leading-[26px] text-[#111a24] tracking-[0.03rem] max-[575px]:text-[16px] max-[575px]:leading-[25px]">
                                Front-End Developer
                                <span className="text-[15px] text-[#555]">
                                  - BYSL
                                </span>
                              </h4>
                              <p className="overflow-hidden text-ellipsis flex m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                                Leading front-end development for modern web
                                applications, focusing on user interfaces and
                                performance optimization.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
