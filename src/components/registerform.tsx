'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {toast} from 'sonner'
import { signUp } from '@/lib/auth-client';

const RegisterForm: React.FC = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const name = String(formData.get('name'))
    if (!name) return toast.error('Please enter your name')
    const email = String(formData.get('email'))
    if (!email) return toast.error('Please enter your email')
    const password = String(formData.get('password'))
    if (!password) return toast.error('Please enter your password')

    await signUp.email(
      {name,email,password},{
        onRequest(context) {
          
        },
        onResponse(context) {
          
        },
        onError(ctx) {
          toast.error(ctx.error.message)
        },
        onSuccess(context) {
          
        },
      }

    )

    console.log({name,email,password})

  }

  return (
 <form onSubmit={handleSubmit} className='max-w-sm w-full space-y-4'>
  <div className='space-y-2'>
    <Label htmlFor='name'>Name</Label>
    <Input id='name' name='name'/>
  </div>
  <div className='space-y-2'>
    <Label htmlFor='email'>Email</Label>
    <Input type='email' id='email' name='email'/>
  </div>
  <div className='space-y-2'>
    <Label htmlFor='password'>Password</Label>
    <Input type='password' id='password' name='password'/>
  </div>
  <Button type='submit' className='w-full'>Register</Button>
  </form>
  )
 
};

export default RegisterForm;
