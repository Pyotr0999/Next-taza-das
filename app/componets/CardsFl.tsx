import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  id: number;
  src: string;
  slug: string;
  alt: string;
}

const navItems: NavItem[] = [
  { id: 1, src: "/Group1.png", alt: "nkarCard", slug: "/Parety" },
  { id: 2, src: "/Group2.png", alt: "nkarCard", slug: "/" },
  { id: 3, src: "/Group3.png", alt: "nkarCard", slug: "/" },
  { id: 4, src: "/Group4.png", alt: "nkarCard", slug: "/" },
];

export default function CScard() {
  return (
    <div className="flex justify-center items-center gap-29">
      {navItems.map((item) => (
        <Link href={item.slug} key={item.id}>
          <div className="">
            <Image
              src={item.src}
              alt={item.alt}
              width={200}
              height={500}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
