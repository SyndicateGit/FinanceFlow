import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './charts/DoughnutChart'
import { Account } from '@/Models/AccountModel'
import { Bank } from '@/Models/BankModel'

interface TotalBalanceBoxProps {
  accounts: Account[], 
  banks: Bank[],
  totalCurrentBalance: number,
}

const TotalBalanceBox = ({
  accounts = [],
  banks = [],
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className='flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6'>
      <div className='flex size-full max-w-[100px] items-center sm:max-w-[120px]'>
        <DoughnutChart accounts={accounts} banks={banks} />
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='text-[18px] font-semibold text-gray-900'>
          Bank Accounts : {accounts.length}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='text-14 font-medium text-gray-600'>
            Total Current Balance
          </p>
          <div className='text-[20px] lg:text-[24px] flex-1 font-semibold text-gray-900 flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} currency='CAD'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox
