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

const Hero = () => {
  const navigate = useNavigate();
  return (

    <>
      <header className="container mx-auto min-h-screen bg-white">
        {/* navbar */}
        <nav className="flex w-full max-w-7xl m-auto items-center justify-between px-6 py-4">
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
            <div className="relative mx-4 hidden w-full max-w-md lg:block">
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
                    navigate('/Sign-up');
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
          <div className="flex w-full flex-col items-center justify-between pt-10 text-center lg:flex-row lg:text-start">
            <div className="mb-6 max-w-7xl md:mb-0 md:w-1/2 m-auto">
              <h1 className="mb-4 text-5xl font-bold capitalize md:text-7xl">
                Where curious minds meet
                <span className="text-purple-700"> expert</span> guides.
              </h1>

                <p className="mt-8 mb-8 flex max-w-lg text-lg text-black">
                  Fuel your curiosity with guidance from experts who’ve walked the
                  path—learn deeply, grow confidently, and turn potential into
                  progress.
                </p>

                <div className="z-20 flex justify-center space-x-4 lg:justify-start">
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
                className="w-full max-w-md"
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

      {/* hero-footer-section */}
      <div className='container flex-grow px-6 py-5 max-w-7xl mt-10 mx-auto'>
        <div className="flex items-center justify-between">
          <img src={payStack} alt="" />
          <img src={unilag} alt="" />
          <img src={google} alt="" />
          <img src={fintech} alt="" />
          <img src={interSwitch} alt="" />
          <img src={mtn} alt="" />
        </div>
      </div>

      {/* services section */}
      <div className='container flex flex-col items-center justify-center py-10 bg-radial-bottom-left'>
        <div className='flex flex-col items-center justify-center text-center w-[75%]'>
          <h2 className='font-medium text-5xl mb-7 text-[#121212]'>Empowering Digital Learning at Every Level</h2>
          <p className='text-2xl'>Learnverrse combines modern technology with intuitive tools to make online education seamless for both students and administrators. Explore our key feature.</p>
        </div>
        <div className='bg-white m-auto w-[90%] rounded-[30px] mt-8 py-14 px-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <LiaBookSolid className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Course Management</h3>
              <p className='text-sm w-[80%] m-auto'>Create, edit, and organize your learning content with ease. Perfect for building structured course modules.</p>
            </div>

            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <GoVideo className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Content Delivery</h3>
              <p className='text-sm w-[80%] m-auto'>Seamlessly upload videos, PDFs, quizzes and interactive elements to engage learners of all styles.</p>
            </div>

            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <FaFileAlt className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Assessment Tools</h3>
              <p className='text-sm w-[80%] m-auto'>Auto-grade quizzes and test, or manualy evaluate assignments to ensure deeper learning.</p>
            </div>

            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <TiMessages className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Communication</h3>
              <p className='text-sm w-[80%] m-auto'>Stay connected through in-app messaging and real-time push notifications for reminders and updates.</p>
            </div>

            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <MdOutlineAssessment className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Analytics</h3>
              <p className='text-sm w-[80%] m-auto'>Gain powerful insights with dashboard tailored for both students and administrators. Track performance and engagement.</p>
            </div>

            <div className='border border-[#6D28D2] text-center rounded-4xl py-3'>
              <div className='flex items-center justify-center mb-3'>
                <TbCertificate className='bg-[#6d28d2] text-white text-2xl p-6 rounded-full' />
              </div>
              <h3 className='font-medium mb-2'>Certification</h3>
              <p className='text-sm w-[80%] m-auto'>Instantly generate certificates when students complete a course. Verified, downloadable and sharable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* explore section */}
      <div className='container flex flex-col items-center justify-center py-10'>
        <h2 className='font-medium text-5xl mb-7 text-[#121212]'>Explore Our Courses</h2>
        <p className='text-2xl font-medium text-[#121212]'>Explore in demand skill courses</p>
        <div className='bg-[#F0E5FF] w-[70%] mt-8 m-auto px-10 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='flex flex-col bg-white rounded-[17px] text-center'>
              <img src={dataAnalytics} alt="" className='' />
              <p className='text-[#121212] text-lg font-medium py-5 px-3'>
                Data Analytics: Transforming Data into Actionable Insights
              </p>
            </div>

            <div className='flex flex-col bg-white rounded-[17px] text-center'>
              <img src={cyberSecurity} alt="" />
              <p className='text-[#121212] text-lg font-medium py-5'>
                Cybersecurity Fundamentals: Protecting Digital Frontiers
              </p>
            </div>

            <div className='flex flex-col bg-white rounded-[17px] text-center'>
              <img src={uiUx} alt="" />
              <p className='text-[#121212] text-lg font-medium py-5'>
                UI/UX Design Masterclass: Design with Users in Mind
              </p>
            </div>
          </div>
          <button className='border border-primary-500 text-primary-500 hover:bg-white font-semibold rounded-[15px] px-6 py-1.5 mt-10'><a href="#">Show more</a></button>
        </div>
      </div>

      {/* testimonial section */}
      <div className='container flex flex-col items-center justify-center py-20'>
        <h2 className='font-medium text-5xl mb-7 text-[#121212]'>Our Testimonials</h2>
        <p>What people say about us</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-10'>
          <div className='flex flex-col rounded-2xl border border-[#D9D9D9] p-6'>
            <div className='flex items-center gap-x-4 mb-4'>
              <img src={testimonialImg} alt="" />
              <p className='font-semibold leading-[25px]'>Temitayo Bakare</p>
            </div>
            <p>
              <blockquote className='leading-[25px]'>
                "The Data Analytics course made complex concepts easy. 
                the quizzes and hands-on exercises helped me truly understand python and excel. 
                i even used my certificate to secure an internship."
              </blockquote>
            </p>
            <div className='flex justify-end mt-4'>
                <img src={fourStar} alt="" />
            </div>
          </div>

          <div className='flex flex-col rounded-2xl border border-[#D9D9D9] p-6'>
            <div className='flex items-center gap-x-4 mb-4'>
              <img src={testimonialImg} alt="" />
              <p className='font-semibold leading-[25px]'>John Adams</p>
            </div>
            <p>
              <blockquote className='leading-[25px]'>
                "Publishing my cybersecurity course on learnverrse was seamless. 
                The dashboard gave me full access to my students progress and earnings . 
                i have grown a learner base of over 500 in two months."
              </blockquote>
            </p>
            <div className='flex justify-end mt-4'>
              <img src={fourStar} alt="" />
            </div>
          </div>

          <div className='flex flex-col rounded-2xl border border-[#D9D9D9] space-y-6 p-6'>
            <div className='flex items-center gap-x-4 mb-4'>
              <img src={testimonialImg} alt="" />
              <p className='font-semibold leading-[25px]'>Kareem Jones</p>
            </div>
            <p>
              <blockquote className='leading-[25px]'>
                “I tried other LMS platforms but learnverrse felt more tailored for me. 
                The personalized courses, close tutorship and seamless interaction boosted my confidence.”
              </blockquote>
            </p>
            <div className='flex justify-end mt-4'>
              <img src={fiveStar} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* payment plans section */}
      <div className='container bg-primary-50 py-20 flex flex-col items-center justify-center w-full mt-10'>
        <h2 className='font-medium text-5xl mb-4 text-[#121212]'>Plans For You</h2>
        <p className='text-2xl'>Choose the plan that fits your needs</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-8'>
          <div className='bg-white rounded-2xl px-10 py-16 flex flex-col'>
            <h2 className='text-2xl font-bold'>Starter</h2>
            <p className='text-sm mt-5'>Perfect for getting started</p>
            <div className='flex gap-x-1 mt-10'>
              <div className='flex'>
                <img src={naira} alt="" />
                <p className='font-montserrat font-bold text-4xl leading-5'>0</p>
              </div>
              <p className='text-sm leading-5'>per month</p>
            </div>
            <button className='bg-primary-500 text-white text-sm leading-5 px-20 py-2.5 mt-7 hover:bg-purple-700 cursor-pointer'>Start free trial</button>
            <div className='mt-7 space-y-4'>
              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>No payment</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>3 free courses</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Basic access</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Join student community forum</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Progress tracking dashboard</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl px-10 py-16 flex flex-col'>
            <h2 className='text-2xl font-bold'>Learner</h2>
            <p className='text-sm mt-5'>For learners serious about leveling up</p>
            <div className='flex gap-x-1 mt-10'>
              <div className='flex'>
                <img src={naira} alt="" />
                <p className='font-montserrat font-bold text-4xl leading-5'>5,000</p>
              </div>
              <p className='text-sm leading-5'>per month</p>
            </div>
            <button className='bg-primary-500 text-white text-sm leading-5 px-20 py-2.5 mt-7 hover:bg-purple-700 cursor-pointer'>Subscribe Now</button>
            <div className='mt-7 space-y-4'>
              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Unlimited courses</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Completion Certificates</p>
              </div>

              <div className="flex gap-x-3">
                <img src={checkIcon} alt="" />
                <p>Quiz & assignment grading</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Priority learner support</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Access to private learning groups</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl px-10 py-16 flex flex-col'>
            <h2 className='text-2xl font-bold'>Educator</h2>
            <p className='text-sm mt-5'>For educators ready to teach and earn</p>
            <div className='flex gap-x-1 mt-10'>
              <div className='flex'>
                <img src={naira} alt="" />
                <p className='font-montserrat font-bold text-4xl leading-5'>10,000</p>
              </div>
              <p className='text-sm leading-5'>per month</p>
            </div>
            <button className='bg-primary-500 text-white text-sm leading-5 px-20 py-2.5 mt-7 hover:bg-purple-700 cursor-pointer'>Start Teaching Today</button>
            <div className='mt-7 space-y-4'>
              <div className='flex gap-x-3'>
                <img src={checkIcon} alt="" />
                <p>Course creation tools</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt=""></img>
                <p>Unlimited course publishing</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt=""></img>
                <p>Access to earnings dashboard</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt=""></img>
                <p>Learner analytics & progress tracking</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt=""></img>
                <p>Payouts and monetization tools</p>
              </div>

              <div className='flex gap-x-3'>
                <img src={checkIcon} alt=""></img>
                <p>Priority educator support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      {/* faq section */}
    {/* faq section */}
<div className='container flex flex-col items-center justify-center py-10'>
  <h2 className='font-bold text-[40px] mb-4 text-[#121212]'>Frequently Asked Questions</h2>
  <p className='text-2xl'>What questions do you need answered?</p>

  <div className='flex flex-col w-[70%] md:flex-row items-center justify-between m-auto px-4 md:p-6 mt-8'>
    <div className='w-[50%] flex flex-col space-y-5'>
      <div className='flex items-center justify-between py-3 px-10 bg-primary-50 rounded-4xl hover:bg-purple-200 cursor-pointer'>
        <p>What is Learnverrse</p>
        <img src={chevronRight} alt="" />
      </div>

      <div className='flex items-center justify-between py-3 px-10 bg-primary-50 rounded-4xl hover:bg-purple-200 cursor-pointer'>
        <p>How do I sign up</p>
        <img src={chevronRight} alt="" />
      </div>

      <div className='flex items-center justify-between py-3 px-10 bg-primary-50 rounded-4xl hover:bg-purple-200 cursor-pointer'>
        <p>What payment methods are accepted</p>
        <img src={chevronRight} alt="" />
      </div>

      <div className='flex items-center justify-between py-3 px-10 bg-primary-50 rounded-4xl hover:bg-purple-200 cursor-pointer'>
        <p>Can I cancel my subscriptions at anytime</p>
        <img src={chevronRight} alt="" />
      </div>

      <div className='flex items-center justify-between py-3 px-10 bg-primary-50 rounded-4xl hover:bg-purple-200 cursor-pointer'>
        <p>How do I get paid as an educator</p>
        <img src={chevronRight} alt="" />
      </div>
    </div>

    {/* ✅ Properly closed this block */}
    <div className='w-[30%]'>
      <img src={faqHuman} alt="" />
    </div>
  </div>
</div>

      {/* footer-hero section */}
      <div className='container bg-[#6d28d2] px-10 py-12'>
        <div className='flex items-center justify-between w-[80%] m-auto'>
          <div className='w-1/2 py-10'>
            <h2 className='text-[52px] font-bold text-white mb-5'>Start your learning journey today</h2>
            <p className='text-2xl font-medium text-white'>Whether you are here to grow or to guide others Learnverrse is built for you.</p>
            <div className='flex flex-col md:flex-row items-center mt-8 space-y-5 md:space-y-0 md:space-x-5'>
              <button className='font-semibold bg-white py-3 px-6 rounded-2xl hover:text-primary-800 cursor-pointer'>Start Learning</button>
              <button className='font-semibold py-3 px-6 border border-white rounded-2xl text-white hover:bg-white hover:text-primary-800 cursor-pointer'>Become An Educator</button>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='flex flex-col'>
              <img src={maleImg} alt="" />
              <img src={femaleImg} alt="" className='w-[80%] mt-5' />
            </div>
            <div className='w-[80%]'>
              <img src={blackMaleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <footer className='container bg-[#121212] px-10 py-20'>
        <div className='flex flex-col lg:flex-row items-start justify-between w-[90%] m-auto'>
          <div className='flex flex-col text-white space-y-6'>
            <img src={logo2} alt="" />
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className='flex flex-col text-white space-y-6'>
            <h2 className='text-xl font-bold'>For Learner</h2>
            <a href="#">Browse Courses</a>
            <a href="#">How It Works</a>
            <a href="#">Pricing</a>
            <a href="#">Help Center</a>
          </div>
          <div className='flex flex-col text-white space-y-6'>
            <h2 className='text-xl font-bold'>For Educator</h2>
            <a href="#">Become an educator</a>
            <a href="#">Educator Dashboard</a>
            <a href="#">Community</a>
          </div>
          <div className='flex flex-col text-white space-y-6'>
            <h2 className='text-xl font-bold'>Legal & Support</h2>
            <a href="#">Forms of Services</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies settings</a>
          </div>
          <div className='flex flex-col text-white space-y-6'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <input type="email" name="email" id="" 
            placeholder="Enter your email address" 
            className='bg-white p-2 text-black placeholder:text-ourGray outline-primary-800'></input>
          </div>
        </div>

        <div className='mt-16 m-auto w-[90%]'>
          <img src={footerLine} alt="" />
        </div>

        <div className='w-[90%] flex items-center justify-between mt-10 text-white m-auto'>
          <div className='flex items-center space-x-3'>
            <img src={linkedIn} alt="" />
            <img src={faceBook} alt="" />
            <img src={instagram} alt="" />
            <img src={xTwitter} alt="" />
          </div>
          <div>
            <p>2025 <span className='font-bold'>Learn<span className='text-primary-600'>verrse</span></span>. All rights Reserved.</p>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='border-r-1 px-3'>
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </>

  );
};

export default Hero;
