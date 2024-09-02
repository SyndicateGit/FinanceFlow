'use client'
import React from 'react'
import { User } from '@/Models/UserModel'
import Link from 'next/link'
import Image from 'next/image'
import PlusIcon from '@/public/icons/plus.svg'
import { Bank } from '@/Models/BankModel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import BankCard from '../BankCard'
interface RightSidebarProps {
  user: User,
  banks: Bank[],
  transactions: any,
}
const RightSidebar = ({user, banks, transactions} : RightSidebarProps) => {
  return (
    <aside className='no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important'>
      <section className='flex flex-col pb-8'>
        <div className=' h-[120px] w-full bg-custom-gradient-mesh bg-cover bg-no-repeat' />
        <div className='relative flex px-6 max-xl:justify-center'>
          <div className='flex-center absolute -top-8 size-24 rounded-full bg-gray-200 border-8 border-white p-2 shadow-md'>
            <span className='text-5xl font-bold text-blue-500'>
              {user.firstName[0]}
            </span>
          </div>
          <div className='flex flex-col pt-24'>
            <h1 className='text-[24px] font-semibold text-gray-900 text-nowrap'>
              {user.firstName} {user.lastName}
            </h1>
            <p className='text-gray-600'>
              {user.email}
              </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-between gap-8 px-6 py-8'>
        <div className='flex w-full justify-between'>
          <h2 className='text-[18px] font-semibold text-gray-900'>My Banks</h2>
          <Link href="/" className='flex gap-2'>
            <Image src={PlusIcon} alt='add account' width={20} height={20} />
            <h2 className='text-[14px] font-semibold text-gray-600'>Add Bank</h2>
          </Link>
        </div>
        {banks.length > 0 && (
          <Carousel opts={{align: "center", loop: true,}} className='mx-8 py-8'>
            <CarouselContent>
              {banks.map((bank, index) => (
                <CarouselItem key={index}>
                  <BankCard bank={bank} userName={`${user.firstName} ${user.lastName}`} showBalance={false} currency='CAD'/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
