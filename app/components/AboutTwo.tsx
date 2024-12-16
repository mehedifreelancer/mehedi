import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";
import AboutImage from "./AboutImage";
import Testimonials from "./Testimonials";
import AboutDesc from "./AboutDesc";

const AboutTwo = () => {
  return (
    <>
      {/* About */}
      <section
        className="section-about relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="600"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <div className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px]">
              <div className="bix-aboutpage-img relative">
                <div className="inner-img flex justify-center items-center">
                  <Image
                    height={400}
                    width={400}
                    src="/assets/img/about/about.jpg"
                    alt="about-one"
                    className="w-[calc(100%-50px)] h-[calc(100%-50px)] rounded-[40%]"
                  />
                </div>
              </div>
            </div>
            {/**/}
            <div className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px]">
              <div className="bix-about-contact h-full flex flex-col justify-center">
                <div className="bix-banner mb-[30px] max-[1199px]:mb-[25px] max-[767px]:mb-[20px] flex text-center justify-left">
                  <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                    About <span className="text-[#f41a4a]">Me</span>
                  </h4>
                </div>
                <AboutDesc />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill */}
      <section className="section-Skill py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px] ">
        <div className=" container flex flex-col mx-auto">
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
            <h2 className="mb-2">Framework , Libraries & Language</h2>
            <div
              className="bix-skill  grid grid-cols-2 gap-2 justify-start max-[1199px]:h-auto"
              id="progress"
            >
              <SkillCard
                title={"Java Script"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/js.png"
                percent={90}
              />
              <SkillCard
                title={"Jquery "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/jquery.jpg"
                percent={90}
              />
              <SkillCard
                title={"Next.Js "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/next.png"
                percent={90}
              />
              <SkillCard
                title={"React "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/react.webp"
                percent={90}
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
            <h2 className="mb-2">Markup & Styles</h2>
            <div
              className="bix-skill  grid grid-cols-2 gap-2 justify-start max-[1199px]:h-auto"
              id="progress"
            >
              <SkillCard
                title={"HTML "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/html.jpg"
                percent={90}
              />
              <SkillCard
                title={"CSS "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/css.png"
                percent={90}
              />
              <SkillCard
                title={"Tailwind "}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/tailwind.jpg"
                percent={90}
              />
              <SkillCard
                title={"Shadcn"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/shadcn.png"
                percent={90}
              />
              <SkillCard
                title={"Flowbite"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/flowbite.png"
                percent={90}
              />
              <SkillCard
                title={"Bootstrap"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/bootstrap.png"
                percent={90}
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
            <h2 className="mb-2">Tools</h2>
            <div
              className="bix-skill  grid grid-cols-2 gap-2 justify-start max-[1199px]:h-auto"
              id="progress"
            >
              <SkillCard
                title={"Git Bash"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/git.png"
                percent={90}
              />
              <SkillCard
                title={"Github"}
                desc="I am skilled in HTML and JSX, using them to structure web pages and integrate seamlessly with React.js for dynamic, user-friendly websites"
                iconImage="/assets/img/stacks/github.webp"
                percent={90}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
