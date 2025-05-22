import { useState } from 'react';

const UploadCourse = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [filesPreview, setFilesPreview] = useState([]);
  const [videoPreview, setVideoPreview] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    let selectedFiles = [...e.target.files];

    setSelectedFile((prev) => [...prev, ...selectedFiles]);
    const previewURL = selectedFiles.map((file) => URL.createObjectURL(file));

    setFilesPreview((prev) => [...prev, ...previewURL]);
    console.log(filesPreview);
  };

  const handleVideoChange = (e) => {
    let selectedFiles = [...e.target.files];

    setSelectedVideo((prev) => [...prev, ...selectedFiles]);
    const previewURL = selectedFiles.map((file) => URL.createObjectURL(file));

    setVideoPreview((prev) => [...prev, ...previewURL]);
    console.log(videoPreview);
  };

  return (
    <main className="mx-auto h-screen w-full overflow-y-auto px-10">
      {/*========== sidebar ========== */}

      {/*============= main content =================*/}
      <>
        {/* <!-- search mobile view --> */}

        <div className="mb-12 px-4 py-6 sm:px-0">
          {/*  <!-- Form  --> */}
          <form className="mx-auto max-w-7xl">
            <div className="form-grid my-8">
              <div className="space-y-6">
                {/*   <!--Course Name  --> */}
                <div className="mb-6 max-w-3xl">
                  <label
                    for="course-name"
                    className="text-heading text-xl font-medium"
                  >
                    Course Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="course-name"
                    placeholder="Type course name"
                    className="bg-ourGray-100 mt-1 w-full rounded-md border-gray-300 px-4 py-3 text-2xl shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none"
                  />
                </div>

                {/*   <!-- Topic --> */}
                <div className="mb-6 max-w-3xl">
                  <label
                    for="topic"
                    className="text-heading text-xl font-medium"
                  >
                    Topic<span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="topic"
                    placeholder="Type Topic"
                    className="bg-ourGray-100 mt-1 w-full rounded-md border-gray-300 px-4 py-3 text-2xl shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none"
                  />
                </div>

                {/*  <!-- Body --> */}
                <div className="mb-6 max-w-3xl">
                  <label
                    for="topic"
                    className="text-heading text-xl font-medium"
                  >
                    Body<span className="text-error">*</span>
                  </label>
                  <textarea
                    id="body"
                    rows="12"
                    placeholder="Discuss the topic"
                    className="bg-ourGray-100 mt-1 w-full rounded-md border-gray-300 px-4 py-3 text-2xl shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none"
                  ></textarea>
                </div>

                {/*  <!-- Add Attachment  --> */}
                <div className="mb-6 max-w-xl">
                  <label
                    for="attachement"
                    className="text-heading text-xl font-medium"
                  >
                    Add Attachment<span className="text-error">*</span>
                    (supporting images, PDF files, etc.)
                  </label>

                  <div className="relative">
                    <input
                      type="file"
                      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
                      onChange={(e) => {
                        handleFileChange(e);
                      }}
                      name="attachement"
                      id="attachement"
                      className="bg-ourGray-100 mt-1 flex h-40 w-full justify-center rounded-md border-2 border-gray-300 px-6 py-5"
                    />
                    <label
                      htmlFor="attachement"
                      className="absolute top-1/2 left-1/2 z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </label>
                  </div>

                  {filesPreview.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {selectedFile.map((file, index) => {
                        const fileURL = filesPreview[index];
                        const fileType = file.type;

                        if (fileType.startsWith('image/')) {
                          return (
                            <img
                              key={index}
                              src={fileURL}
                              alt={`Preview ${index + 1}`}
                              className="h-24 w-24 rounded border object-cover"
                            />
                          );
                        } else if (fileType === 'application/pdf') {
                          return (
                            <iframe
                              key={index}
                              src={fileURL}
                              title={`PDF Preview ${index + 1}`}
                              className="h-24 w-24 rounded border"
                            ></iframe>
                          );
                        } else if (fileType.startsWith('video/')) {
                          return (
                            <video
                              autoPlay
                              key={index}
                              src={fileURL}
                              controls
                              className="h-24 w-24 rounded border object-cover"
                            ></video>
                          );
                        } else {
                          // For other docs like Word (.doc, .docx) just show file name
                          return (
                            <div
                              key={index}
                              className="flex h-24 w-24 items-center justify-center rounded border bg-gray-100 p-2 text-center text-xs"
                            >
                              <p>{file.name}</p>
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>

                {/*   <!-- add video content --> */}
                <div className="mb-6 max-w-xl">
                  <label
                    htmlFor="video"
                    className="text-heading text-xl font-medium"
                  >
                    Add Video Content<span className="text-error">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      name="video"
                      id="video"
                      placeholder=""
                      className="bg-ourGray-100 mt-1 flex h-40 w-full justify-center rounded-md border-2 border-gray-300 px-6 py-5"
                    />
                    <label
                      htmlFor="video"
                      className="absolute top-1/2 left-1/2 z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </label>
                  </div>

                  {selectedVideo.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {videoPreview.map((src, index) => (
                        <video
                          src={src}
                          key={index}
                          className="h-24 w-24 rounded border object-cover"
                          alt={`Preview ${index + 1}`}
                        ></video>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    </main>
  );
};

export default UploadCourse;
