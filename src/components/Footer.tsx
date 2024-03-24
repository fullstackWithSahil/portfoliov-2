import { FooterLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <h1 className="text-3xl py-2 text-white text-center bg-blue-950 capitalize">
        <Link href={'#navbar'}>
          back to top
        </Link>
      </h1>
      <hr />
  
      <div className="w-full bg-blue-950 flex flex-col">
        {FooterLinks.map((link) => (
          <div className="flex my-4 rounded-sm" key={link.name}>
            <Image src={link.image} alt="image" className="w-10 mx-5" />
            <a
              href={link.link}
              rel="noopener noreferrer"
              className="text-white text-2xl capitalize mx-1"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}