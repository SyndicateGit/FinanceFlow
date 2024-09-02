'use client';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount, currency}:{amount: number, currency: string}) => {
  return (
    <div className='w-full'>
      $<CountUp end={amount} suffix={currency} decimal=',' duration={2.75} decimals={2}/>
    </div>
  )
}

export default AnimatedCounter
