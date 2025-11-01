import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { SignOutButton } from '@/components/signoutbutton';
import { ReturnButton } from '@/components/returnbutton';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <p className="text-destructive">Unauthorized</p>;
  }
  return (
    <div className="px-8 py-16 container mx-auto max-w-svh space-y-8">
      <div className="space-y-8">
        <ReturnButton href='/' label='Home'></ReturnButton>
        <h1 className="text-3xl font-bold">Profile</h1>
      </div>
      <SignOutButton/>
      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
