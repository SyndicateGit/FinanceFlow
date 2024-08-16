import { User } from '@/Models/UserModel'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import LogoutIcon from '@/public/icons/logout.svg'
import { signOut } from '@/services/auth.services'

type SidebarFooterProps = {
  user: User,
  type: "desktop" | "mobile"
}
const SidebarFooter = ({user, type}: SidebarFooterProps) => {
  const handleLogout = () => {
    signOut();
  }

  return (
    <footer className='flex cursor-pointer items-center justify-between gap-2 py-6'>
      <div className={cn("flex size-10 items-center justify-center rounded-full bg-gray-200", {"max-xl:hidden": type === 'desktop'})}>
        <p className='text-xl font-bold text-gray-700'>
          {user.firstName[0]}
        </p>
      </div>

      <div className={cn("flex flex-1 flex-col justify-center", {"max-xl:hidden": type === 'desktop'})}>
        <h1 className='text-[14px] truncate text-gray-700 font-semibold'>
          {user.firstName} {user.lastName}
        </h1>
        <p className='text-[14px] truncate text-gray-600'>
          {user.email}
        </p>
      </div>

      <div className='relative size-5 max-xl:w-full max-xl:flex max-xl:justify-center max-xl:items-center' onClick={handleLogout}>
        <Image src={LogoutIcon} fill alt='logout'/>
      </div>
    </footer>
  )
}

export default SidebarFooter
