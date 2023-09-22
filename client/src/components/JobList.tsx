import Job from "./Job"


const JobList = () => {
  const jobs =[
    {
      "title": "Website Design",
      "description": "Design a responsive and visually appealing website for my business. Must include logo design and integration with content management system (CMS).",
      "price": "$500 - $1,500"
    },
    {
      "title": "Content Writing",
      "description": "Write 10 high-quality blog posts (500-800 words each) on topics related to technology and digital marketing.",
      "price": "$200 - $400"
    },
    {
      "title": "Logo Design",
      "description": "Create a unique and memorable logo for my startup. Provide multiple design concepts for review and revisions.",
      "price": "$100 - $300"
    },
    {
      "title": "Mobile App Development",
      "description": "Develop a cross-platform mobile app for iOS and Android that allows users to track fitness activities and set goals.",
      "price": "$2,000 - $5,000"
    },
    {
      "title": "Social Media Management",
      "description": "Manage social media accounts (Facebook, Twitter, Instagram) for a small business. Create and schedule posts, engage with followers, and track analytics.",
      "price": "$300 - $800 per month"
    },
  
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {jobs.map((job,index) => (
        < Job  key={index} job={job}/>
      ))}
    </div>
  )
}

export default JobList