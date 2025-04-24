import Image from "next/image";

export default function MainBgi (){
    return(
        <div className="bg-[url('/image12.png')] bg-cover bg-center h-screen">
      <div className=" pr-[350px] pt-[160px] flex items-center justify-center gap-100">
      <Image 
      src="/Group 32.png"
      alt="text"
      width={800}
      height={300}
      />
      </div>
      </div>
    )
}