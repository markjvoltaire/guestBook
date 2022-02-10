import React from 'react';
import { useEntries } from '../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div className="guest-input">
      {entries.map((entry) => (
        <div className="userEntry" key={entry.id}>
          <p>{entry.entry}</p>
          <p>-{entry.name}</p>
        </div>
      ))}
    </div>
  );
}
