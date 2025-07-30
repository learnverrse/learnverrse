import React from 'react';

const CertificateTemplate = React.forwardRef(
  ({ name, issuingOrganisation, dateOfIssue }, ref) => (
    <div
      ref={ref}
      className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p className="mb-1 text-gray-700">Issued by: {issuingOrganisation}</p>
      <p className="text-sm text-gray-500">Date of Issue: {dateOfIssue}</p>
    </div>
  )
);

export default CertificateTemplate;
