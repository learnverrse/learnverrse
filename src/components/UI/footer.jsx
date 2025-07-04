import { FiChevronDown, FiChevronsDown } from "react-icons/fi";

import { 
    logo2, 
    footerLine, 
    linkedIn, 
    faceBook, 
    instagram, 
    xTwitter, 
} from "../details";
import { useState } from "react";

function Footer() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (section) => {
        setOpenDropdown(openDropdown === section ? null : section);
    };

    return (
        <footer className="container bg-[#121212] py-10 lg:px-10 lg:py-20 w-full">
            <div className="m-auto flex w-[90%] md:w-[95%] lg:w-[90%] flex-col items-start justify-between md:flex-row">
                <div className="flex flex-col space-y-6 text-white mb-10 order-1 md:hidden">
                    <img src={logo2} alt="logo" />
                </div>

                <div className="flex flex-col space-y-6 text-white order-5 md:order-none mb-6 md:mb-0 md:w-[20%] lg:w-auto md:text-[13px] lg:text-base">
                    <img src={logo2} alt="logo" className="hidden md:block md:w-[80%] lg:w-full"/>
                    <a href="#">About us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                </div>

                <div className="flex flex-col space-y-6 text-white w-full md:w-[20%] lg:w-auto order-2 md:order-none">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl md:text-[15px] lg:text-xl font-bold">For Learner</h2>
                        <button className="md:hidden" onClick={() => toggleDropdown("learner")}>
                            <FiChevronDown className={`${openDropdown === "learner" ? "rotate-180" : ""} transition-transform`} />
                        </button>
                    </div>
                    <div className={`${openDropdown === "learner" ? "flex" : "hidden"} md:flex flex-col space-y-6 mb-4 md:mb-0 md:text-[13px] lg:text-base`}>
                        <a href="#">Browse Courses</a>
                        <a href="#">How It Works</a>
                        <a href="#">Pricing</a>
                        <a href="#">Help Center</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-6 text-white w-full md:w-[20%] lg:w-auto order-3 md:order-none">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl md:text-[15px] lg:text-xl font-bold">For Educator</h2>
                        <button className="md:hidden" onClick={() => toggleDropdown("educator")}>
                            <FiChevronDown className={`${openDropdown === "educator" ? "rotate-180" : ""} transition-transform`} />
                        </button>
                    </div>
                    <div className={`${openDropdown === "educator" ? "flex" : "hidden"} md:flex flex-col space-y-6 mb-4 md:mb-0 md:text-[13px] lg:text-base`}>
                        <a href="#">Become an educator</a>
                        <a href="#">Educator Dashboard</a>
                        <a href="#">Community</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-6 text-white w-full md:w-[20%] lg:w-auto order-4 md:order-none">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl md:text-[15px] lg:text-xl font-bold">Legal & Support</h2>
                        <button className="md:hidden" onClick={() => toggleDropdown("legal")}>
                            <FiChevronDown className={`${openDropdown === "legal" ? "rotate-180" : ""} transition-transform`} />
                        </button>
                    </div>
                    <div className={`${openDropdown === "legal" ? "flex" : "hidden"} md:flex flex-col space-y-6 mb-4 md:mb-0 md:text-[13px] lg:text-base`}>
                        <a href="#">Forms of Services</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies settings</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 text-white order-6 md:order-none">
                    <h2 className="text-xl md:text-[15px] lg:text-xl font-bold">Contact Us</h2>
                    <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter your email address"
                    className="placeholder:text-ourGray outline-primary-800 bg-white p-2 text-black md:max-w-sm lg:w-auto"
                    ></input>
                </div>
            </div>

            <div className="m-auto mt-16 w-full md:w-[95%] lg:w-[90%]">
                <img src={footerLine} alt="" />
            </div>

            <div className="m-auto mt-10 flex flex-col space-y-5 md:space-y-0 md:flex-row w-[90%] md:w-[95%] lg:w-[90%] items-center justify-between text-white">
                <div className="flex items-center space-x-3">
                    <a href="#">
                        <img src={linkedIn} alt="" className=""/>
                    </a>
                    <a href="#">
                        <img src={faceBook} alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={xTwitter} alt="" />
                    </a>  
                </div>
                <div>
                    <p className="text-sm md:text-base">
                        2025{" "}
                        <span className="font-bold">
                            Learn<span className="text-primary-600">verrse</span>
                        </span>
                        . All rights Reserved.
                    </p>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <div className="border-r-1 px-3">
                    <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                    <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;