import Image from "next/image";

export default function ImgnerComponet() {
    return (
      <div className="">
        
<div className="grid grid-cols-4 grid-rows-3 gap-8">
    <div className="row-span-2">
    <Image
        src="/images1.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="col-span-2 col-start-1 row-start-3">
    <Image
        src="/images2.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="col-start-2 row-start-1">
    <Image
        src="/images4.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="col-start-2 row-start-2">
    <Image
        src="/images1.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="row-span-3 col-start-3 row-start-1">
    <Image
        src="/images1.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="col-start-4 row-start-1">
    <Image
        src="/images1.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
    <div className="row-span-2 col-start-4 row-start-2">
    <Image
        src="/images1.png"
        alt="images"
        width={128}
        height={128}
        className="w-32"
        />
    </div>
</div>
    
      </div>
    );
  }
  