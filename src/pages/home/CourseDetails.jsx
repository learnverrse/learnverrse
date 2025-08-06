// import React from 'react';
import HeaderNav from '@/components/UI/HeaderNav';
import Footer from '@/components/UI/footer';
// import marked from '../../assets/marked.svg';

import person from '../../assets/person.png';
import arrow_left from '../../assets/arrow_left.svg';

export default function CourseDetails() {
  return (
    <>
      <div>
        <HeaderNav />
      </div>
      <div className="app box-border flex flex-col gap-[30px]  bg-[#b178e6] md:px-10 md:py-5 p-4 md:h-auto md:flex-row md:gap-[20px] ">
        <div className="firstDiv flex flex-col gap-[5px]">
          <div>
            <h1 className="text md:text-3xl text-xl font-bold text-black">
              Product Design: UI and UX Basics
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quibusdam enim aspernatur sequi necessitatibus quos porro vitae
              mollitia. Sit, eum eos. Voluptatum repellendus dolore veritatis
              minus repudiandae voluptas non ea? Eveniet mollitia expedita
              dolorem cum dolores! Provident quasi, dolor .
            </p>
          </div>
          <div>
            <Teee />
          </div>
          <div>
            <FirstBox />
          </div>

          <div>
            <h4 className='text-black text-[20px] font-bold'>Course Outline</h4>
            <CourseLine />
          </div>
        </div>

        <div className="secondDiv"></div>
        <Second />
      </div>
<footer>
<Footer/>
</footer>

    </>
  );
}

function FirstBox() {
  return (
    <div className="learnBox rounded-[20px] border-[2px]  bg-white p-[20px] text-black">
      <h3>What you will learn</h3>
      <div className="lool flex flex-col gap-[15px] mt-[10px]">
        <LearningDetail para="Understand the core principles of UI and UX design." />
        <LearningDetail para="Create wireframes, prototypes, and user flows with purpose" />
        <LearningDetail para="Design clean, accessible, and user-friendly interfaces." />
        <LearningDetail para="Use tools like Figma for modern digital product design." />
        <LearningDetail para="Translate real user needs into thoughtful design solutions." />
      </div>
    </div>
  );
}

/* What You'll Learn */

function LearningDetail({ para }) {
  return (
    <div className="learn flex items-center gap-[10px]">
      {/* <input type="radio" /> */}
      <div className="circle flex h-[30] w-[30] items-center justify-center rounded-full bg-purple-600 md:h-[20px] md:w-[20px]">
        <img src={arrow_left} alt="" className="h-[15px] w-[15px]" />
      </div>
      <p>{para}</p>
    </div>
  );
}

/* Course Outline */
function CourseLine() {
  return (
    <div className="courseoutline flex flex-col gap-[10px] rounded-[20px]  ">
      <Tough paraText="MODULE 1: INTRODUCTION TO PRODUCT DESIGN" icon="⌄" />
      <Tough paraText="MODULE 2: UI DESIGN PRINCIPLES" icon="⌄" />
      {
        <Tough
          paraText="MODULE 3: DESIGN THINKING AND FOUNDAMENTAL "
          icon="⌄"
        />
      }
      <Tough paraText="MODULE 4: UI DESIGN PRINCIPLES" icon="⌄" />
      {
        <Tough
          paraText="MODULE 5: DESIGN THINKING AND FOUNDAMENTAL "
          icon="⌄"
        />
      }
      <Tough paraText="MODULE 6: UI DESIGN PRINCIPLES" icon="⌄" />
    </div>
  );
}
function Tough({ paraText, icon }) {
  return (
    <div>
      <div className="lolls flex items-center justify-between rounded-[20px]  bg-white p-[5px]">
        <p>
          <b> {paraText} </b>
        </p>
        <p style={{ color: 'black', fontSize: '1.5rem' }}> {icon} </p>
      </div>
    </div>
  );
}

/* Instructor Info */

function Teee() {
  return (
    <>
      <div>
        <div className="team flex items-center gap-[15px]">
          <img
            src={person}
            alt=""
            className="teeimg h-[50px] w-[50px] rounded-full"
          />
          <p className="font-bold text-red-700">
            Teee{' '}
            <span className='font-light" block'>
              Senior Product designer
            </span>{' '}
          </p>
        </div>
        <p className="text-sm text-yellow-500">
          ⭐⭐⭐⭐⭐ (135 Ratings) · 1,352 students
        </p>
      </div>
    </>
  );
}

/* Right - Sidebar */

function Second() {
  return (
    <>
      <div className="secondSize h-auto w-[350px] rounded-[20px]  bg-white md:h-[68vh] md:w-[400px]">
        <img
          src={person}
          alt=""
          className="person h-[150px] w-[350px] rounded-t-[20px] object-cover md:w-[400px]"
        />

        <div className="yes p-[10px] text-black">
          <div className="pre flex items-center justify-between">
            <p className='text-black text-[20px] font-bold'>₦100000</p>
            <button className="cursor-pointer rounded-[10px] border-none bg-[#df73df] px-[15px] py-[5px]">
              Premium
            </button>
          </div>

          <div>
            <div className="enrolCon mt-[10px] mb-[10px]">
              <button className="enroll bg-purple-700 text-white  md:w-[280px] w-[320px] p-3 rounded-[10px] text-[10px] md:text-[14px] font-bold border-0 cursor-pointer">
                Enroll now
              </button>
            </div>

        

            <div className="headpeterCount mt-[20px]">
              <h2 className='text-black text-[20px] font-bold' >The Course Include:</h2>

              <div className="peterCont mt-[10px] flex flex-col gap-[5px]">
                <p>📼 22 hours on-demand video</p>
                <p>📄 15 articles</p>
                <p>🧾 At least 5 savable resources</p>
                <p>♾️ Full lifetime access</p>
                <p>📱 Access on mobile and desktop</p>
                <p>📜 Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
