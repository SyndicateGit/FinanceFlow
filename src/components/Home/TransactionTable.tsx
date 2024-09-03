'use client';

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Transaction } from '@/Models/TransactionModel'
import { cn, formatAmount } from '@/lib/utils';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable = ({transactions}: TransactionTableProps ) => {
  const total = transactions.reduce((acc, transaction) => {
    if(transaction.type === "EXPENSE"){
      return acc - transaction.amount;
    }
    return acc + transaction.amount;
  }, 0);
  return (
    <Table>
    <TableHeader className='bg-[#F9FAfB]'>
      <TableRow>
        <TableHead className="">Transaction</TableHead>
        <TableHead className="">Type</TableHead>
        <TableHead className="">Date</TableHead>
        <TableHead className="">Category</TableHead>
        <TableHead className="">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {transactions.map((transaction) => (
        <TableRow key={transaction.id}>
          <TableCell className="font-medium">{transaction.note}</TableCell>
          <TableCell>{transaction.type}</TableCell>
          <TableCell className="">{transaction.date.slice(0, 10)}</TableCell>
          <TableCell>{transaction.category}</TableCell>
          <TableCell className={cn("",{"text-red-500": transaction.type === "EXPENSE"} )}>{formatAmount(transaction.amount, "USD")}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={4}>Total</TableCell>
        <TableCell className="">{formatAmount(total, "USD")}</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
  )
}

export default TransactionTable
