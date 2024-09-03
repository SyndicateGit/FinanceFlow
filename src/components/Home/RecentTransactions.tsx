'use client'

import { Account } from '@/Models/AccountModel'
import { Bank } from '@/Models/BankModel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import React, { useState, useMemo, useEffect } from 'react'

interface RecentTransactionsProps {
  accounts: Account[],
  banks: Bank[],
}

export default function RecentTransactions({ accounts, banks }: RecentTransactionsProps) {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)

  const bankAccounts = useMemo(() => {
    if (!selectedBank) return []
    return accounts.filter(account => selectedBank.accountIds.includes(account.id))
  }, [selectedBank, accounts])

  useEffect(() => {
    // Set the first bank as default when the component mounts
    if (banks.length > 0 && !selectedBank) {
      setSelectedBank(banks[0])
    }
  }, [banks, selectedBank])

  useEffect(() => {
    // Set the first account of the selected bank as default
    if (bankAccounts.length > 0 && !selectedAccount) {
      setSelectedAccount(bankAccounts[0])
    }
  }, [bankAccounts, selectedAccount])

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
          onValueChange={(bankId) => {
            const newBank = banks.find(bank => bank.id === bankId) || null
            setSelectedBank(newBank)
            setSelectedAccount(null) // Reset selected account when bank changes
          }}
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
          <Tabs 
            value={selectedAccount?.id} 
            onValueChange={(accountId) => {
              const newAccount = bankAccounts.find(account => account.id === accountId) || null
              setSelectedAccount(newAccount)
            }}
          >
            <TabsList>
              {bankAccounts.map((account: Account) => (
                <TabsTrigger key={account.id} value={account.id}>
                  {account.accountName || account.accountType}
                </TabsTrigger>
              ))}
            </TabsList>
            {bankAccounts.map((account: Account) => (
              <TabsContent key={account.id} value={account.id}>
                <div className="p-4 border rounded">
                  <h3 className="font-semibold mb-2">{account.accountName || account.accountType}</h3>
                  <p>Balance: {account.balance} {account.currency}</p>
                  {account.transactions && account.transactions.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {account.transactions.slice(0, 5).map((transaction) => (
                        <li key={transaction.id} className="flex justify-between items-center">
                          <span>{transaction.description}</span>
                          <span className={transaction.type === 'EXPENSE' ? 'text-red-500' : 'text-green-500'}>
                            {transaction.type === 'EXPENSE' ? '-' : '+'}${Math.abs(transaction.amount)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4">No recent transactions</p>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  )
}