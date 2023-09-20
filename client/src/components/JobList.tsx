import Job from "./Job"

const JobList = () => {
  const jobs = [{}]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {Array.from({ length: 4 }).map((_, index) => (
        < Job key={index} />
      ))}
    </div>
  )
}

export default JobList