
import { fiveStar, fourStar, testimonialImg } from "../details";

function ReviewsCarousel({ reviews }) {
  return (
    <div className="w-full">
        <div className="mt-8 flex space-x-4 m-auto px-5 lg:px-4 gap-2 md:gap-6 md:px-10 lg:grid-cols-3 md:space-x-0 overflow-x-auto overflow-y-hidden lg:overflow-hidden w-full ">
            {data.map((d, index) => (
                <div
                    key={index}
                    className="min-w-sm flex flex-col rounded-2xl border border-white/20 p-6 backdrop-blur-md bg-white/10 shadow-xl hover:bg-white/15 transition-all duration-300 text-white"
                >
                    <div className="mb-4 flex items-center gap-x-4">
                        <img src={d.profileImg} alt={d.name} />
                        <p className="leading-[13px] lg:leading-[25px] font-semibold">
                            {d.name}
                        </p>
                    </div>
                    <blockquote className="leading-[13px] lg:leading-[25px] text-[12px] lg:text-base">
                       "{d.review}"
                    </blockquote>
                    <div className="mt-4 flex justify-end">
                        <img src={d.starImg} alt="Rating" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

const data = [
    {
        profileImg: testimonialImg,
        name: 'Temitayo Bakare',
        review: 'The Data Analytics course made complex concepts easy. the quizzes and hands-on exercises helped me truly understand python and excel. i even used my certificate to secure an internship .',
        starImg: fourStar,
    },
    {
        profileImg: testimonialImg,
        name: 'John Adams',
        review: 'Publishing my cybersecurity course on learnverrse was seamless. The dashboard gave me full access to my students progress and earnings . i have grown a learner base of over 500 in two months.',
        starImg: fourStar,
    },
    {
        profileImg: testimonialImg,
        name: 'Kareem Jones',
        review: 'I tried other LMS platforms but learnverrse felt more tailored for me. The personalized courses, close tutorship and seamless interaction boosted my confidence.',
        starImg: fiveStar,
    },
]

export default ReviewsCarousel;