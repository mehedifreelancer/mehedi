import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Resume = () => {
    return (
<section className="section-resume pt-[50px] pb-[100px] max-[991px]:pt-[40px] max-[991px]:pb-[80px] max-[767px]:pt-[35px] max-[767px]:pb-[70px]">
  <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    <div className="flex flex-wrap w-full">
      <div className="min-[992px]:w-[33.33%] w-full px-[12px]">
        <div className="bix-resume-sidebar border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb] max-[991px]:hidden">
          <div className="inner-img pt-[24px] px-[24px] max-[575px]:pt-[15px] max-[575px]:px-[15px]">
            <Image height={300} width={300} src="/assets/img/resume/resume.jpg" alt="resume" className="w-full rounded-[20px]" />
          </div>
          <div className="inner-contact border-b-[1px] border-solid border-[#eae8ef] p-[24px]">
            <div className="resume-title mb-[12px]">
              <h4 className="font-montserrat text-[17px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] tracking-[0.03rem]"><i className="ri-contacts-fill mr-[10px]" />Contact</h4>
            </div>
            <div className="resume-contact-info">
              <ul className="m-[0] p-[0]">
                <li className="py-[5px]"><i className="ri-phone-line text-[15px] font-medium text-[#777] mr-[10px]" /><Link  href="javascript:void(0)" className="text-[15px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.03rem]">+91 1234567890</Link ></li>
                <li className="py-[5px]"><i className="ri-mail-open-line text-[15px] font-medium text-[#777] mr-[10px]" /><Link  href="javascript:void(0)" className="text-[15px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.03rem]">jennybrown@gmail.com</Link ></li>
                <li className="py-[5px]"><i className="ri-link text-[15px] font-medium text-[#777] mr-[10px]" /><Link  href="javascript:void(0)" className="text-[15px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.03rem]">www.jennybrown.com</Link ></li>
                <li className="py-[5px]"><i className="ri-map-pin-line text-[15px] font-medium text-[#777] mr-[10px]" /><Link  href="javascript:void(0)" className="text-[15px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.03rem]">987-A, Dudhivadar, Rajkot, Gujarat, Bharat - 360410.</Link ></li>
              </ul>
            </div>
          </div>
          <div className="inner-contact border-b-[1px] border-solid border-[#eae8ef] p-[24px]">
            <div className="resume-title mb-[12px]">
              <h4 className="font-montserrat text-[17px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] tracking-[0.03rem]"><i className="ri-book-3-line mr-[10px]" />Education</h4>
            </div>
            <div className="resume-education-info mb-[12px]">
              <span className="font-montserrat leading-[26px] tracking-[0.02rem] text-[14px] font-medium text-[#777] flex justify-start">2012 - 2013</span>
              <h4 className="mb-[6px] text-[16px] font-semibold leading-[24px] text-[#111a24] tracking-[0.03rem] font-montserrat">Bachelor in Computer Engineering.</h4>
              <p className="text-[14px] leading-[24px] font-montserrat text-[#495461] font-normal tracking-[0.03rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="resume-education-info">
              <span className="font-montserrat leading-[26px] tracking-[0.02rem] text-[14px] font-medium text-[#777] flex justify-start">2021 - 2024</span>
              <h4 className="mb-[6px] text-[16px] font-semibold leading-[24px] text-[#111a24] tracking-[0.03rem] font-montserrat">Master in Comuter Engineering.</h4>
              <p className="text-[14px] leading-[24px] font-montserrat text-[#495461] font-normal tracking-[0.03rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="inner-contact p-[24px]">
            <div className="resume-title mb-[12px]">
              <h4 className="font-montserrat text-[17px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] tracking-[0.03rem]"><i className="ri-settings-5-line mr-[10px]" />Skills</h4>
            </div>
            <div className="resume-contact-info">
              <ul className="m-[0] p-[0]">
                <li className="py-[5px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">HTML</li>
                <li className="py-[5px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Photoshop</li>
                <li className="py-[5px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Angular</li>
                <li className="py-[5px] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Php</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="min-[992px]:w-[66.66%] w-full px-[12px]">
        <div className="bix-resume-contact">
          <div className="sub-heading mb-[24px] p-[30px] border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb] flex justify-center items-center text-center max-[991px]:justify-start max-[991px]:text-left max-[380px]:flex-col max-[380px]:text-center">
            <div className="inner-img hidden max-[991px]:flex max-[991px]:mr-[15px] max-[380px]:mr-[0] max-[380px]:mb-[15px]">
              <Image height={300} width={300} src="/assets/img/resume/resume.jpg" alt="resume" className="h-[70px] w-[70px] rounded-[20px]" />
            </div>
            <div className="inner-heading">
              <h4 className="mb-[4px] font-montserrat text-[26px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1399px]:text-[24px] max-[1199px]:mb-[0] max-[1199px]:text-[20px]">Jenny Brown</h4>
              <span className="text-[14px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.02rem]">App Devloper</span>
            </div>
          </div>
          <div className="inner-resume-contact mb-[-24px]">
            <div className="resume-about mb-[24px] p-[24px] border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb] max-[575px]:p-[15px]">
              <div className="inner-title mb-[16px]">
                <h5 className="text-[20px] font-bold mb-[0] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-montserrat max-[991px]:text-[18px]">About Me</h5>
              </div>
              <p className="text-[15px] mb-[16px] font-montserrat text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form, accompanied by English.</p>
              <p className="text-[15px] mb-[0] font-montserrat text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary.</p>
            </div>
            <div className="resume-experience mb-[24px] p-[24px] border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb] max-[575px]:p-[15px]">
              <div className="inner-title mb-[16px]">
                <h5 className="text-[20px] font-bold mb-[0] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-montserrat max-[991px]:text-[18px]">My Experience</h5>
              </div>
              <div className="inner-experience mb-[8px] p-[20px] bg-[#fff] border-[1px] border-solid border-[#eae8ef] rounded-tl-[20px] rounded-tr-[20px]">
                <h5 className="mb-[8px] text-[16px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] font-montserrat max-[991px]:text-[15px]">Envato Market</h5>
                <div className="experience-value mb-[15px] flex justify-between flex-wrap">
                  <span className="text-[13px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.02rem]">- Team Leader</span>
                  <span className="text-[13px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.02rem]">June 12, 2023 - Present</span>
                </div>
                <p className="text-[15px] font-montserrat mb-[0] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit
                  temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
              </div>
              <div className="inner-experience p-[20px] bg-[#fff] border-[1px] border-solid border-[#eae8ef] rounded-bl-[20px] rounded-br-[20px]">
                <h5 className="mb-[8px] text-[16px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] font-montserrat max-[991px]:text-[15px]">Meta Market</h5>
                <div className="experience-value mb-[15px] flex justify-between flex-wrap">
                  <span className="text-[13px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.02rem]">- Team Member</span>
                  <span className="text-[13px] font-medium text-[#777] font-montserrat leading-[26px] tracking-[0.02rem]">June 12, 2022 - Present</span>
                </div>
                <p className="text-[15px] font-montserrat mb-[0] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit
                  temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
              </div>
            </div>
            <div className="resume-project mb-[24px] p-[24px] border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb] max-[575px]:p-[15px]">
              <div className="inner-title mb-[16px]">
                <h5 className="text-[20px] font-bold mb-[0] text-[#111a24] tracking-[0.03rem] leading-[1.2] font-montserrat max-[991px]:text-[18px]">My Projects</h5>
              </div>
              <div className="inner-project mb-[8px] p-[20px] border-[1px] border-solid border-[#eae8ef] bg-[#fff] rounded-tl-[20px] rounded-tr-[20px]">
                <h5 className="text-[16px] font-bold text-[#111a24] leading-[26px] tracking-[0.03rem] font-montserrat">Project title 1 - Admin Template</h5>
                <Link  href="single-project.html" className="mb-[15px] text-[15px] font-normal text-[#777] flex font-montserrat leading-[26px] tracking-[0.03rem]">www.demourl.com</Link >
                <p className="text-[15px] font-montserrat mb-[0] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit
                  temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
              </div>
              <div className="inner-project p-[20px] border-[1px] border-solid border-[#eae8ef] bg-[#fff] rounded-bl-[20px] rounded-br-[20px]">
                <h5 className="text-[16px] font-bold text-[#111a24] leading-[26px] tracking-[0.03rem] font-montserrat">Project title 2 - eCommerce Template</h5>
                <Link  href="single-project.html" className="mb-[15px] text-[15px] font-normal text-[#777] flex font-montserrat leading-[26px] tracking-[0.03rem]">www.demourl.com</Link >
                <p className="text-[15px] font-montserrat mb-[0] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit
                  temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
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

export default Resume;