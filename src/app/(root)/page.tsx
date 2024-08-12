import HeaderBox from '@/components/shared/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const LoggedIn = {firstName: 'Raymond', lastName: 'Zeng'}
  const accounts: Account[] = [
    { id: "1", accountType: "SAVINGS", balance: 500.25, currency: "CAD" },
    { id: "2", accountType: "DEBIT", balance: 750, currency: "CAD" },
    { id: "3", accountType: "CREDIT", balance: -100, currency: "CAD" }
  ];
  const totalCurrentBalance = accounts.reduce((acc, account) => acc + account.balance, 0);
  return (
    <section className="no-scrollbar flex w-full overflow-y-scroll">
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-8 py-12 overflow-y-scroll'>
        <header className='flex flex-col justify-between gap-8'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || 'Guest'}
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
