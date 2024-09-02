import { formatAmount } from '@/lib/utils';
import { Bank } from '@/Models/BankModel'
import Link from 'next/link';
import React from 'react'
import BankLogo from '@/components/shared/BankLogo';

interface BankCardProps {
  bank: Bank;
  userName: string;
  showBalance?: boolean;
  currency?: string;
}



const BankCard = ({bank, userName, showBalance = true, currency = "CAD"}: BankCardProps) => {
  return (
    <Link href="/" className='flex flex-col justify-between h-[190px] w-full max-w-[320px] rounded-[20px] border border-white bg-bank-gradient shadow-sm text-white border-r-[20px] border-r-bankGradient px-5 pb-4 pt-5'>
        <div className='flex justify-between'>
          <div className='flex-col'>
            <h1 className='font-semibold'>{bank.name}</h1>
            <p className=''>{`$${bank.totalBalance} ${currency}`}</p>
          </div>
          <BankLogo bankName={bank.name} />
        </div>
        <div className=''>
          {userName}
        </div>
    </Link>
  )
}

export default BankCard
