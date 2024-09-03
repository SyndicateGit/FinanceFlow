'use client'
import HeaderBox from '@/components/Home/HeaderBox'
import RightSidebar from '@/components/Home/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { Account } from '@/Models/AccountModel'
import { Transaction } from '@/Models/TransactionModel'
import { Bank } from '@/Models/BankModel'
import { User, defaultUser } from '@/Models/UserModel'
import { getTransactions } from '@/services/transactions.services'
import { getAccounts } from '@/services/accounts.services'
import { getBanks } from '@/services/banks.services'
import { getUser } from '@/services/user.services'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { set } from 'zod'
import RecentTransactions from '@/components/Home/RecentTransactions'

const Home = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<User>();
  const [banks, setBanks] = React.useState<Bank[]>([]);
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const totalCurrentBalance = accounts.reduce((acc, account) => {
    if(account.accountType === 'CREDIT'){
      return acc - account.balance;
    }
    return acc + account.balance;
  }, 0);

  const fetchUserData = async () => {
    const user = await getUser();
    setUser(user);
    const accounts = await getAccounts();
    const banks = await getBanks();
    setBanks(banks);
    const transactions = await getTransactions();
    setTransactions(transactions);
    const updatedAccountsWithTransactions = updateAccountsWithTransactions(accounts, transactions);
    const updatedAccounts = updateAccountsWithBankName(updatedAccountsWithTransactions, banks);
    setAccounts(updatedAccounts);
    console.log(updatedAccounts);
  }

  const updateAccountsWithTransactions = (accounts:Account[], transactions: Transaction[]) => {
    const updatedAccounts = accounts.map((account) => {
      const accountTransactions = transactions.filter((transaction) => account.transactionIds.includes(transaction.id))
      return {...account, transactions: accountTransactions}
    })
    return updatedAccounts;
  }

  const updateAccountsWithBankName = (accounts: Account[], banks: Bank[]) => {
    const updatedAccounts = accounts.map((account) => {
      const bank = banks.find((bank) => bank.accountIds.includes(account.id))
      return {...account, accountName: bank?.name + " " + account.accountType}
    })
    return updatedAccounts;
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
            accounts={accounts}
            banks={banks}
            totalCurrentBalance={totalCurrentBalance}
          />
        </header>
        <RecentTransactions 
          accounts={accounts}
          banks={banks}
        />
      </div>
      <RightSidebar
        user={user || defaultUser}
        transactions={[]}
        banks={banks}
      />
    </section>
  )
}

export default Home
