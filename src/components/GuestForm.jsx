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
    <label>
      name
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );

  return (
    <>
      <div>
        <DarkModeToggle />
      </div>
      <div className="guestinput">
        <form className="form" onSubmit={handleSubmit}>
          {user ? null : guestEntryInput}

          <div className="inputs">
            <label>
              Entry
              <input
                placeholder="enter entry"
                value={guestEntry}
                onChange={(e) => setGuestEntry(e.target.value)}
              />
            </label>
          </div>
          <div className="button">
            <button>Submit Entry</button>
          </div>
          <button
            className="new-user-button"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            New User Entry
          </button>
        </form>
      </div>
    </>
  );
}
