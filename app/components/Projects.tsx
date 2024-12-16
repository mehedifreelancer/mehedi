"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsModel {
  disableTitie: boolean;
  onlyFeatured: boolean;
}

const projects = [
  {
    title: "Security Check Management Software",
    stacks: "Next.Js | HTML | Shadcn (CSS) | API",
    desc: "A management tool for security checks.",
    screenshot: "security.png",
    liveLink: "http://119.148.56.56:5000/login",
    isFeatured: true,
    type: "Software",
  },
  {
    title: "Smart Office Website",
    stacks: "React.Js | HTML | Tailwind (CSS) | API",
    desc: "A website to enhance office productivity.",
    screenshot: "smartoffice.png",
    liveLink: "https://smartoffice.ai/",
    isFeatured: true,
    type: "Website",
  },
  {
    title: "Drink Sakura Website",
    stacks: "JS | HTML | Bootstrap (CSS)",
    desc: "A promotional website for Sakura drinks.",
    screenshot: "sakura.png",
    liveLink: "https://www.drinksakura.com/",
    isFeatured: true,
    type: "Website",
  },
  {
    title: "Intelli Global",
    stacks: "Next.Js | HTML | Flowbite (CSS)",
    desc: "A corporate website for global solutions.",
    screenshot: "intelli.png",
    liveLink: "http://www.intelli.global/",
    isFeatured: true,
    type: "Website",
  },
  {
    title: "BYSL Global",
    stacks: "Next.Js | HTML | Tailwind (CSS)",
    desc: "A modern site for BYSL Global operations.",
    screenshot: "bysl-live.png",
    liveLink: "https://www.byslglobal.com/",
    isFeatured: true,
    type: "Website",
  },
  {
    title: "Podcast Template",
    stacks: "React.Js | HTML | Bootstrap (CSS)",
    desc: "A clean template for podcast websites.",
    screenshot: "podcast.png",
    liveLink: "https://podcast-react-nu.vercel.app/",
    isFeatured: true,
    type: "Template",
  },
  {
    title: "Doodle Inc",
    stacks: "Jquery | HTML | Bootstrap (CSS)",
    desc: "A creative website for Doodle Inc.",
    screenshot: "doodle-inc.png",
    liveLink: "https://www.thedoodleinc.com/",
    isFeatured: false,
    type: "Website",
  },
  {
    title: "Technoloy Template",
    stacks: "React | HTML | Bootstrap (CSS)",
    desc: "A modern template for technology firms.",
    screenshot: "tech-2.png",
    liveLink: "https://technology-2-react.vercel.app/",
    isFeatured: false,
    type: "Template",
  },
  {
    title: "Logistics Site",
    stacks: "JS | HTML | Bootstrap (CSS)",
    desc: "A logistics site for transportation firms.",
    screenshot: "kx.png",
    liveLink: "https://mehed-hasan.github.io/kx-transport/",
    isFeatured: false,
    type: "Website",
  },
  {
    title: "Racing Site",
    stacks: "JS | HTML | Bootstrap (CSS)",
    desc: "A stylish site for racing enthusiasts.",
    screenshot: "cajas.png",
    liveLink: "https://www.cajasgraf.com.ar/",
    isFeatured: false,
    type: "Website",
  },
];

const Projects = ({ disableTitie, onlyFeatured }: ProjectsModel) => {
  return (
    <section className="section-projects py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              {disableTitie === false ? (
                <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                  Featured <span className="text-[#f41a4a]">Projects</span>
                </h4>
              ) : (
                ""
              )}
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
          <div className="w-full projects-content">
            {/* <div
              className="controls bix-projects-tabs px-[12px] flex flex-col items-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <ul
                id="filters"
                className="clearfix mb-[30px] p-[5px] flex justify-center flex-wrap bg-[#f7f5fb] items-center border-[1px] border-solid border-[#1b1c20] rounded-[25px]"
              >
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] font-montserrat text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer active"
                  data-filter="all"
                >
                  All
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] font-montserrat text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".web"
                >
                  Web
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] font-montserrat text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".applications"
                >
                  Applications
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] font-montserrat text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".graphics"
                >
                  Graphics
                </li>
                <li
                  className="filter m-[5px] py-[5px] px-[15px] transition-all duration-[0.25s] ease-out border-[0] rounded-[15px] font-montserrat text-[14px] leading-[26px] tracking-[0.03rem] text-[#111a24] cursor-pointer"
                  data-filter=".templates"
                >
                  Templates
                </li>
              </ul>
            </div> */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <div className=" w-full mb-[-24px]">
                {onlyFeatured && (
                  <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 p-4   ">
                    {projects
                      .filter((project) => project.isFeatured) // Filter projects with isFeatured true
                      .map((project, index) => (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          stacks={project.stacks}
                          desc={project.desc}
                          screenshot={project.screenshot}
                          liveLink={project.liveLink}
                        />
                      ))}
                  </div>
                )}
                {!onlyFeatured && (
                  <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 p-4   ">
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        stacks={project.stacks}
                        desc={project.desc}
                        screenshot={project.screenshot}
                        liveLink={project.liveLink}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
