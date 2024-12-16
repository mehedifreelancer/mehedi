import React from "react";

const BlogDetails = () => {
  return (
    <section className="section section-blog-details pt-[50px] pb-[100px] max-[991px]:pt-[40px] max-[991px]:pb-[80px] max-[767px]:pt-[35px] max-[767px]:pb-[70px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
            <div className="bix-blog-sidebar border-[1px] border-solid border-[#eae8ef] rounded-[20px] bg-[#f7f5fb]">
              <div className="inner-details border-b-[1px] border-solid border-[#eae8ef]">
                <div className="blog-image pt-[24px] px-[24px] max-[575px]:px-[15px] max-[575px]:pt-[15px]">
                  <img
                    src="/assets/img/resume/resume.jpg"
                    alt="resume"
                    className="w-full rounded-[20px]"
                  />
                </div>
                <div className="inner-blog-contact p-[24px] max-[575px]:p-[15px]">
                  <span className="font-montserrat text-[14px] leading-[26px] tracking-[0.02rem] font-normal text-[#777]">
                    App Devloper
                  </span>
                  <h4 className="mb-[8px] font-montserrat text-[20px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[575px]:text-[18px]">
                    Jenny Brown
                  </h4>
                  <p className="m-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="bix-categories p-[24px] max-[575px]:p-[15px] border-b-[1px] border-solid border-[#eae8ef]">
                <div className="sub-title mb-[12px]">
                  <h4 className="font-montserrat text-[18px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[575px]:text-[16px]">
                    Categories
                  </h4>
                </div>
                <div className="inner-categories">
                  <ul className="list-disc pl-[2rem] mb-[0]">
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Marketing &amp; Seo
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Health &amp; Fitness
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Finance &amp; Money
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Growth &amp; Income
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Fashion &amp; Lifestyle
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Food &amp; Drinks
                      </a>
                    </li>
                    <li className="py-[10px] leading-[24px]">
                      <a
                        href="single-project.html"
                        className="font-montserrat leading-[26px] text-[14px] font-normal tracking-[0.03rem] text-[#777]"
                      >
                        Parenting &amp; Guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bix-recent-post p-[24px] max-[575px]:p-[15px] border-b-[1px] border-solid border-[#eae8ef]">
                <div className="sub-title mb-[12px]">
                  <h4 className="font-montserrat text-[18px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2] max-[575px]:text-[16px]">
                    Recent Post
                  </h4>
                </div>
                <div className="bix-recent-card">
                  <div className="recent-img">
                    <img
                      src="/assets/img/blog/1.jpg"
                      alt="blog-1"
                      className="w-full rounded-[20px]"
                    />
                  </div>
                  <div className="recent-contact pt-[24px]">
                    <span className="font-montserrat text-[13px] font-normal leading-[26px] tracking-[0.02rem] text-[#777]">
                      Marketing
                    </span>
                    <h4 className="mb-[4px] text-[18px]">
                      <a
                        href="javascript:void(0)"
                        className="font-montserrat leading-[26px] tracking-[0.03rem] text-[18px] font-bold text-[#111a24] max-[575px]:text-[16px]"
                      >
                        Marketing Guide 5 steps to Success
                      </a>
                    </h4>
                    <p className="mb-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Officia, illum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bix-blog-sub-details p-[24px] max-[575px]:p-[15px]">
                <div className="blog-rows-card flex rounded-[20px] max-[320px]:flex-col mb-[24px]">
                  <div className="blog-image">
                    <img
                      src="/assets/img/blog/1.jpg"
                      alt="blog-1"
                      className="w-[60px] max-[320px]:w-full rounded-[15px]"
                    />
                  </div>
                  <div className="inner-contact flex flex-col justify-center pl-[15px] max-[320px]:pl-[0] max-[320px]:pt-[15px]">
                    <h5 className="mb-[8px] text-[13px]">
                      <a
                        href="blog-detail.html"
                        className="font-montserrat tracking-[0.03rem] text-[14px] font-semibold leading-[22px] text-[#111a24]"
                      >
                        Marketing Guide: 5 Steps to Success.
                      </a>
                    </h5>
                    <p className="font-montserrat tracking-[0.03rem] text-[12px] font-normal leading-[16px] text-[#777]">
                      Marketing
                    </p>
                  </div>
                </div>
                <div className="blog-rows-card flex rounded-[20px] max-[320px]:flex-col mb-[24px]">
                  <div className="blog-image">
                    <img
                      src="/assets/img/blog/2.jpg"
                      alt="blog-2"
                      className="w-[60px] max-[320px]:w-full rounded-[15px]"
                    />
                  </div>
                  <div className="inner-contact flex flex-col justify-center pl-[15px] max-[320px]:pl-[0] max-[320px]:pt-[15px]">
                    <h5 className="mb-[8px] text-[13px]">
                      <a
                        href="blog-detail.html"
                        className="font-montserrat tracking-[0.03rem] text-[14px] font-semibold leading-[22px] text-[#111a24]"
                      >
                        Best way to solve business deal issue.
                      </a>
                    </h5>
                    <p className="font-montserrat tracking-[0.03rem] text-[12px] font-normal leading-[16px] text-[#777]">
                      Business
                    </p>
                  </div>
                </div>
                <div className="blog-rows-card flex rounded-[20px] max-[320px]:flex-col mb-[24px]">
                  <div className="blog-image">
                    <img
                      src="/assets/img/blog/3.jpg"
                      alt="blog-3"
                      className="w-[60px] max-[320px]:w-full rounded-[15px]"
                    />
                  </div>
                  <div className="inner-contact flex flex-col justify-center pl-[15px] max-[320px]:pl-[0] max-[320px]:pt-[15px]">
                    <h5 className="mb-[8px] text-[13px]">
                      <a
                        href="blog-detail.html"
                        className="font-montserrat tracking-[0.03rem] text-[14px] font-semibold leading-[22px] text-[#111a24]"
                      >
                        31 customer service stats know in 2019.
                      </a>
                    </h5>
                    <p className="font-montserrat tracking-[0.03rem] text-[12px] font-normal leading-[16px] text-[#777]">
                      Tips
                    </p>
                  </div>
                </div>
                <div className="blog-rows-card flex rounded-[20px] max-[320px]:flex-col">
                  <div className="blog-image">
                    <img
                      src="/assets/img/blog/4.jpg"
                      alt="blog-4"
                      className="w-[60px] max-[320px]:w-full rounded-[15px]"
                    />
                  </div>
                  <div className="inner-contact flex flex-col justify-center pl-[15px] max-[320px]:pl-[0] max-[320px]:pt-[15px]">
                    <h5 className="mb-[8px] text-[13px]">
                      <a
                        href="blog-detail.html"
                        className="font-montserrat tracking-[0.03rem] text-[14px] font-semibold leading-[22px] text-[#111a24]"
                      >
                        Business ideas to grow your business.
                      </a>
                    </h5>
                    <p className="font-montserrat tracking-[0.03rem] text-[12px] font-normal leading-[16px] text-[#777]">
                      Finances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
            <div className="bix-blog-contact">
              <div className="inner-main-contact mb-[24px] border-[1px] border-solid border-[#eae8ef] rounded-[20px]">
                <div className="main-blog-image">
                  <img
                    src="/assets/img/blog/blog-details.jpg"
                    alt="blog-details"
                    className="w-full rounded-t-[20px]"
                  />
                </div>
                <div className="main-blog-contact p-[24px] border-b-[1px] border-solid border-[#eae8ef] max-[575px]:p-[15px]">
                  <div className="main-title mb-[8px]">
                    <h4 className="font-montserrat text-[18px] font-bold text-[#111a24] leading-[24px] tracking-[0.03rem] max-[575px]:text-[16px]">
                      Best way to solve business deal issue.
                    </h4>
                  </div>
                  <p className="mb-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eaque voluptatum commodi porro delectus reprehenderit
                    laudantium architecto rerum atque adipisci expedita nihil
                    neque sed quam, fuga aspernatur. Rerum aperiam adipisci
                    quae, temporibus odio aspernatur, quas nostrum, recusandae
                    quis molestias perferendis velit mollitia omnis voluptate.
                    Iure minus explicabo esse neque soluta enim.
                  </p>
                </div>
                <div className="inner-blog-details-2colum p-[24px] max-[575px]:p-[15px]">
                  <div className="flex flex-wrap mx-[-12px]">
                    <div className="min-[576px]:w-[50%] w-full px-[12px]">
                      <div className="inner-blog-image mb-[24px]">
                        <img
                          src="/assets/img/blog/1.jpg"
                          alt="blog-1"
                          className="radius-right w-full rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="min-[576px]:w-[50%] w-full px-[12px]">
                      <div className="inner-blog-image mb-[24px]">
                        <img
                          src="/assets/img/blog/2.jpg"
                          alt="blog-2"
                          className="radius-left w-full rounded-[20px]"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mb-[0] font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eaque voluptatum commodi porro delectus reprehenderit
                    laudantium architecto rerum atque adipisci expedita nihil
                    neque sed quam, fuga aspernatur. Rerum aperiam adipisci
                    quae, temporibus odio aspernatur, quas nostrum, recusandae
                    quis molestias perferendis velit mollitia omnis voluptate.
                    Iure minus explicabo esse neque soluta enim.
                  </p>
                </div>
              </div>
              <div className="inner-replies-contact p-[24px] border-[1px] border-solid border-[#eae8ef] rounded-[20px] max-[575px]:p-[15px]">
                <div className="main-title mb-[8px]">
                  <h4 className="font-montserrat text-[18px] font-bold text-[#111a24] leading-[24px] tracking-[0.03rem] max-[575px]:text-[16px]">
                    2 Comment
                  </h4>
                </div>
                <div className="bix-client">
                  <div className="inner-details mb-[24px] p-[15px] flex border-[1px] border-solid border-[#eae8ef] rounded-[20px] max-[767px]:flex-col">
                    <div className="side-image">
                      <img
                        src="/assets/img/testimonials/1.jpg"
                        alt={"1"}
                        className="w-[100px] max-w-[100px] rounded-l-[20px] max-[767px]:rounded-bl-[0] max-[767px]:max-w-full max-[767px]:w-full max-[767px]:rounded-tr-[20px]"
                      />
                    </div>
                    <div className="client-details flex flex-col justify-center pl-[15px] max-[767px]:pl-[0] max-[767px]:pt-[15px]">
                      <h5 className="font-montserrat mb-[10px] text-[17px] font-semibold text-[#111a24] tracking-[0.03rem] leading-[1.2]">
                        Isabella Bianchi
                      </h5>
                      <p className="overflow-hidden text-ellipsis leading-[22px] font-montserrat text-[14px] text-[#495461] font-normal tracking-[0.03rem]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sit aut voluptates omnis laudantium deleniti
                        repellat facere, iste repudiandae consequatur possimus,
                        quae ducimus provident.
                      </p>
                    </div>
                  </div>
                  <div className="inner-details mb-[24px] p-[15px] flex border-[1px] border-solid border-[#eae8ef] rounded-[20px] max-[767px]:flex-col">
                    <div className="side-image">
                      <img
                        src="/assets/img/testimonials/2.jpg"
                        alt={"2"}
                        className="w-[100px] max-w-[100px] rounded-l-[20px] max-[767px]:rounded-bl-[0] max-[767px]:max-w-full max-[767px]:w-full max-[767px]:rounded-tr-[20px]"
                      />
                    </div>
                    <div className="client-details flex flex-col justify-center pl-[15px] max-[767px]:pl-[0] max-[767px]:pt-[15px]">
                      <h5 className="font-montserrat mb-[10px] text-[17px] font-semibold text-[#111a24] tracking-[0.03rem] leading-[1.2]">
                        Saddika Alard
                      </h5>
                      <p className="overflow-hidden text-ellipsis leading-[22px] font-montserrat text-[14px] text-[#495461] font-normal tracking-[0.03rem]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sit aut voluptates omnis laudantium deleniti
                        repellat facere, iste repudiandae consequatur possimus,
                        quae ducimus provident.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bix-reviews-details">
                  <div className="main-title mb-[16px]">
                    <h4 className="font-montserrat text-[18px] font-bold text-[#111a24] mb-[24px] tracking-[0.03rem] leading-[1.2]">
                      Add a Comment
                    </h4>
                  </div>
                  <div className="bix-input mb-[12px]">
                    <input
                      name="your-name"
                      placeholder="Name"
                      type="text"
                      className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[30px]"
                    />
                  </div>
                  <div className="bix-input mb-[12px]">
                    <input
                      name="your-email"
                      placeholder="Email*"
                      type="email"
                      className="w-full h-[50px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[30px]"
                    />
                  </div>
                  <div className="bix-input mb-[12px]">
                    <textarea
                      name="your-comment"
                      placeholder="Enter Your Comment"
                      className="w-full h-[150px] p-[15px] border-[1px] border-solid border-[#eae8ef] outline-[0] rounded-[30px]"
                      defaultValue={""}
                    />
                  </div>
                  <div className="bix-review-buttons">
                    <button
                      type="submit"
                      className="bix-button transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] font-montserrat text-[14px] font-semibold leading-[1.2] capitalize bg-[#fff] text-[#111a24] border-[1px] border-solid border-[#111a24] rounded-[15px] hover:bg-[#f41a4a] hover:border-[#f41a4a] hover:text-[#fff]"
                      value="Submit"
                    >
                      Submit
                    </button>
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

export default BlogDetails;
