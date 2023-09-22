const Job = ({job}: any) => {
    return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg">
            <h1>{job.title}</h1>
            <div className="flex items-center gap-3">
                <p className="bg-[blue] rounded-full py-1 px-3 ">New</p>
                <p>Fixed price</p>
            </div>
            <div >
                <div className="flex gap-10 mb-3">
                    <div>
                        <p>$ {job.price}</p>
                        <p>Fixed price</p>
                    </div>
                    <div>
                        <p>Expert</p>
                        <p>Experince level</p>
                    </div>
                </div>
                <p>{job.description}</p>
                {/* <div className="flex flex-wrap gap-3 my-3">
                    <p className="text-black bg-slate-100 rounded-full py-1 px-7 w-fit">ts</p>
                    <p className="text-black bg-slate-100 rounded-full py-1 px-7 w-fit">js</p>
                    <p className="text-black bg-slate-100 rounded-full py-1 px-7 w-fit">Next</p>
                    <p className="text-black bg-slate-100 rounded-full py-1 px-7 w-fit">Appwrite</p>

                </div> */}
                {/* <button className="rounded-full  py-1 px-6 text-white bg-[#0B9240]">See More</button> */}
            </div>
        </div>
    )
}

export default Job