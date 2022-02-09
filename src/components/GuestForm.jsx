import React, { useState } from 'react';
import { useEntries } from '../context/EntryContext';
import { useUser } from '../context/UserContext';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import '../App.css';

export default function GuestForm() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function updateGuestEntry() {
    if (!guestEntry) return;
    setUser(name);
    setEntries([...entries, { id: entries, name, entry: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuestEntry();
  };

  const guestEntryInput = (
    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
  );

  return (
    <div className='guest-input'>
      <DarkModeToggle />

      <form onSubmit={handleSubmit}>
        {user ? null : guestEntryInput}

        <div>
          <input
            placeholder="enter entry"
            value={guestEntry}
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <div>
          <button>Submit Entry</button>
        </div>
      </form>
    </div>
  );
}
