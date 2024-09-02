'use client'
import HeaderBox from '@/components/Home/HeaderBox'
import RightSidebar from '@/components/Home/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { Account } from '@/Models/AccountModel'
import { Transaction } from '@/Models/TransactionModel'
import { Bank } from '@/Models/BankModel'
import { User, defaultUser } from '@/Models/UserModel'
import { getTransactions } from '@/services/transactions.services'
import { getUser, getAccounts, getBanks } from '@/services/auth.services'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { set } from 'zod'

const Home = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<User>();
  const [banks, setBanks] = React.useState<Bank[]>([]);
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const totalCurrentBalance = banks.reduce((acc, bank) => acc + bank.totalBalance, 0);

  const fetchUserData = async () => {
    const user = await getUser();
    setUser(user);
    const accounts = await getAccounts();
    setAccounts(accounts);
    const banks = await getBanks();
    setBanks(banks);
  }

  const fetchUserTransactions = async () => {
    const transactions = await getTransactions();
    setTransactions(transactions);
    console.log(transactions);
  }
  useEffect(() => {
    fetchUserData();
  }, [router]);

  return (
    <section className="no-scrollbar flex w-full overflow-y-scroll">
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-8 py-12 overflow-y-scroll'>
        <header className='flex flex-col justify-between gap-8'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={user?.firstName || 'Guest'}
            subtext="Manage your transactions and budget with ease."
          />
          <TotalBalanceBox 
            banks={banks}
            totalCurrentBalance={totalCurrentBalance}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={user || defaultUser}
        transactions={[]}
        accounts={accounts}
      />
    </section>
  )
}

export default Home
