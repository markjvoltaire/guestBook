import React from 'react';
import { useEntries } from '../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <h1>Hello</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.entry}</p>
          <p>User: {entry.name}</p>
        </div>
      ))}
    </div>
  );
}
