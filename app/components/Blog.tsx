"use client";
import React from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section-blog pt-[50px] pb-[100px] max-[991px]:pt-[40px] max-[991px]:pb-[80px] max-[767px]:pt-[35px] max-[767px]:pb-[70px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={400}
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                Spotlight <span className="text-[#f41a4a]">Stories</span>
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
          <div className="w-full px-[12px]">
            <div className="bix-blog-wrap p-2">
              <Slider {...settings}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
