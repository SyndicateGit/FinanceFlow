"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/icons/LogoIcon.png'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormTextField from './FormTextInput'

import { Loader2 } from 'lucide-react'

const authFormSchema = (type: string) => z.object({
  email: z.string().email(),
  password: z.string().min(8),

  // sign-up specific fields
  firstName: type ==='sign-in'? z.string().optional() : z.string().min(2),
  lastName:  type ==='sign-in'? z.string().optional() : z.string().min(2),
  phone:  type ==='sign-in'? z.string().optional() : z.string().min(10),
})

const AuthForm = ({type}: {type: string}) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
    }, 2000);
    setIsLoading(false);
  }

  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 px-4'>
      <header className='flex flex-col gap-5'>
        <Link 
        href="/"
        className='cursor-pointer flex items-center gap-1 '>
          <Image src={Logo} width={34} height={34} alt='Finance Flow logo'/>
          <h1 className='text-[20px] font-ibm-plex-serif font-bold text-black-1'>Finance Flow</h1>
        </Link>
        <div className='flex flex-col gap-1'>
          <h1 className='text-[24px] font-semibold text-gray-900'>
            {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </h1>
          <p className='text-gray-600'>Please enter your details.</p>
        </div>
      </header>
      <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === 'sign-up' && (
            <>
              <div className='flex gap-4'>
               <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormTextField field={field} label={'First Name'} placeholder={'Enter your firstname.'} />
                  )} 
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormTextField field={field} label={'Last Name'} placeholder={'Enter your firstname.'} />
                  )}  
                />
              </div>
               
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormTextField field={field} label={'Phone Number'} placeholder={'Enter your phone number.'} />
                  )}  
                />
            </>
            )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormTextField field={field} label={'Email'} placeholder={'Enter your email.'} />
          )}
          />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormTextField field={field} label={'Password'} placeholder={'Enter your password.'} />
          )}
          />
          <div className='flex flex-col gap-4'>
            <Button type="submit" disabled={isLoading} className='rounded-lg border bg-bank-gradient font-semibold text-white hover:border-bankGradient'>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className='animate-spin'/> &nbsp;
                    Loading...
                  </>
                ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
            
          </form>
        </Form>
        <footer className='flex justify-center gap-1'>
          <p className='text-gray-600'>{ type === 'sign-in'
          ? "Don't have an account?"
          : "Already have an account?"}
          </p>
          <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='cursor-pointer text-bankGradient font-semibold'>
            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </Link>
        </footer>
      </>
    </section>
  )
}

export default AuthForm
