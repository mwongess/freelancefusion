import Image from "next/image"

const Notes = () => {
    return (
        <div className="flex justify-center  items-center w-1/2">
            <div>
                <Image src="/fingerprint.svg" height={200} width={350} alt="fingerprint" />
            </div>
        </div>
    )
}

export default Notes