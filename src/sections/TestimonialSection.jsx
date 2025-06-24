import React from 'react'
import ReviewsCarousel from '@/components/UI/reviewsCarousel';

const TestimonialSection = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-12 lg:py-20">
        <h2 className="mb-7 text-3xl font-semibold lg:text-5xl lg:font-medium text-[#121212]">
          Our Testimonials
        </h2>
        <p className="text-lg lg:text-base">What people say about us</p>

        <ReviewsCarousel />
        {/* <div className="mt-8 flex flex-nowrap space-x-4 overflow-x-auto px-10 lg:px-4 md:overflow-visible md:grid gap-6 md:px-10 md:grid-cols-2 lg:grid-cols-3 md:space-x-0">
          <div className="min-w-sm flex flex-col rounded-2xl border border-[#D9D9D9] p-6">
            <div className="mb-4 flex items-center gap-x-4">
              <img src={testimonialImg} alt="" />
              <p className="leading-[13px] lg:leading-[25px] font-semibold">Temitayo Bakare</p>
            </div>

            <blockquote className="leading-[13px] lg:leading-[25px] text-[12px] lg:text-base">
              "The Data Analytics course made complex concepts easy. the quizzes
              and hands-on exercises helped me truly understand python and
              excel. i even used my certificate to secure an internship."
            </blockquote>

            <div className="mt-4 flex justify-end">
              <img src={fourStar} alt="" />
            </div>
          </div>

          <div className="min-w-sm flex flex-col rounded-2xl border border-[#D9D9D9] p-6">
            <div className="mb-4 flex items-center gap-x-4">
              <img src={testimonialImg} alt="" />
              <p className="leading-[13px] lg:leading-[25px] font-semibold">John Adams</p>
            </div>

            <blockquote className="leading-[13px] lg:leading-[25px] text-[12px] lg:text-base">
              "Publishing my cybersecurity course on learnverrse was seamless.
              The dashboard gave me full access to my students progress and
              earnings . i have grown a learner base of over 500 in two months."
            </blockquote>

            <div className="mt-4 flex justify-end">
              <img src={fourStar} alt="" />
            </div>
          </div>

          <div className="min-w-sm flex flex-col rounded-2xl border border-[#D9D9D9] space-y-6 p-6">
            <div className="mb-4 flex items-center gap-x-4">
              <img src={testimonialImg} alt="" />
              <p className="leading-[13px] lg:leading-[25px] font-semibold">Kareem Jones</p>
            </div>

            <blockquote className="leading-[13px] lg:leading-[25px] text-[12px] lg:text-base">
              “I tried other LMS platforms but learnverrse felt more tailored
              for me. The personalized courses, close tutorship and seamless
              interaction boosted my confidence.”
            </blockquote>

            <div className="mt-4 flex justify-end">
              <img src={fiveStar} alt="" />
            </div>
          </div>
        </div> */}
      </div>
  )
}

export default TestimonialSection