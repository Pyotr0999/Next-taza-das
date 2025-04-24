import Image from "next/image";
import Link from "next/link";

export default function CScard() {
    return(
    <div className="p-[90px] flex justify-center items-center">
                        <div className="flex gap-[20]">
                            <div>
                                <Link href='/Party'>
                                <Image
                                src="/Group1.png"
                                alt="nkarCard"
                                width={200}
                                height={300}
                                />
                                </Link>
                            </div>

                            <div>
                                <Image
                                src="/Group2.png"
                                alt="nkarCard"
                                width={200}
                                height={300}
                                />
                            </div>

                            <div>
                                <Image
                                src="/Group3.png"
                                alt="nkarCard"
                                width={200}
                                height={300}
                                />
                            </div>

                            <div>
                                <Image
                                src="/Group4.png"
                                alt="nkarCard"
                                width={200}
                                height={300}
                                />
                            </div>
                        </div>
                    </div>
                    )
}
