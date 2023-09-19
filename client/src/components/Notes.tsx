import Image from "next/image"

const Notes = () => {
    return (
        <div className="hidden sm:flex flex-col gap-10 justify-center text-center items-center w-1/2">
            <h1 className='font-bold text-2xl'><span className='border-2 p-1 text-[#0B9240]'>FF</span> FreelanceFusion</h1>
            <div>
                <Image src="/fingerprint.svg" height={200} width={350} alt="fingerprint" />
            </div>
        </div>
    )
}

export default Notes