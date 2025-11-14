import RegisterForm from '@/components/registerform';
import { ReturnButton } from '@/components/returnbutton';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="px-8 py-16 container mx-auto max-w-svh space-y-8">
      <div className="space-y-8">
        <ReturnButton href="/" label="Home"></ReturnButton>
        <h1 className="text-3xl font-bold">Register</h1>
      </div>
      <RegisterForm></RegisterForm>
      <p className="text-muted-foreground text-sm">
        Already have an account ?{' '}
        <Link href="/auth/login" className="hover:text-foreground">
          Login
        </Link>
      </p>
    </div>
  );
}
