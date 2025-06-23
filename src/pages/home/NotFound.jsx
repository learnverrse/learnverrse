import React from 'react'
import { Link } from 'react-router';
import Footer from '@/components/UI/footer';


const NotFound = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-300 py-4 '>
       <div className='mb-10 justify-center items-center text-center'>
        <p className='mb-4 text-3xl font-bold'>Error Page</p>
        <h1 className='text-9xl font-extrabold mb-4'>404</h1>
        <p className='text-xl mb-5'>Oops! Page Does Not Exist</p>
        <Link
            to='/'
            className='text-white bg-primary-700 hover:bg-primary-800 rounded-md px-4 py-2 mt-4'
        >
            Go Back
        </Link>
       </div>
        <Footer />
    </section>
  )
}

export default NotFound