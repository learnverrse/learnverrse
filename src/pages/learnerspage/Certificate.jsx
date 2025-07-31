import { certificateBanner } from '@/components/details';
import Button from '@/components/UI/Button';
import CoursesSection from '@/components/UI/CourseSection';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CertificateTemplate from './CertificateTemplate';

const Certificate = () => {
  const certificateRef = React.useRef();
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const [downloadRequested, setDownloadRequested] = React.useState(false);

  const [certificates, setCertificates] = React.useState([
    {
      id: 1,
      name: 'Certificate of cybersecurity',
      issuingOrganisation: 'Learnverrse',
      dateOfIssue: '2025-07-18',
      downloadUrl: '#',
    },
    {
      id: 2,
      name: 'Certificate of web development',
      issuingOrganisation: 'Learnverrse',
      dateOfIssue: '2025-07-18',
      downloadUrl: '#',
    },
    {
      id: 3,
      name: 'Certified scrum master',
      issuingOrganisation: 'Learnverrse',
      dateOfIssue: '2025-07-18',
      downloadUrl: '#',
    },
  ]);

  const addCertificate = (certificateData) => {
    const newCertificate = {
      id: Date.now(),
      name: certificateData.name,
      issuingOrganisation: certificateData.issuingOrganisation || 'Learnverrse',
      dateOfIssue: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      downloadUrl: certificateData.downloadUrl || '#',
    };

    setCertificates((preview) => [...prev, newCertificate]);
  };

  const handleDownload = async (certificateId, certificateName) => {
    const selectedCert = certificates.find((cert) => cert.id === certificateId);

    if (!selectedCert) return;

    setSelectedCertificate(selectedCert);
    setDownloadRequested(certificateName);

    // if (!certificateRef.current) return;
    // const canvas = await html2canvas(certificateRef.current);
    // const data = canvas.toDataURL('image/png');

    // const pdf = new jsPDF({
    //   orientation: 'landscape',
    //   unit: 'px',
    //   format: 'a4',
    // });
    // pdf.addImage(data, 'PNG', 10, 10, 190, 0);
    // pdf.save(`${certificateName}.pdf`);

    // const selected = certificates.find((cert) => cert.id === certificateId);
    // if (!selected) return;
    // setSelectedCertificate(selected);

    // const certificateContainer = document.getElementById('hidden-certifacte');
    // certificateContainer.style.display = 'block';

    // await html2canvas(certificateRef.current).then((canvas) => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF('p', 'mm', 'a4');
    //   pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
    //   pdf.save(`${certificateName}.pdf`);
    // });
    // console.log(`Downloading certificate ${certificateName}`);

    // certificateContainer.style.display = 'none';
  };

  React.useEffect(() => {
    const downloadCertificate = async () => {
      if (downloadRequested && certificateRef.current) {
        const canvas = await html2canvas(certificateRef.current);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: 'a4',
        });
        pdf.addImage(data, 'PNG', 10, 10, 190, 0);
        pdf.save(`${downloadRequested}.pdf`);
        setDownloadRequested(false);
      }
    };
    downloadCertificate();
  }, [downloadRequested, selectedCertificate]);

  const hiddenCertificate = (
    <div
      id="hidden-certificate"
      className={downloadRequested ? 'block' : 'hidden'}
    >
      <div ref={certificateRef} className="">
        <CertificateTemplate
          name={selectedCertificate?.name}
          issuingOrganisation={selectedCertificate?.issuingOrganisation}
          dateOfIssue={selectedCertificate?.dateOfIssue}
        />
      </div>
    </div>
  );

  // Render certificates table if User has certificates
  if (certificates.length > 0) {
    return (
      <div className="h-screen md:w-full">
        {hiddenCertificate}
        <div className="flex flex-col items-center justify-between p-8 md:flex-row">
          <div className="pb-8 md:pb-0">
            <h1 className="mb-1 text-2xl font-semibold">My Certificates</h1>
          </div>
        </div>

        <div className="px-4 lg:px-8">
          <div className="rounded-lg border bg-white shadow-sm">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Certificate name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Issuing Organisation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Date of issue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {certificates.map((certificate) => (
                  <tr key={certificate.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                      {certificate.name}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {certificate.issuingOrganisation}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {certificate.dateOfIssue}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <button
                        onClick={() =>
                          handleDownload(certificate.id, certificate.name)
                        }
                        className="text-primary-600 hover:text-primary-800 font-medium"
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

      <div className="flex flex-col items-center px-4 lg:px-0">
        <img src={certificateBanner} alt="" className="" />
        <h2 className="mt-6 text-2xl font-bold">No certifications yet</h2>
        <p className="my-4 text-center text-sm font-semibold text-[#BDBDBD]">
          You haven’t earned any certificate yet. start a learning path to earn
          your first certificate
        </p>
        <Button label="Browse learning path" active={false} />
      </div>
    </div>
  );
};

export default Certificate;
