import React from 'react';
import { CertificateBackground } from '@/components/details';

const Certificate = () => {
  return (
    <div className="bg-primary-300">
      <div className="h-screen bg-auto bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${CertificateBackground})` }}>
           
           <div className='max-w-2xl text-center'> 
             <h1 className="text-5xl font-semibold text-black mb-4">Certificate Of Product Design</h1>

            <h5 className='italic mb-8'>certificate number: LV3859763</h5>

            <h4 className='mb-8'>GIVEN TO :</h4>

            <h2 className='border-b-2 border-b-black pb-3 text-4xl font-bold mb-8'>Titilope</h2>

            <h4 className='font-bold '>Acknowledgment</h4>

            <p className='mt-4 text-gray-900'>As an acknowledgment of this achievement, we affirm that this certificate is awarded in recognition of the dedication, skill, and growth demonstrated throughout the program including hands-on experience in UX/UI design, wireframing, prototyping, and collaborative product building.</p>

            <h4 className='mt-4 font-bold text-2xl'>Awarded by Learn<span className='text-primary-700'>verrse</span> </h4>

            <div className='flex flex-row items-center justify-around mt-6 '>

                <div>
                    <h3 className='font-bold mb-4'>Founder</h3>

                    <h4 className='border-b border-b-black w-32'>MR Tee</h4>

                    <p className='mt-2'>25/07/2025</p>


                </div>
                <div>
                    <h3 className='font-bold mb-4'>Educator</h3>

                    <h4 className='border-b border-b-black w-32'>MR Tee</h4>

                    <p className='mt-2'>25/07/2025</p>


                </div>

            </div>

           </div>
        
        
      </div>
    </div>
  );
};

export default Certificate;
