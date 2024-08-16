'use client'
import React from 'react';
import{
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shared/ui/sheet";
import Image from 'next/image';
import HamburgerIcon from '@/public/icons/hamburger.svg';
import Link from 'next/link';
import Logo from "@/public/icons/LogoIcon.png";
import { sidebarLinks } from '@/constants/sidebarLinks';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { User } from '@/Models/UserModel';

const MobileNav = ({user}: {user: User}) => {
  const pathname = usePathname();
  return (
    <section className='w-fit'>
      <Sheet>
        <SheetTrigger>
          <Image src={HamburgerIcon} width={30} height={30} alt='menu' className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent side="left" className="border-none">
          <Link 
          href="/"
          className='cursor-pointer flex items-center gap-1 px-4'
          >
            <Image src={Logo} width={34} height={34} alt='Finance Flow logo'/>
            <h1 className='font-bold text-black-1 text-xl'>Finance Flow</h1>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 pt-16'>
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                        <Link key={item.label} href={item.route} className={cn("flex gap-3 items-center p-4 rounded-lg w-full max-w-60", {'bg-bankGradient text-white': isActive}, {"hover:bg-gray-200": !isActive})}>
                        <Image src={item.imageUrl} width={20} height={20} alt={item.label} className={cn({'brightness-[3] invert': isActive})}/>
                        <p className={cn('font-semibold text-black-2', {"!text-white": isActive})}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                    
                )})}
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
