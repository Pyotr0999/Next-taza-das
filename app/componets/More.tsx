import Image from "next/image";

export default function More () {
    return (
        <div className="p-[120px]">
                <div className="">
                    <div className="">
                        <div className="block">
                        <div className="">
                            <div className="flex justify-center items-center">
                                <Image
                                 src="/more.png"
                                  alt="nksss"
                                  width={135}
                                  height={100}
                                  />
                                  
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                 src="/destinations (2).png"
                                  alt="nkss"
                                  width={463}
                                  height={101}
                                  />
                                  
                            </div>
                        </div>
                   </div>
                   <div className="p-[20px] flex justify-center items-center">
                    <button  className="bg-gray-200 border-0 rounded-[10px] w-[35px] h-[20px]">-</button>
                  </div>
                    <div className="flex justify-center items-center aligen-center text-center">
                    <p className="text-black">Your peace of mind doesn’t have to be tied to where everyone else is. We have a <br/> good number of travel and relocation destinations. Take your time and find the <br/> perfect one for you. </p>
                   </div>
                </div>
            </div>
            </div>
    )
}