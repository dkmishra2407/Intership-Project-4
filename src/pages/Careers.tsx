import React from 'react';

const Careers = () => {
  const jobs = [
    {
      title: "Sales Representative",
      location: "New York, NY",
      type: "Full-time",
      description: "We're looking for an experienced sales representative to join our showroom team."
    },
    {
      title: "Tile Installation Expert",
      location: "Brooklyn, NY",
      type: "Full-time",
      description: "Seeking a skilled tile installation expert with 5+ years of experience."
    },
    {
      title: "Showroom Manager",
      location: "Manhattan, NY",
      type: "Full-time",
      description: "Looking for a passionate showroom manager to lead our flagship store."
    }
  ];


  const handleApplyClick = (jobTitle) => {
    const mailtoLink = `mailto:Sadgurutiles@gmail.com?subject=Application for ${encodeURIComponent(
      jobTitle
    )}&body=Dear HR,%0D%0A%0D%0AI am writing to apply for the position of ${encodeURIComponent(jobTitle)}. Please find my resume attached.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Career Opportunities</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-600">
            We're always looking for talented individuals to join our growing team. 
            Check out our current openings below.
          </p>
        </div>
        
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.location}</p>
                </div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700" onClick={()=>handleApplyClick(job.title)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;