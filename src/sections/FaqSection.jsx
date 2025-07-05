import React, { useState } from 'react';
import { chevronRight, faqHuman } from '../components/details';

// const FaqSection = () => {
//   return (
//     <div className="container flex flex-col items-center justify-center py-10">
//             <h2 className="mb-4 text-2xl lg:text-[40px] font-bold text-[#121212]">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-base lg:text-2xl">What questions do you need answered?</p>

//             <div className="m-auto mt-8 flex w-[90%] lg:w-[70%] flex-col-reverse items-center gap-y-6 md:gap-y-0 justify-between lg:px-4 md:flex-row md:p-6">
//               <div className="flex flex-col w-[90%] lg:w-[50%] space-y-5">
//                 <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
//                   <p className='text-[14px]'>What is Learnverrse</p>
//                   <img src={chevronRight} alt="" className='hidden md:block' />
//                 </div>

//                 <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
//                   <p className='text-[14px]'>How do I sign up</p>
//                   <img src={chevronRight} alt="" className='hidden md:block' />
//                 </div>

//                 <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
//                   <p className='text-[14px]'>What payment methods are accepted</p>
//                   <img src={chevronRight} alt="" className='hidden md:block' />
//                 </div>

//                 <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
//                   <p className='text-[14px]'>Can I cancel my subscriptions at anytime</p>
//                   <img src={chevronRight} alt="" className='hidden md:block' />
//                 </div>

//                 <div className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 lg:px-10 lg:py-3 hover:bg-purple-200">
//                   <p className='text-[14px]'>How do I get paid as an educator</p>
//                   <img src={chevronRight} alt="" className='hidden md:block' />
//                 </div>
//               </div>

//               <div className="w-[60%] lg:w-[30%]">
//                 <img src={faqHuman} alt="" className=''/>
//               </div>
//             </div>
//           </div>
//   )
// }

function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-12  lg:py-16">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="mb-4 text-2xl font-bold text-[#121212] lg:text-[40px]">
          Frequently Asked Questions
        </h2>
        <p className="text-base lg:text-2xl">
          What questions do you need answered?
        </p>

        <div className="m-auto mt-8 flex w-[90%] flex-col-reverse items-center justify-between gap-y-6 md:w-[95%] md:flex-row md:gap-y-0 md:p-6 lg:w-[70%] lg:px-4">
          <div className="flex w-[90%] flex-col space-y-5 lg:w-[50%]">
            {[
              {
                id: 1,
                question: 'What is Learnverrse?',
                answer:
                  'Learnverrse is an online learning platform where learners access expert-led courses and educators share knowledge, build communities, and monetize their expertise.',
              },
              {
                id: 2,
                question: 'How do I sign up?',
                answer:
                  "Click the 'Sign Up' button on our homepage, provide your details, and you're ready to explore courses or create your educator profile.",
              },
              {
                id: 3,
                question: 'What payment methods are accepted?',
                answer:
                  'We accept major payment methods including Debit/Credit Cards, PayPal, Bank Transfers, and Digital Wallets where supported.',
              },
              {
                id: 4,
                question: 'Can I cancel my subscriptions at any time?',
                answer:
                  'Yes, subscriptions can be canceled anytime from your dashboard. Access remains active until the end of your current billing cycle.',
              },
              {
                id: 5,
                question: 'How do I get paid as an educator?',
                answer:
                  'Educators earn through course sales, live sessions, and community memberships. Payouts are processed monthly via bank transfer or PayPal.',
              },
            ].map(({ id, question, answer }) => (
              <div key={id}>
                <div
                  onClick={() => toggleQuestion(id)}
                  className="bg-primary-50 flex cursor-pointer items-center justify-between rounded-4xl px-6 py-5 hover:bg-purple-200 lg:px-10 lg:py-3"
                >
                  <p className="text-[14px]">{question}</p>
                  <img
                    src={chevronRight}
                    alt="toggle"
                    className={`hidden transform transition-transform lg:block ${openQuestion === id ? 'rotate-90' : 'rotate-0'}`}
                  />
                </div>
                {openQuestion === id && (
                  <div className="mt-2 p-3 text-sm">{answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="w-[60%] lg:w-[30%] lg:self-start">
            <img src={faqHuman} alt="FAQ Illustration" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
