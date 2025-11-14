import LoginForm from '@/components/loginform'
import { ReturnButton } from '@/components/returnbutton'
import Link from 'next/link'


export default function Page(){
    return (
        <div className="px-8 py-16 container mx-auto max-w-svh space-y-8">
            <div className="space-y-8">
                <ReturnButton href='/' label='Home'></ReturnButton>
                <h1 className="text-3xl font-bold">Login</h1>
                <LoginForm/>
                <p className='text-muted-foreground text-sm'>
                    Don&apos;t have an account ?{" "}
                    <Link href="/auth/register" className='hover:text-foreground'>Register</Link>
                </p>
            </div>
        </div>
    )
}