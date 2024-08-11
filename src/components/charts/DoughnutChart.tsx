"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  accounts: Account[]; // Change this type to Account once it's defined
}
const DoughnutChart = ({accounts} : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Accounts',
        data: accounts.map((account) => account.balance),
        backgroundColor: [
          '#0747b6',
          '#2265d8',
          '#2f91fa',
        ],
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
