'use client'

import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

interface DeleteUserButtonProps {
  userId: string;
}

export const DeleteUserButton = ({ userId }: DeleteUserButtonProps) => {
  const [isPending, setIsPending] = useState(false);
  async function handleClick() {
    setIsPending(true)

    setIsPending(false)
  }
  return (
    <Button
      size="icon"
      variant="destructive"
      className="size-7 rounded-sm"
      disabled={isPending}
      onClick={handleClick}
    >
      <span className="sr-only">Delete User</span>
      <TrashIcon></TrashIcon>
    </Button>
  );
};

export const PlacehoderDeleteUserButton = () => {
  return (
    <Button
      size="icon"
      variant="destructive"
      className="size-7 rounded-sm"
      disabled
    >
      <span className="sr-only">Delete User</span>
      <TrashIcon></TrashIcon>
    </Button>
  );
};
