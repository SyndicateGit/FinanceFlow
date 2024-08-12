import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/icons/LogoIcon.png'

const AuthForm = ({type}: {type: string}) => {
  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10'>
      <header className='flex flex-col gap-5'>
        <Link 
        href="/"
        className='cursor-pointer flex items-center gap-1 px-4'>
          <Image src={Logo} width={34} height={34} alt='Finance Flow logo'/>
          <h1 className='text-[20px] font-ibm-plex-serif font-bold text-black-1'>Finance Flow</h1>
        </Link>
        <div className='flex flex-col gap-1 px-4'>
          <h1 className='text-[24px] font-semibold text-gray-900'>
            {type === 'sign-in' ? 'Sign In' : 'Sign up'}
          </h1>
          <p className='text-gray-600'>Please enter your details.</p>
        </div>
      </header>
      <form action="">
        
      </form>
    </section>
  )
}

export default AuthForm
