import { Account } from '@/Models/AccountModel'
import { Bank } from '@/Models/BankModel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import React, { useState, useMemo, useEffect } from 'react'
import TransactionTable from './TransactionTable'

interface RecentTransactionsProps {
  accounts: Account[],
  banks: Bank[],
}

const RecentTransactions = ({ accounts, banks }: RecentTransactionsProps) => {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(banks[0] || null)

  const bankAccounts = useMemo(() => {
    if (!selectedBank) return []
    return accounts.filter(account => selectedBank.accountIds.includes(account.id))
  }, [selectedBank, accounts])

  useEffect(() => {
    // Set the first bank as default when the component mounts
    if (banks.length > 0 && !selectedBank) {
      setSelectedBank(banks[0])
    }
  }, [banks])

  
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
      
      <div className="space-y-4">
        <Select
          value={selectedBank?.id}
          onValueChange={(bankId) => setSelectedBank(banks.find(bank => bank.id === bankId) || null)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a bank" />
          </SelectTrigger>
          <SelectContent>
            {banks.map((bank) => (
              <SelectItem key={bank.id} value={bank.id}>
                {bank.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedBank && bankAccounts.length > 0 && (
          <Tabs defaultValue={bankAccounts[0]?.id} className="w-full">
            <TabsList className='mb-8'>
              {bankAccounts.map((account: Account) => (
                <TabsTrigger key={account.id} value={account.id}>
                  {account.accountName || account.accountType}
                </TabsTrigger>
              ))}
            </TabsList>
            {bankAccounts.map((account: Account) => (
              <TabsContent key={account.id} value={account.id}>
               <TransactionTable transactions={account?.transactions || []} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  )
}

export default RecentTransactions