import React from 'react';
import { CertificateBackground } from '@/components/details';

const CertificateTemplate = React.forwardRef(
  ({ name, issuingOrganisation, dateOfIssue }, ref) => (
    <div>
      <div
        ref={ref}
        className="flex h-screen items-center justify-center bg-auto bg-center bg-no-repeat pb-5"
        style={{ backgroundImage: `url(${CertificateBackground})` }}
      >
        <div className="max-w-2xl text-center">
          <h1 className="mb-4 text-5xl font-semibold">{name}</h1>

          <h5 className="mb-8 italic">certificate number: LV3859763</h5>

          <h4 className="mb-8">GIVEN TO :</h4>

          <h2
            className="mb-8 border-b-2 pb-5 text-4xl font-bold"
            style={{ borderBottomColor: '#000' }}
          >
            Titilope
          </h2>

          <h4 className="font-bold">Acknowledgment</h4>

          <p className="mt-4" style={{ color: '#101828' }}>
            As an acknowledgment of this achievement, we affirm that this
            certificate is awarded in recognition of the dedication, skill, and
            growth demonstrated throughout the program including hands-on
            experience in UX/UI design, wireframing, prototyping, and
            collaborative product building.
          </p>

          <h4 className="mt-4 text-2xl font-bold">
            Awarded by {''}
            <span style={{ color: '491b86' }}>{issuingOrganisation}</span>
          </h4>

          <div className="mt-6 flex flex-row items-center justify-around">
            <div>
              <h3 className="mb-4 font-bold">Founder</h3>

              <h4
                className="w-32 border-b pb-2"
                style={{ borderBlockColor: '#000' }}
              >
                MR Tee
              </h4>

              <p className="mt-2">{dateOfIssue}</p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Educator</h3>

              <h4
                className="w-32 border-b pb-2"
                style={{ borderBlockColor: '#000' }}
              >
                MR Tee
              </h4>

              <p className="mt-2">{dateOfIssue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

export default CertificateTemplate;
// className = 'mb-2 text-xl font-bold';
