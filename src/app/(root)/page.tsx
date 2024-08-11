import HeaderBox from '@/components/shared/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const LoggedIn = {firstName: 'Raymond', lastName: 'Zeng'}
  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className='no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
        <header className='flex flex-col justify-between gap-8'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || 'Guest'}
            subtext="Manage your transactions and budget with ease."
          />
          <TotalBalanceBox 
            accounts={[{id: "1", accountType: "SAVINGS", balance: 500.25, currency: "CAD"}, {id: "2", accountType: "DEBIT", balance: 750, currency: "CAD"}, {id: "3", accountType: "CREDIT", balance: 100, currency: "CAD"}]}
            totalCurrentBalance={1250.25}
          />
        </header>
      </div>
    </section>
  )
}

export default Home
