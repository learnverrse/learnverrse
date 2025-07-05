import React from 'react';
import {
  payStack,
  unilag,
  google,
  fintech,
  interSwitch,
  mtn,
} from '../components/details';

const BrandSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-4 lg:py-4">
      <div className="container mx-auto max-w-6xl flex-grow px-6 py-5">
        <div className="flex items-center justify-between gap-6">
          <img src={payStack} alt="" className="w-[10%] lg:w-auto" />
          <img src={unilag} alt="" className="w-[10%] lg:w-auto" />
          <img src={google} alt="" className="w-[10%] lg:w-auto" />
          <img src={fintech} alt="" className="w-[10%] lg:w-auto" />
          <img src={interSwitch} alt="" className="w-[10%] lg:w-auto" />
          <img src={mtn} alt="" className="w-[10%] lg:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
