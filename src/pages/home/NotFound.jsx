import React from 'react'
import { Link } from 'react-router';
import Footer from '@/components/UI/footer';
import { useNavigate } from 'react-router';
import HeaderNav from '@/components/UI/HeaderNav';



const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go to previous page
    } else {
      navigate('/'); // Fallback to home
    }
  };

  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-white to-purple-300 py-4 '>
        <HeaderNav bgColor="bg-transparent"  />
       <div className='my-10 justify-center items-center text-center'>
        <h1 className='text-9xl font-extrabold mb-4 text-primary-500'>404</h1>
        <p className='mb-4 text-3xl font-bold'>Oops! The page you’re looking for doesn’t exist on Learnverrse.</p>
        <p className='text-xl mb-5 italic'>Maybe you followed a broken link or mistyped the URL.</p>
        <button
            onClick={handleGoBack}
            to='/'
            className='text-white bg-primary-500 hover:bg-primary-700 rounded-md px-6 py-2 mt-4'
        >
            Go Back
        </button>
       </div>
        <Footer />
    </section>
  )
}

export default NotFound