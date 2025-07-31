import React from 'react';

const CertificateTemplate = React.forwardRef(
  ({ name, issuingOrganisation, dateOfIssue }, ref) => (
    <div
      ref={ref}
      className=""
      // className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <h2>{name}</h2>
      <p>Issued by: {issuingOrganisation}</p>
      <p>Date of Issue: {dateOfIssue}</p>
    </div>
  )
);

export default CertificateTemplate;
// className = 'mb-2 text-xl font-bold';
