import Image from "next/image";
import CScard from './CardsFl';
export default function CardCompon() {
    return (
        <div className="flex items-center justify-center">
            <div>
                <div className="bg-[url('/Rectangle_10.png')] bg-cover bg-center h-screen w-[1350px] h-[100vh]">
                    <div>
                        <div className="flex items-center justify-center">
                            <div>
                                <div className="flex justify-center items-center relative top-[30px] right-[7px]">
                                    <Image
                                        src="/top.png"
                                        alt="top"
                                        width={100}
                                        height={50}
                                    />
                                </div>
                                <div className="flex justify-center items-center relative">
                                    <Image
                                        src="/destinations.png"
                                        alt="text"
                                        width={200}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 flex justify-center items-center">
                        <button className="bg-[#41D6C7] border-none rounded-[10px] px-[15px] py-[1px] text-[#41D6C7]" >-</button>
                    </div>
                    <div>
                        <p className="text-center text-[26px] text-white">
                            It’s hard enough deciding to move, you don’t have to worry about where to move <br /> to. These are some of the most popular and best locations to move to based on a <br /> number of factors.
                        </p>
                    </div>
                    <CScard/>
                </div>
            </div>
        </div>
    );
}
