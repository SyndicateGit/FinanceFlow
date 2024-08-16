import React from 'react'
import { FormControl, FormLabel, FormMessage } from '../shared/ui/form'
import { Input } from '../shared/ui/input'
import { UseFormReturn } from 'react-hook-form';

interface FormFieldProps {
  field: any,
  label: string,
  placeholder: string,
}
const FormTextField = ({field, label, placeholder}: FormFieldProps) => {
  return (
  <div className='flex flex-col gap-1.5'>
    <FormLabel className="text-14 max-w-[280px] font-medium text-gray-700">
      {label}
    </FormLabel>
    <div className='flex w-full'>
      <FormControl>
        <Input 
        placeholder={placeholder}
        className='rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500'
        type={field.name === 'password' ? 'password' : 'text'}
        {...field}
        />
      </FormControl>
    </div>
    <FormMessage className='text-red-500 mt-2 text-[12px]'/>
  </div>
  )
}

export default FormTextField
