'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from "@/public/icons/LogoIcon.png"
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
interface SidebarProps {
  user: User;
}

const Sidebar = ({user}:SidebarProps) => {
  const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
      <nav className='flex flex-col gap-4'>
        <Link 
        href="/"
        className='mb-12 cursor-pointer items-center gap-2'
        >
          <Image src={Logo} width={34} height={34} alt='Finance Flow logo' className='size-[24px] max-xl:size-14'/>
          <h1 className='2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden'>Finance Flow</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
        return (
          <Link key={item.label} href={item.route} className={cn("flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start", {'bg-[#0179FE] text-white': isActive})}>
            <div className='relative size-6'>
              <Image src={item.imageUrl} alt={item.label} fill className={cn({'brightness-[3] invert': isActive})}/>
            </div>
            <p className={cn('text-16 font-semibold text-black-2 max-xl:hidden', {"!text-white": isActive})}>
              {item.label}
            </p>
          </Link>
        )})}
      </nav>
    </section>
  )
}

export default Sidebar
