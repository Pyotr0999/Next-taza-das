import Image from "next/image";

export default function HeaderCns2 () {
    return (
        <div className="flex justify-center items-center pt-[120px]">
        <div className="">
        <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-[80px] border w-[504px] h-[132px] rounded-[10px]">
                    <div className="">
                        <h1 className="text-black text-[12px] pb-[10px]">City size</h1>
                        <div className="flex gap-[5px]">
                        <Image
                        src='/Group(3).png'
                        alt='sxvbgsz'
                        width={30}
                        height={30}
                     />
                     <h1 className="text-black text-[14px]">35,730</h1>
                     </div>
                     <p className="text-gray-400 text-[14px] pl-[35px]">(2009)</p>
                </div>
                   <div className="">
                    <h1 className="text-black text-[12px] pb-[10px]">Weather</h1>
                    <div className="flex items-center gap-[10px] pb-[10px]">
                        <Image
                        src="/sun.png"
                        alt="sun"
                        width={20}
                        height={20}
                        />
                        <h1 className="text-black text-[14px]">High - 29°C</h1>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <Image
                        src="/snow.png"
                        alt="snow"
                        width={20}
                        height={20}
                        />
                        <h1 className="text-black text-[14px]">LOW - 19°C</h1>
                    </div>
                   </div>
                   <div className="">
                    <h1 className="text-[12px] pb-[10px] text-black">Safety</h1>
                    <div className="flex gap-[10px]">
                        <Image
                        src="/star.png"
                        alt="star"
                        width={20}
                        height={15}
                        />
                        <h1 className="text-black text-[14px]">4.8</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="">
        <div className="flex justify-center items-center pt-[50px]">
            <div className="">
                <Image
                src="/Rectangle20.png"
                alt="nkMec  "
                width={504}
                height={194}
                />
            </div>
        </div>
        <div className="flex gap-[15px] pt-[20px]">
        <div className="">
        <Image
                src="/Rectangle21.png"
                alt="nkMec"
                width={247}
                height={194}
                />
        </div>
        <div className="">
        <Image
                src="/Rectangle22.png"
                alt="nkMec"
                width={247}
                height={194}
                />
        </div>
        </div>
        </div>
        <div className="flex justify-center items-center pt-[30px]">
    <div className="">
        <h1 className="pb-[15px] text-black">Mothly spend for a family of 4</h1>
        <div className="w-[504] h-[176px] border rounded-[7px] flex justify-center items-center gap-[15px]">
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">Rent</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$1,800</h1>
                <p className="text-[12px] text-gray-400">This is for a 3 <br /> bedroom(40Sqm) <br /> within city center</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">GROCERIES</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$1,600</h1>
                <p className="text-[12px] text-gray-400">The average cost of <br /> Groceries for a family <br /> of 4.</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px] pt-[10px]">OTHERS</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$2,200</h1>
                <p className="text-[12px] text-gray-400">The average monthly <br /> cost of Gas, Water, <br /> Electricity, and <br /> Internet.</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">TOTAL</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$5,600</h1>
                <p className="text-[12px] text-gray-400">This is the average <br /> mothly spending for a <br /> family of four(4)</p>
            </div>
            </div>
        </div>
    </div>
</div>
<div className="flex justify-center items-center pt-[30px]">
    <div className="">
        <h1 className="pb-[15px] text-black">Mothly spend for a family of 4</h1>
        <div className="w-[504] h-[176px] border rounded-[7px] flex justify-center items-center gap-[15px]">
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">Rent</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$1,800</h1>
                <p className="text-[12px] text-gray-400">This is for a 3 <br /> bedroom(40Sqm) <br /> within city center</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">GROCERIES</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$1,600</h1>
                <p className="text-[12px] text-gray-400">The average cost of <br /> Groceries for a family <br /> of 4.</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px] pt-[10px]">OTHERS</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$2,200</h1>
                <p className="text-[12px] text-gray-400">The average monthly <br /> cost of Gas, Water, <br /> Electricity, and <br /> Internet.</p>
            </div>
            </div>
            <div className="">
                <h1 className="text-gray-700  pb-[15px]">TOTAL</h1>
                <div className="">
                <h1 className="text-black text-[20px] pb-[7px]">$5,600</h1>
                <p className="text-[12px] text-gray-400">This is the average <br /> mothly spending for a <br /> family of four(4)</p>
            </div>
            </div>
        </div>
    </div>
</div>
</div> 
</div>    
    )
}