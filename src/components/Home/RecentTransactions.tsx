import { Account } from '@/Models/AccountModel'
import { Transaction } from '@/Models/TransactionModel'
import Link from 'next/link'
import React from 'react'

interface RecentTransactionsProps {
  accounts: Account[],
}
const RecentTransactions = ({accounts}: RecentTransactionsProps) => {
  return (
    <section className='flex w-full flex-col gap-6'>
      <header className='flex items-center justify-between'>
        <h2 className='text-xl md:text-2xl font-semibold text-gray-900'>
          Recent Transactions
        </h2>
        <Link href="/transaction-history/" className='text-sm rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700'>
          View All
        </Link>
      </header>
    </section>
  )
}

export default RecentTransactions
