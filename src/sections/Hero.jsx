import React from 'react';
import {
  blackMaleImg,
  checkIcon,
  chevronRight,
  cyberSecurity,
  dataAnalytics,
  faceBook,
  faqHuman,
  femaleImg,
  fintech,
  fiveStar,
  footerLine,
  fourStar,
  google,
  heroImg,
  instagram,
  interSwitch,
  linkedIn,
  logo2,
  maleImg,
  mtn,
  naira,
  navLinks,
  payStack,
  radialGradient,
  search,
  testimonialImg,
  uiUx,
  unilag,
  xTwitter,
} from '../components/details';
import { Link, useNavigate } from 'react-router';
import Button from '../components/UI/Button';
import { FaBars, FaFileAlt } from 'react-icons/fa';
import HomeLogo from '../components/UI/HomeLogo';
import { GoVideo } from 'react-icons/go';
import { FiMessageCircle } from 'react-icons/fi';
import { MdOutlineAssessment } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { LiaBookSolid } from 'react-icons/lia';
import { TbCertificate } from 'react-icons/tb';
import ReviewsCarousel from '@/components/UI/reviewsCarousel';
import Footer from '@/components/UI/footer';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="container mx-auto min-h-screen bg-white">
        {/* navbar */}
        <nav className="m-auto flex w-full lg:max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-x-2">
            {/* logo */}
            <HomeLogo />

            {/* navlinks */}
            <div className="hidden md:ml-4 lg:flex">
              {navLinks.map(({ name, path }, index) => (
                <Link className="nav-links" to={`${path}`} key={index}>
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* search input */}
          <div className="relative mx-4 hidden w-full md:max-w-xs max-w-md lg:block">
            <input
              type="text"
              placeholder="Discover Courses To Learn"
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:ring-2 focus:ring-purple-700 focus:outline-none"
            />

            <img
              src={search}
              alt="Search icon"
              className="absolute top-1/2 left-3 -translate-y-1/2 transform cursor-pointer"
            />
          </div>

          {/* buttons */}
          <div className="gap-4 md:flex">
            <div className="hidden items-center space-x-4 md:flex">
              <Button
                active={false}
                label={'login'}
                fun={() => {
                  navigate('/SignIn');
                }}
              />

              <Button
                active={true}
                label={'join us now'}
                fun={() => {
                  navigate('/role-selector');
                }}
              />
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-200 hover:bg-gray-300 focus:ring-2 focus:ring-purple-700 focus:outline-none lg:hidden">
              <FaBars />
            </button>
          </div>
        </nav>
        {/* hero section */}
        <div className="px-6">
          <div className="flex w-full flex-col-reverse items-center justify-between pt-10 text-center lg:flex-row lg:text-start">
            <div className="m-auto mb-6 max-w-7xl md:mb-0 md:w-1/2">
              <h1 className="mt-4 mb-4 text-3xl font-bold capitalize md:text-7xl">
                Where curious minds meet
                <span className="text-purple-700"> expert</span> guides.
              </h1>

              <p className="mt-8 mb-8 flex max-w-lg text-lg text-black">
                Fuel your curiosity with guidance from experts who’ve walked the
                path—learn deeply, grow confidently, and turn potential into
                progress.
              </p>

              <div className="z-20 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center space-x-4 lg:justify-start">
                <Button label={'see plans'} active={true} fun={() => {}} />

                <Button
                  label="Access your course"
                  active={false}
                  fun={() => navigate('/learning')}
                />
              </div>
            </div>

            {/* img */}
            <div className="pointer-events-none flex justify-center">
              <img
                src={heroImg}
                alt="register now!!!"
                className="w-[90%] max-w-sm sm:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none mt-5 w-full">
          <img
            src={radialGradient}
            alt="purple gradient"
            className="w-full object-contain"
          />
        </div>
      </header>

      {/* brands-section */}
      <div className="container mx-auto mt-10 max-w-7xl flex-grow px-6 py-5">
        <div className="flex items-center justify-between gap-6">
          <img src={payStack} alt="" className='w-[10%] lg:w-auto' />
          <img src={unilag} alt="" className='w-[10%] lg:w-auto' />
          <img src={google} alt="" className='w-[10%] lg:w-auto' />
          <img src={fintech} alt="" className='w-[10%] lg:w-auto' />
          <img src={interSwitch} alt="" className='w-[10%] lg:w-auto' />
          <img src={mtn} alt="" className='w-[10%] lg:w-auto' />
        </div>
      </div>

      {/* services section */}
      <div className="bg-radial-bottom-left container flex flex-col items-center justify-center py-10">
        <div className="flex w-[75%] flex-col items-center justify-center text-center">
          <h2 className="mb-7 text-2xl lg:text-5xl font-medium text-[#121212]">
            Empowering Digital Learning at Every Level
          </h2>
          <p className="text-base md:text-2xl">
            Learnverrse combines modern technology with intuitive tools to make
            online education seamless for both students and administrators.
            Explore our key feature.
          </p>
        </div>
        <div className="m-auto mt-8 w-[90%] rounded-[30px] bg-white px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <LiaBookSolid className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 text-base font-medium">Course Management</h3>
              <p className="m-auto w-[80%] text-sm">
                Create, edit, and organize your learning content with ease.
                Perfect for building structured course modules.
              </p>
            </div>

            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <GoVideo className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 font-medium">Content Delivery</h3>
              <p className="m-auto w-[80%] text-sm">
                Seamlessly upload videos, PDFs, quizzes and interactive elements
                to engage learners of all styles.
              </p>
            </div>

            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <FaFileAlt className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 font-medium">Assessment Tools</h3>
              <p className="m-auto w-[80%] text-sm">
                Auto-grade quizzes and test, or manualy evaluate assignments to
                ensure deeper learning.
              </p>
            </div>

            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <TiMessages className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 font-medium">Communication</h3>
              <p className="m-auto w-[80%] text-sm">
                Stay connected through in-app messaging and real-time push
                notifications for reminders and updates.
              </p>
            </div>

            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <MdOutlineAssessment className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 font-medium">Analytics</h3>
              <p className="m-auto w-[80%] text-sm">
                Gain powerful insights with dashboard tailored for both students
                and administrators. Track performance and engagement.
              </p>
            </div>

            <div className="rounded-4xl border border-[#6D28D2] py-3 text-center">
              <div className="mb-3 flex items-center justify-center">
                <TbCertificate className="rounded-full bg-[#6d28d2] p-6 text-2xl text-white" />
              </div>
              <h3 className="mb-2 font-medium">Certification</h3>
              <p className="m-auto w-[80%] text-sm">
                Instantly generate certificates when students complete a course.
                Verified, downloadable and sharable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* explore section */}
      <div className="container flex flex-col items-center justify-center py-10">
        <h2 className="mb-7 text-3xl font-semibold lg:text-5xl lg:font-medium text-[#121212]">
          Explore Our Courses
        </h2>
        <p className="text-lg lg:text-2xl font-medium text-[#121212]">
          Explore in demand skill courses
        </p>
        <div className="m-auto mt-8 w-full lg:w-[70%] bg-[#F0E5FF] px-14 py-14 lg:px-10 lg:py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-[17px] bg-white text-center">
              <img src={dataAnalytics} alt="" className="" />
              <p className="px-3 py-5 text-lg font-medium text-[#121212]">
                Data Analytics: Transforming Data into Actionable Insights
              </p>
            </div>

            <div className="flex flex-col rounded-[17px] bg-white text-center">
              <img src={cyberSecurity} alt="" />
              <p className="py-5 text-lg font-medium text-[#121212]">
                Cybersecurity Fundamentals: Protecting Digital Frontiers
              </p>
            </div>

            <div className="flex flex-col rounded-[17px] bg-white text-center">
              <img src={uiUx} alt="" />
              <p className="py-5 text-lg font-medium text-[#121212]">
                UI/UX Design Masterclass: Design with Users in Mind
              </p>
            </div>
          </div>
          <button className="border-primary-500 text-primary-500 hover:bg-white mt-10 rounded-[15px] border px-6 py-1.5 font-semibold">
            <a href="#">Show more</a>
          </button>
        </div>
      </div>

      {/* testimonial section */}
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

      {/* payment plans section */}
      <div className="bg-primary-50 container mt-10 flex w-full flex-col items-center justify-center py-20">
        <h2 className="mb-4 text-3xl font-semibold lg:text-5xl lg:font-medium text-[#121212]">
          Plans For You
        </h2>
        <p className="text-lg lg:text-2xl">Choose the plan that fits your needs</p>
        <div className="grid grid-cols-1 gap-6 px-10 py-8 m-auto md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16">
            <h2 className="text-2xl font-bold">Starter</h2>
            <p className="mt-5 text-sm">Perfect for getting started</p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  0
                </p>
              </div>
              <p className="text-sm leading-5">per month</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
              Start free trial
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>No payment</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>3 free courses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Basic access</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Join student community forum</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Progress tracking dashboard</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16">
            <h2 className="text-2xl font-bold">Learner</h2>
            <p className="mt-5 text-sm">
              For learners serious about leveling up
            </p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  5,000
                </p>
              </div>
              <p className="text-sm leading-5">per month</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
              Subscribe Now
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Unlimited courses</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Completion Certificates</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Quiz & assignment grading</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Priority learner support</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Access to private learning groups</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white py-14 px-10 lg:py-16">
            <h2 className="text-2xl font-bold">Educator</h2>
            <p className="mt-5 text-sm">
              For educators ready to teach and earn
            </p>
            <div className="mt-10 flex gap-x-1">
              <div className="flex">
                <img src={naira} alt="" />
                <p className="font-montserrat text-4xl leading-5 font-bold">
                  10,000
                </p>
              </div>
              <p className="text-sm leading-5">per month</p>
            </div>
            <button className="bg-primary-500 mt-7 cursor-pointer px-12 lg:px-20 py-2.5 text-sm leading-5 text-white hover:bg-purple-700">
              Start Teaching Today
            </button>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Course creation tools</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt=""></img>
                <p>Unlimited course publishing</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt=""></img>
                <p>Access to earnings dashboard</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt=""></img>
                <p>Learner analytics & progress tracking</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt=""></img>
                <p>Payouts and monetization tools</p>
              </div>

              <div className="flex items-center gap-x-3">
                <img src={checkIcon} alt=""></img>
                <p>Priority educator support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq section */}
      <div className="container flex flex-col items-center justify-center py-10">
        <h2 className="mb-4 text-2xl lg:text-[40px] font-bold text-[#121212]">
          Frequently Asked Questions
        </h2>
        <p className="text-base lg:text-2xl">What questions do you need answered?</p>

        <div className="m-auto mt-8 flex w-[90%] lg:w-[70%] flex-col-reverse items-center gap-y-6 md:gap-y-0 justify-between lg:px-4 md:flex-row md:p-6">
          <div className="flex flex-col w-[90%] lg:w-[50%] space-y-5">
            <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
              <p className='text-[14px]'>What is Learnverrse</p>
              <img src={chevronRight} alt="" className='hidden md:block' />
            </div>

            <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
              <p className='text-[14px]'>How do I sign up</p>
              <img src={chevronRight} alt="" className='hidden md:block' />
            </div>

            <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
              <p className='text-[14px]'>What payment methods are accepted</p>
              <img src={chevronRight} alt="" className='hidden md:block' />
            </div>

            <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
              <p className='text-[14px]'>Can I cancel my subscriptions at anytime</p>
              <img src={chevronRight} alt="" className='hidden md:block' />
            </div>

            <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
              <p className='text-[14px]'>How do I get paid as an educator</p>
              <img src={chevronRight} alt="" className='hidden md:block' />
            </div>
          </div>

          <div className="w-[60%] lg:w-[30%]">
            <img src={faqHuman} alt="" className=''/>
          </div>
        </div>
      </div>

      {/* footer-hero section */}
      <div className="container bg-[#6d28d2] px-6 py-8 lg:px-10 lg:py-12">
        <div className="m-auto flex flex-col-reverse lg:flex-row w-[95%] lg:w-[80%] items-center justify-between">
          <div className="w-full lg:w-1/2 py-10">
            <h2 className="mb-3 lg:mb-5 text-2xl lg:text-[52px] font-bold text-white">
              Start your learning journey today
            </h2>
            <p className="text-[14px] lg:text-2xl font-medium text-white">
              Whether you are here to grow or to guide others Learnverrse is
              built for you.
            </p>

            <div className="mt-8 flex flex-col items-center w-full lg:w-auto space-y-5 md:flex-row md:space-y-0 md:space-x-5">
              <button className="hover:text-primary-800 cursor-pointer rounded-2xl bg-white px-27 lg:px-6 py-3 font-semibold">
                Start Learning
              </button>
              <button className="hover:text-primary-800 cursor-pointer rounded-2xl border border-white px-20 lg:px-6 py-3 font-semibold text-white hover:bg-white ">
                Become An Educator
              </button>
            </div>
          </div>

          <div className="footerImg flex items-center">
            <div className="flex flex-col">
              <img src={maleImg} alt="" />
              <img src={femaleImg} alt="" className="mt-5 w-[80%]" />
            </div>
            <div className="w-[80%]">
              <img src={blackMaleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      {/* <footer className="container bg-[#121212] px-10 py-20">
        <div className="m-auto flex w-[90%] flex-col items-start justify-between lg:flex-row">
          <div className="flex flex-col space-y-6 text-white">
            <img src={logo2} alt="" />
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="text-xl font-bold">For Learner</h2>
            <a href="#">Browse Courses</a>
            <a href="#">How It Works</a>
            <a href="#">Pricing</a>
            <a href="#">Help Center</a>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="text-xl font-bold">For Educator</h2>
            <a href="#">Become an educator</a>
            <a href="#">Educator Dashboard</a>
            <a href="#">Community</a>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="text-xl font-bold">Legal & Support</h2>
            <a href="#">Forms of Services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies settings</a>
          </div>
          <div className="flex flex-col space-y-6 text-white">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
              className="placeholder:text-ourGray outline-primary-800 bg-white p-2 text-black"
            ></input>
          </div>
        </div>

        <div className="m-auto mt-16 w-[90%]">
          <img src={footerLine} alt="" />
        </div>

        <div className="m-auto mt-10 flex w-[90%] items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <img src={linkedIn} alt="" />
            <img src={faceBook} alt="" />
            <img src={instagram} alt="" />
            <img src={xTwitter} alt="" />
          </div>
          <div>
            <p>
              2025{' '}
              <span className="font-bold">
                Learn<span className="text-primary-600">verrse</span>
              </span>
              . All rights Reserved.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="border-r-1 px-3">
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </>
  );
};

export default Hero;
