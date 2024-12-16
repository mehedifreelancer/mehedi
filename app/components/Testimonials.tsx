"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { TestimonialModel } from "@/types/testimonial";

const testimonial = {
  heading: `<h2>CLIENT SAY ABOUT ME</h2>`,
  desc: `<p>Hey ! wait a minute here to judge me. People dropped there comment on my work. As an International developer people marked me as they texted.
  It helps to make your decission about me ! 
  </p>`,

  reviews: [
    {
      id: 1,
      sr: 1,
      clientName: "buudga",
      clientImage: "buudga.jpg",
      comment:
        "The Freelancer is a very competent and professional web developer. He listened to my instructions and was very easy to deal with during the project. I would have no hesitation, in recommending him to others and will certainly be using him again myself.",
      countryName: "Australia",
      countryFlag: "australia.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },

    {
      id: 2,
      sr: 2,
      clientName: "photovideogta",
      clientImage: "",
      comment: "Awesome customer service and quality of work. Thank you!",
      countryName: "Canada",
      countryFlag: "canada.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 3,
      sr: 3,
      clientName: "jakeyiii",
      clientImage: "jakeyiii.jpg",
      comment: "Got there finally",
      countryName: "United Kingdom",
      countryFlag: "uk.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 4,
      sr: 4,
      clientName: "hasannavid",
      clientImage: "",
      comment: "Honest, hard worker and skilful. I am happy with his work.",
      countryName: "Australia",
      countryFlag: "australia.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 5,
      sr: 5,
      clientName: "gonzadapok",
      clientImage: "gonzadapok.webp",
      comment: "Honest, hard worker and skilful. I am happy with his work.",
      countryName: "Argentina",
      countryFlag: "argentina.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 6,
      sr: 6,
      clientName: "connorsml",
      clientImage: "connorsml.webp",
      comment:
        "I needed a simple 1 page website design and the seller delivered. On time, and at a reasonable price. Great work.",
      countryName: "Ireland",
      countryFlag: "ireland.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 7,
      sr: 7,
      clientName: "vidyakafle",
      clientImage: "vidyakafle.webp",
      comment:
        "I just discovered them to be pleasently surprised, finding a silk cocoon, with a GEM inside. Nice work my friend...",
      countryName: "Nepal",
      countryFlag: "nepal.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 8,
      sr: 8,
      clientName: "nessa2shoes",
      clientImage: "nessa2shoes.webp",
      comment:
        "Very friendly and knowledgeable seller. Highly professional. Would recommend to anyone needing web design work done.",
      countryName: "Australia",
      countryFlag: "australia.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
    {
      id: 9,
      sr: 9,
      clientName: "shahnur_50",
      clientImage: "shahnur_50.webp",
      comment: "highly recommended...good developer",
      countryName: "Bangladesh",
      countryFlag: "bd.png",
      stars: [1, 1, 1, 1, 1],
      commentedOn: "fiver",
      endorsmentLink:
        "https://www.fiverr.com/web__developer_/design-your-custom-clean-website-using-html-js-and-others?utm_campaign=base_gig_show_share&utm_content=&utm_medium=shared&utm_source=mobile&utm_term=",
    },
  ],
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };
  return (
    <section className="section-testimonials relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="bix-banner mb-[30px] flex justify-center text-center max-[1199px]:mb-[25px] max-[767px]:mb-[20px]"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <h4 className="font-montserrat text-[36px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[1199px]:text-[32px] max-[767px]:text-[28px] max-[575px]:text-[24px]">
                Echoes of <span className="text-[#f41a4a]">Brilliance</span>
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
            <div
              className="bix-testimonials relative"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="800"
            >
              {/* <Image
                height={500}
                width={500}
                src="/assets/img/testimonials/img-1.png"
                alt="testimonials-1"
                className="testimonials-img-1 z-[-1] h-[80px] w-[80px] absolute top-[0] left-[50px] rotate-[-12deg] blur-[3px] opacity-[0.8] max-[1399px]:h-[60px] max-[1399px]:w-[60px] max-[1399px]:left-[10px] max-[1199px]:hidden"
              />

              <Image
                height={500}
                width={500}
                src="/assets/img/testimonials/img-6.png"
                alt="testimonials-6"
                className="testimonials-img-6 z-[-1] h-[60px] w-[60px] absolute bottom-[0] right-[80px] rounded-[15px] rotate-[-15deg] blur-[3px] opacity-[0.8] max-[1399px]:h-[50px] max-[1399px]:w-[50px] max-[1399px]:right-[200px] max-[1399px]:bottom-[120px] max-[991px]:bottom-auto max-[991px]:top-[-20px] max-[991px]:right-[50px]"
              /> */}
              <div className="inner-banner rotate-[270deg] absolute top-[0] left-[150px] bottom-[0] z-[-4] max-[1399px]:left-[90px] max-[1199px]:left-[10px] max-[991px]:hidden">
                <h4 className="font-montserrat text-[42px] font-bold text-[#fff] opacity-[0.15] tracking-[0.03rem] leading-[1.2] max-[1399px]:text-[38px] max-[1199px]:text-[34px]">
                  Testimonials
                </h4>
              </div>
              <div className="testimonials-slider z-[-1]">
                <Slider {...settings}>
                  {testimonial.reviews.map((review: TestimonialModel) => (
                    <div key={review.id}>
                      <SliderCard review={review} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
