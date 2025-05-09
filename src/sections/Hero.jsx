import React from "react";
import {
  heroImg,
  logo,
  navLinks,
  radialGradient,
  search,
} from "../components/details";
import { Link } from "react-router";
import Button from "../components/UI/Button";
import { FaBars } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="min-h-screen bg-white container">
      {/* navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-x-2">
          {/* logo */}
          <img src={logo} alt="Learnverrse's Logo" />

          {/* navlinks */}
          <div className=" md:ml-4   w-full bg-white  flex">
            {navLinks.map(({ name, path }, index) => {
              <Link className="nav-links" to={`${path}`} key={index}>
                {name}
              </Link>;
            })}
          </div>
        </div>

        {/* search input */}
        <div className="w-full hidden lg:block max-w-md relative mx-4">
          <input
            type="text"
            placeholder="Discover Courses To Learn"
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700"
          />

          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>

        {/* buttons */}
        <div className="md:flex gap-4">
          <div className="hidden items-center space-x-4  md:flex">
            <Button active={false} label={"sign in"} fun={() => {}} />
            <Button active={true} label={"join us now"} fun={() => {}} />
          </div>
          <button className="lg:hidden flex items-center justify-center w-10 h-10 bg-purple-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* hero section */}

      <div className=" container mx-auto px-6">
        <div className="flex flex-col text-center lg:text-start lg:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 capitalize">
              Where curious minds meet{" "}
              <span className="text-purple-700">expert</span> guides.
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg mt-8">
              {" "}
              Fuel your curiosity with guidance from experts who’ve walked the
              path—learn deeply, grow confidently, and turn potential into
              progress.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4">
              <Button label={"see plans"} active={true} fun={() => {}} />
              <Button
                label={" Access your course"}
                active={false}
                fun={() => {}}
              />
            </div>
          </div>

          {/* img */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImg}
              alt="register now!!!"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 -mb-24 w-full">
        <img
          src={radialGradient}
          alt="purple gradient"
          className="w-full object-contain"
        />
      </div>
    </header>
  );
};

export default Hero;
