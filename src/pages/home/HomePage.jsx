import React from 'react';
import Hero from '@/sections/Hero';
import HeaderNav from '@/components/UI/HeaderNav';
import BrandSection from '../../sections/brandSection';
import ServiceSection from '../../sections/ServiceSection';
import ExploreSection from '../../sections/ExploreSection';
import TestimonialSection from '../../sections/TestimonialSection';
import PaymentSection from '../../sections/PaymentSection';
import FaqSection from '../../sections/FaqSection';
import FooterFaqSection from '@/sections/FooterFaqSection';





import Footer from '@/components/UI/footer';


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
