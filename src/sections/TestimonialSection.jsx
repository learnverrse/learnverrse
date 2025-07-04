import React from 'react'
import ReviewsCarousel from '@/components/UI/reviewsCarousel';

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:min-h-screen py-12 lg:py-30 bg-radial-[at_5%_15%] from-purple-300 via-purple-700 via-20% to-purple-800 to-95%">
      <h2 className="mb-7 text-3xl font-semibold lg:text-5xl lg:font-medium text-white">
        Our Testimonials
      </h2>
      <p className="text-lg lg:text-base text-white">What people say about us</p>

      <ReviewsCarousel />
    </div>
  )
}

export default TestimonialSection