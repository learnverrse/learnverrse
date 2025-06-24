import React from 'react'
import {payStack, unilag, google, fintech, interSwitch, mtn,  } from '../components/details';

const BrandSection = () => {
  return (
     <div className="container mx-auto mt-5 md:mt-8 max-w-7xl flex-grow px-6 py-5">
            <div className="flex items-center justify-between gap-6">
              <img src={payStack} alt="" className='w-[10%] lg:w-auto' />
              <img src={unilag} alt="" className='w-[10%] lg:w-auto' />
              <img src={google} alt="" className='w-[10%] lg:w-auto' />
              <img src={fintech} alt="" className='w-[10%] lg:w-auto' />
              <img src={interSwitch} alt="" className='w-[10%] lg:w-auto' />
              <img src={mtn} alt="" className='w-[10%] lg:w-auto' />
            </div>
          </div>
  )
}

export default BrandSection