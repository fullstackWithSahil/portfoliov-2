"use client"
import Link from 'next/link';
import { homeNavLinks as navLinks } from "@/utils/constants";
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const router = usePathname();
    const activeStyles ='text-blue-900 rounded-2xl my-1 underline bg-white border-2 font-black p-3';
    const inactiveStyles ="text-white font-light p-3";
    const isActive =(link: string)=>link===router   
  return (
    <header>
        <nav>
            <ul className='flex  items-center justify-around border-2 py-1 list-none text-lg text-white'>
                {
                    navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link 
                                    href={link.path}
                                    className={isActive(link.path) ? activeStyles :inactiveStyles}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}