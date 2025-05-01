import Image from "next/image"

export default function CardXch () {
    return (
        <div className="pt-[40px]">
                <div className="flex justify-center items-center">
                 <div className="flex gap-[20px] p-[30px]">
                    <div className="">
                        <Image src="/Estaing.png"
                         alt="asas"
                         width={342}
                         height={710}
                         />
                    </div>
                  </div>
                  <div className="block">
                  <div className="flex gap-[20px]">
                    <div className="">
                        <Image src="/Vik.png"
                         alt="asas"
                         width={459}
                         height={345}
                         />
                    </div>
                    <div className="">
                        <Image src="/Hamnoy.png"
                         alt="asas"
                         width={459}
                         height={345}
                         />
                    </div>
                  </div>
                  <div className="block pt-[20px]">
                  <div className="">
                    <Image src="/Montego.png"
                     alt="asas"
                     width={938}
                     height={345}
                     />
                           </div>
                        </div>
                    </div>
                </div>
                </div>
    )
}