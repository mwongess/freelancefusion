import Image from "next/image"

const NoMesages = () => {
  return (
    <div className="flex  flex-col justify-center items-center gap-3 ">
        <Image className="mt-[10%]" src="/taken.svg" height={150} width={200} alt="taken"/>
        <p className="font-bold">There are no messages!</p>
    </div>
  )
}

export default NoMesages