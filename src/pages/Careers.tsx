import React from 'react';

const Careers = () => {
  const jobs = [
    {
      title: "Sales Manager",
      location: "Pune, MH",
      type: "Full-time",
      description: "Lead the sales team, build client relationships, and achieve targets.",
      requirements: "5+ years in sales management, strong leadership skills."
    },
    {
      title: "Sales Executive",
      location: "Pune, MH",
      type: "Full-time",
      description: "Promote products, assist customers, and meet sales goals.",
      requirements: "2+ years of sales experience, tiles industry knowledge preferred."
    },
    {
      title: "Receptionist",
      location: "Pune, MH",
      type: "Full-time",
      description: "Handle front desk operations, calls, and administrative tasks.",
      requirements: "Proficient in MS Office, excellent communication skills."
    },
    {
      title: "Helper",
      location: "Pune, MH",
      type: "Full-time",
      description: "Support with loading/unloading and warehouse tasks.",
      requirements: "Physically fit, hardworking, and team-oriented."
    },
    {
      title: "Driver",
      location: "Pune, MH",
      type: "Full-time",
      description: "Ensure timely deliveries and maintain vehicle condition.",
      requirements: "Valid driver's license, clean record, and route knowledge."
    }
  ];

  const handleApplyClick = (jobTitle) => {
    const mailtoLink = `mailto:Sadgurutiles@gmail.com?subject=Application for ${encodeURIComponent(
      jobTitle
    )}&body=Dear HR,%0D%0A%0D%0AI am writing to apply for the position of ${encodeURIComponent(jobTitle)}. Please find my resume attached.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-black">Career Opportunities at Sadhguru Tiles</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Join Our Team</h2>
          <p className="text-gray-700">
            We're always looking for talented individuals to join our growing team at our location in Lohagaon, Pune. 
            Check out our current openings below.
          </p>
        </div>
        
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">{job.title}</h3>
                  <p className="text-gray-700">{job.location}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-800 mb-4">{job.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-900 font-medium mb-2">Requirements:</p>
                <p className="text-gray-700">{job.requirements}</p>
              </div>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => handleApplyClick(job.title)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-xl font-semibold text-black mb-4">Location</h3>
          <p className="text-gray-800">
            Sr. No. 1/3, Yojana Nagar,<br />
            near HP Petrol Pump,<br />
            Wagholi-Lohagaon Road,<br />
            (Lohagaon) Pune-411047
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;