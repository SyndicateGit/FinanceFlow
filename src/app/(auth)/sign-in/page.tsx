import AuthForm from '@/components/forms/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center justify-center size-full max-sm:px-6'>
      <AuthForm type="signin" />
    </section>
  )
}

export default SignIn
