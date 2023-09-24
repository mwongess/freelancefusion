const Services = () => {
    return (
        <div id="services" className="text-center">
            <h1 className='font-bold text-2xl'>Sercices</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-4 gap-3 px-8 py-20  text-center ">
                <div className="border rounded p-3 h-fit">
                    <h1>Graphics Design</h1>
                </div>
                <div className="border rounded p-3 h-fit">
                    <h1>Writing and Translation</h1>
                </div>
                <div className="border rounded p-3 h-fit">
                    <h1>Programming and Tech</h1>
                </div>
                <div className="border rounded p-3 h-fit">
                    <h1>Business</h1>
                </div>
            </div>
        </div>
    )
}

export default Services
