import React from 'react';
import Hero from '@/sections/Hero';
import HeaderNav from '@/components/UI/HeaderNav';
import BrandSection from '@/sections/BrandSection';
import ServiceSection from '@/sections/ServiceSection';
import ExploreSection from '@/sections/ExploreSection';
import TestimonialSection from '@/sections/TestimonialSection';
import PaymentSection from '@/sections/PaymentSection';
import FaqSection from '@/sections/FaqSection';
import FooterFaqSection from '@/sections/FooterFaqSection';






import Footer from '@/components/UI/footer';
import CourseSection from '../../sections/ExploreSection';


const HomePage = () => {
  return (
    <>
      <HeaderNav />
      <Hero />
      <BrandSection />
      <ServiceSection />
      <ExploreSection />
      <TestimonialSection />
      <PaymentSection />
      <FaqSection />
      <FooterFaqSection />
      <Footer />
    </>
  );
};

export default HomePage;
