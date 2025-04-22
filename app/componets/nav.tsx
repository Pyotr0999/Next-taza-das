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
        title:'Home'
    },
    {
        id:2,
        slug:'/shop',
        title:'shop'
    }
]
export default function Nav(){
    return (
        <nav>
            <ul>
                {navItems.map((item)=>(
                    <li key={"nav-item"+item.id}><Link href={item.slug}>{item.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}