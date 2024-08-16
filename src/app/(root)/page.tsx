'use client'
import HeaderBox from '@/components/shared/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getUser, getAccounts } from '@/services/auth.services'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { set } from 'zod'

const Home = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<User>();
  const [accounts, setAccounts] = React.useState<Account[]>([]);

  const totalCurrentBalance = accounts.reduce((acc, account) => acc + account.balance, 0);

  const fetchUserAndAccounts = async () => {
    const user = await getUser();
    setUser(user);
    const accounts = await getAccounts();
    setAccounts(accounts);
  }
  useEffect(() => {
    fetchUserAndAccounts();
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
            accounts={accounts}
            totalCurrentBalance={totalCurrentBalance}
          />
        </header>
      </div>
    </section>
  )
}

export default Home
