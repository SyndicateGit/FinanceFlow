import React from 'react'
import { User } from '@/Models/UserModel'
import { Account } from '@/Models/AccountModel'

interface RightSidebarProps {
  user: User,
  accounts: Account[],
  transactions: any,
}
const RightSidebar = ({user, accounts, transactions} : RightSidebarProps) => {
  return (
    <div>
      Right Sidebar
    </div>
  )
}

export default RightSidebar
