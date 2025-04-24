import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

export default function Header() {
    return (
     <header className='flex justify-around items-center p-[20px]'>
      <Link href="/">
      <Image 
      src="/relocate.png"
      alt="logo"
      width={128}
      height={128}
      className="w-32"
      />
      </Link>
      <Nav />
     </header>

    );
  }
  