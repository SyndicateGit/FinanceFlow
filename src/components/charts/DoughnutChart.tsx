"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Bank } from '@/Models/BankModel'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DoughnutChartProps {
  banks: Bank[]; 
}
const DoughnutChart = ({banks} : DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Accounts',
        data: banks.map((bank) => bank.totalBalance),
        backgroundColor: banks.map((bank) => {
          if (bank.totalBalance < 0){
            return "Red"
          }
          if(bank.totalBalance < 1000){
            return "#2265d8"
          }        
          return "#0747b6"
        }),
      }
    ],
    labels: banks.map((bank) => bank.name),
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
