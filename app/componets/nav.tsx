import Image from "next/image"
import Link from "next/link"

interface NavItem{
    id:number,
    slug:string,
    title:string
}
const navItems: NavItem[]=[
    {
        id:1,
        slug:'/',
        title:'Destinations'
    },
    {
        id:2,
        slug:'/Parety',
        title:'Deals'
    },
    {
        id:3,
        slug:'/',
        title:'Explore'
    },
    {
        id:4,
        slug:'/',
        title:'Resources'
    }
]
export default function Nav(){
    return (
        <nav className="flex items-center justify-center gap-5 p-[20px]">
            <ul className="flex items-center justify-center gap-10">
                {navItems.map((item)=>(
                    <li key={"nav-item"+item.id} className="text-black"><Link href={item.slug}>{item.title}</Link></li>
                ))}
            </ul>
            <Image
                src="/Group 34.png"
                alt="menu"
                width={20}
                height={20}
                />
        </nav>
    )
}