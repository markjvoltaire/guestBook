import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  const headerMessage = user ? `Welcome To GuestBook ${user}` : 'Please Enter An Entry';
  return (
    <div>
      <h1>{headerMessage}</h1>
    </div>
  );
}
