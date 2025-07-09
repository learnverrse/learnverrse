import { aboutHeaderImg, aboutHuman } from "@/components/details";
import Button from "@/components/UI/Button";
import { default as HeaderNav } from "@/components/UI/HeaderNav"
import { RiMapPinFill } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import Footer from "@/components/UI/footer";


const About = () => {
    return (
        <>
            <HeaderNav />
            <img src={aboutHeaderImg} alt="" className="w-full"/>

            {/* Story Section */}
            <div className="w-full lg:min-h-screen py-12 lg:py-30 bg-radial-[at_5%_15%] from-purple-300 via-purple-700 via-20% to-purple-800 to-95%">
                <div className="flex flex-col lg:flex-row justify-around items-center w-[90%] md:w-full m-auto">
                    <div className=" ">
                        <img src={aboutHuman} alt="" className="" />
                    </div>
                    <div className="flex flex-col space-y-5 lg:space-y-10 text-white mt-5 md:w-[90%] lg:mt-0 lg:w-1/2 text-center lg:text-start">
                        <h2 className="text-4xl font-bold">Our Story</h2>
                        <p className="text-xl font-medium">
                            Learnverrse was born from a simple but powerful idea: learning should feel like a conversation with a guide, not a lecture from a screen. We saw a gap between traditional online courses and real, engaging mentorship .and we decided to bridge it.
                            Built by a team of educators, designers, and innovators, Learnverrse is a platform where students connect with real experts who are passionate about sharing knowledge. Whether you're just starting out or leveling up your career, we’re here to make learning more human, more accessible, and more impactful.
                        </p>
                        <button className="text-primary-500 rounded-[10px] bg-white px-8 py-3 font-semibold lg:px-6 w-auto cursor-pointer">
                            Explore our courses
                        </button>
                    </div>
                </div>
            </div>

            {/* Mission section */}
            <div className="bg-primary-100 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] justify-between gap-y-5 lg:gap-y-0 lg:gap-x-5 m-auto">
                    <div className="bg-white w-full lg:w-[70%] px-8 py-10 lg:px-5 lg:py-5 border border-l-4 border-l-primary-500 rounded-[6px] space-y-3 flex flex-col items-start">
                        <div className="flex items-center space-x-2">
                            <RiMapPinFill className="text-primary-500 w-10 h-5"/>
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </div>
                        <p className="text-xl font-medium">
                            To empower curious minds by connecting them with expert guides, 
                            providing practical skills, and transforming ambition into achievement 
                            — one course, one conversation, one breakthrough at a time.
                        </p>
                    </div>

                    <div className="bg-white w-full lg:w-[70%] px-8 py-10 lg:px-5 lg:py-5 border border-l-4 border-l-primary-500 rounded-[6px] space-y-3 flex flex-col items-start">
                        <div className="flex items-center space-x-2">
                            <BsEyeFill className="text-primary-500 w-10 h-5"/>
                            <h2 className="text-3xl font-bold">Our Vision</h2>
                        </div>
                        <p className="text-xl font-medium">
                            We envision a world where everyone, regardless of background or location, 
                            has access to expert-led education that inspires growth, confidence, and lifelong learning.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default About;