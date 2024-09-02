"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Account } from '@/Models/AccountModel'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  accounts: Account[]; 
}
const DoughnutChart = ({accounts} : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Accounts',
        data: accounts.map((account) => account.balance),
        backgroundColor: accounts.map((account) => {
          if (account.accountType === "CREDIT"){
            return "Red"
          }
          if(account.accountType === "SAVINGS"){
            return "#2265d8"
          }        
          return "#0747b6"
        }),
      }
    ],
    labels: accounts.map((account) => account.accountType),
  }
  return (
    <Doughnut 
      data={data} 
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          }
        }
      }}
    />
  )
}

export default DoughnutChart
