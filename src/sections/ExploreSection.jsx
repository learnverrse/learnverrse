import React from 'react'
import {dataAnalytics, cyberSecurity, uiUx,   } from '../components/details';
import CoursesSection from '@/components/UI/CourseSection';
import Button from '@/components/UI/Button';


const ExploreSection = () => {
  return (
     <div className="container flex flex-col items-center justify-center py-8">
            <h2 className="mb-7 text-3xl font-bold lg:text-5xl text-[#121212]">
              Explore Our Courses
            </h2>
            <p className="text-lg lg:text-2xl font-medium text-[#121212]">
              Explore in demand skill courses
            </p>
            <div className="m-auto mt-8 w-full lg:w-[95%] bg-[#F0E5FF] px-14 py-14 lg:px-10 lg:py-6 md:rounded-lg
            ">
              <CoursesSection limitCourses={3} />
               <Button
                label={'View All Courses'}
                active={true}
                
              />
            </div>
          </div>
  )
}

// const CourseSection = () => {
//   return (
//     <div className="container mx-auto mt-10 px-6">
//       <h2 className="mb-6 text-3xl font-semibold text-center">Explore Our Courses</h2>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {data.map((course, index) => (
//           <div key={index} className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
//             <img src={course.img} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
//             <h3 className="mt-4 text-lg font-semibold">{course.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// const data = [
//   {
//     img: dataAnalytics,
//     title: 'Data Analytics: Transforming Data into Actionable Insights',
//   },
//   {
//     img: cyberSecurity,
//     title: 'Cybersecurity Fundamentals: Protecting Digital Frontiers',
//   },
//   {
//     img: uiUx,
//     title: 'UI/UX Design Masterclass: Design with Users in Mind',
//   },
// ]

export default ExploreSection