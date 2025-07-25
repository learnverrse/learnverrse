import { certificateBanner } from '@/components/details';
import Button from '@/components/UI/Button';
import CoursesSection from '@/components/UI/CourseSection';
import React from 'react';
import { FaSearch } from 'react-icons/fa';



const Certificate = () => {

  const [certificates, setCertificates] = React.useState([
    {
      id: 1,
      name: "Certificate of cybersecurity",
      issuingOrganisation: "Learnverrse",
      dateOfIssue: "2025-07-18",
      downloadUrl: "#"
    },
    {
      id: 2,
      name: "Certificate of web development",
      issuingOrganisation: "Learnverrse",
      dateOfIssue: "2025-07-18",
      downloadUrl: "#",
    },
    {
      id: 3,
      name: "Certified scrum master",
      issuingOrganisation: "Learnverrse",
      dateOfIssue: "2025-07-18",
      downloadUrl: "#",
    }
  ]);
 
  const addCertificate = (certificateData) => {
    const newCertificate = {
      id: Date.now(),
      name: certificateData.name,
      issuingOrganisation: certificateData.issuingOrganisation || "Learnverrse",
      dateOfIssue: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      downloadUrl: certificateData.downloadUrl || "#",
    };

    setCertificates(preview => [...prev, newCertificate]);
  };

  const handleDownload = (certificateId, certificateName) => {
    // Implement the logic here to handle the download
    console.log(`Downloading certificate ${certificateName}`);
  };

  // Render certificates table if User has certificates
  if (certificates.length > 0) {
    return (
      <div className='h-screen w-full'>
        <div className='flex flex-col items-center justify-between p-8 md:flex-row'>
          <div className='pb-8 md:pb-0'>
            <h1 className='mb-1 text-2xl font-semibold '>My Certificates</h1>
          </div>
        </div>

        <div className='px-4 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm border'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Certificate name
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Issuing Organisation
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Date of issue
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className='bg-white divide-y divide-gray-200'>
                {certificates.map((certificate) => (
                  <tr key={certificate.id} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {certificate.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {certificate.issuingOrganisation}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {certificate.dateOfIssue}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm'>
                      <button 
                        onClick={() => handleDownload(certificate.id, certificate.name)}
                        className='text-primary-600 hover:text-primary-800 font-medium'
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Render empty state if no certificates
  // This is the case when the user has not earned any certificates yet
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center justify-between p-8 md:flex-row">
        <div className="pb-8 md:pb-0">
          <h1 className="mb-1 text-2xl font-semibold">My Certificate</h1>
        </div>
      </div>

        <div className='flex flex-col items-center px-4 lg:px-0'>
            <img src={certificateBanner} alt="" className='' />
            <h2 className='text-2xl font-bold mt-6'>No certifications yet</h2>
            <p className='text-sm font-semibold text-[#BDBDBD] text-center my-4'>You haven’t earned any certificate yet. start a learning path to earn your first certificate</p>
            <Button
              label="Browse learning path"
              active={false}
            />
        </div>
    </div>
    
  );
};

export default Certificate;
