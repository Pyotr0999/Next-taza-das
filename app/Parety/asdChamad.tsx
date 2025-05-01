import Image from "next/image";

export default function Chamadan (){
    return(
        <div className="flex justify-center items-center pt-[30px]">
            <div className="w-[1300px] h-[133px] bg-blue-300 rounded-[10px]">
                <Image
                src="/image7.png"
                alt="nksda"
                width={174}
                height={173}
                className="relative bottom-[70px] left-[30px]"
                />
                <div className="">
                    <h1>Are you ready to move?</h1>
                    <p>Get in touch and let our team help you put things together and plan your move.</p>
                </div>
                <div className="">
                    <button></button>
                </div>
            </div>
        </div>
    )
}